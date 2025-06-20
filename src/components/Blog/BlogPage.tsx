"use client";

import React, { useRef, useState } from "react";
import { Box, Button, Container, Grid } from "@mui/material";
import { motion, useInView } from "framer-motion";
import BlogCard from "./BlogCard"; // Adjust import path as needed
import { blogData } from "@/components/Blog/BlogData";

const ITEMS_PER_PAGE = 9;

const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

const BlogSection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const sectionInView = useInView(sectionRef, { once: false, amount: 0 });

    const [currentPage, setCurrentPage] = useState(0);

    const totalPages = Math.ceil(blogData.length / ITEMS_PER_PAGE);
    const paginatedData = blogData.slice(
        currentPage * ITEMS_PER_PAGE,
        (currentPage + 1) * ITEMS_PER_PAGE
    );

    return (
        <Box ref={sectionRef} sx={{ py: { xs: 6, md: 10 }, minHeight: "100vh" }}>
            <Container>
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <Grid container spacing={4}>
                        {paginatedData.map((item, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <BlogCard
                                    date={item.date}
                                    author={item.author}
                                    title={item.title}
                                    excerpt={item.excerpt}
                                    href={`/single-blog/${item.slug}`}
                                    image={item.image}
                                />
                            </Grid>
                        ))}
                    </Grid>
                    <Box display="flex" justifyContent="center" alignItems="center" mt={4} gap={2} flexWrap="wrap">
                        <Button
                            variant="outlined"
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
                            disabled={currentPage === 0}
                        >
                            ← Anterior
                        </Button>

                        {/* Números de página */}
                        {[...Array(totalPages)].map((_, index) => (
                            <Button
                                key={index}
                                variant={index === currentPage ? "contained" : "outlined"}
                                onClick={() => setCurrentPage(index)}
                                sx={{
                                    minWidth: 40,
                                    px: 1,
                                    fontWeight: index === currentPage ? "bold" : "normal",
                                }}
                            >
                                {index + 1}
                            </Button>
                        ))}

                        <Button
                            variant="outlined"
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))}
                            disabled={currentPage === totalPages - 1}
                        >
                            Siguiente →
                        </Button>
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
};

export default BlogSection;