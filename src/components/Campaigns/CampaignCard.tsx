"use client";

import React, { useRef, useEffect } from "react";
import {
    Typography,
    Grid,
    Card,
    CardContent,
    CardMedia,
} from "@mui/material";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";

interface CampaignCardProps {
    title: string;
    description: string;
    images: string[];
}

// Simple fade-up variants for the container
const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

const CampaignCard: React.FC<CampaignCardProps> = ({
    title,
    description,
    images,
}) => {
    // Framer Motion ref for fade-up
    const cardRef = useRef<HTMLDivElement | null>(null);
    const inView = useInView(cardRef, { once: true, amount: 0.2 });

    // GSAP micro-animation for images
    useEffect(() => {
        if (inView && cardRef.current) {
            gsap.fromTo(
                cardRef.current.querySelectorAll(".campaign-image"),
                { opacity: 0, scale: 0.9 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power2.out",
                }
            );
        }
    }, [inView]);

    return (
        <motion.div
            ref={cardRef}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            style={{ width: "100%" }}
        >
            <Card
                sx={{
                    mb: 4,
                    overflow: "hidden",
                }}
            >
                <CardContent
                    sx={{
                        p: { xs: 2, md: 3 },
                    }}
                >
                    <Typography variant="h4" sx={{ mb: 2, fontWeight: 700 }}>
                        {title}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3 }}>
                        {description}
                    </Typography>

                    {/* Images Grid */}
                    <Grid container spacing={2}>
                        {images.map((imgSrc, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <CardMedia
                                    component="img"
                                    className="campaign-image"
                                    src={imgSrc}
                                    alt={`${title} - image ${index}`}
                                    sx={{
                                        width: "100%",
                                        height: "auto",
                                        borderRadius: 2,
                                        boxShadow: 1,
                                    }}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default CampaignCard;
