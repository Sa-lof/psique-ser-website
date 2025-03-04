"use client";

import React, { useRef } from "react";
import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    Button,
} from "@mui/material";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

interface BlogCardProps {
    date: string;
    author: string;
    title: string;
    excerpt: string;
    href: string;
    image: string;
}

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

const BlogCard: React.FC<BlogCardProps> = ({
    date,
    author,
    title,
    excerpt,
    href,
    image,
}) => {
    const cardRef = useRef<HTMLDivElement | null>(null);
    const inView = useInView(cardRef, { once: true, amount: 0.2 });

    return (
        <motion.div
            ref={cardRef}
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            style={{
                width: "100%",
                height: "100%",
            }}
        >
            <Card
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                }}
            >
                <CardMedia
                    component="img"
                    image={image}
                    alt={title}
                    sx={{ height: 180, objectFit: "cover" }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="overline" sx={{ display: "block", mb: 1 }}>
                        {date}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ mb: 1 }}>
                        {author}
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                        {title}
                    </Typography>
                    <Typography variant="body2">{excerpt}</Typography>
                </CardContent>
                <CardActions>
                    <Button
                        component={Link}
                        href={href}
                        variant="text"
                        sx={{ textTransform: "none" }}
                    >
                        Leer post →
                    </Button>
                </CardActions>
            </Card>
        </motion.div>
    );
};

export default BlogCard;
