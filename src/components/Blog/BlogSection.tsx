"use client";

import React, { useRef } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { motion, useInView } from "framer-motion";
import BlogCard from "./BlogCard"; // Adjust import path as needed

interface BlogItem {
    date: string;
    author: string;
    title: string;
    excerpt: string;
    href: string;
    image: string;
}

const blogData: BlogItem[] = [
    {
        date: "31 OCT",
        author: "Psic. Ruth Gonzalez",
        title: "Salud mental, un derecho universal",
        excerpt: "Entiende por qué la salud mental es un derecho para todos.",
        href: "/blog/post-1",
        image: "/blog/post-1.jpg",
    },
    {
        date: "31 AGO",
        author: "Psic. Brenda Linares",
        title: "Suicidio: Mitos y realidades",
        excerpt: "Desmitificando un fenómeno complejo y entendiendo sus orígenes.",
        href: "/blog/post-2",
        image: "/blog/post-2.jpg",
    },
    {
        date: "31 AGO",
        author: "Psic. Pablo Estrada",
        title: "Competencias parentales: ¿Qué hace a una mamá, a un papá ser eficientes?",
        excerpt: "Analizamos los factores clave que influyen en la crianza efectiva.",
        href: "/blog/post-3",
        image: "/blog/post-3.jpg",
    },
];

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
    const sectionInView = useInView(sectionRef, { once: true, amount: 0.2 });

    return (
        <Box ref={sectionRef} sx={{ py: { xs: 6, md: 10 } }}>
            <Container>
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    animate={sectionInView ? "visible" : "hidden"}
                >
                    <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
                        <Typography variant="subtitle1" sx={{ color: "primary.main", mb: 1 }}>
                            Blog
                        </Typography>
                        <Typography variant="h3">
                            Lo más nuevo en nuestro Blog
                        </Typography>
                    </Box>

                    <Grid container spacing={4}>
                        {blogData.map((item, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <BlogCard
                                    date={item.date}
                                    author={item.author}
                                    title={item.title}
                                    excerpt={item.excerpt}
                                    href={item.href}
                                    image={item.image}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </motion.div>
            </Container>
        </Box>
    );
};

export default BlogSection;
