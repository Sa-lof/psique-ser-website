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

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut" },
    },
};

const CampaignCard: React.FC<CampaignCardProps> = ({
    title,
    description,
    images,
}) => {
    const cardRef = useRef<HTMLDivElement | null>(null);
    const inView = useInView(cardRef, { once: true, amount: 0.3 });

    useEffect(() => {
        if (inView && cardRef.current) {
            gsap.fromTo(
                cardRef.current.querySelectorAll(".campaign-image"),
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power3.out",
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
        >
            <Card
                sx={{
                    mb: 6,
                    borderRadius: 3,
                    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                    overflow: "hidden",
                }}
            >
                <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                    <Typography
                        variant="h4"
                        sx={{ mb: 2, fontWeight: "bold", color: "primary.main" }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ mb: 4, lineHeight: 1.7, color: "text.secondary" }}
                    >
                        {description}
                    </Typography>

                    <Grid container spacing={3}>
                        {images.map((imgSrc, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <motion.div
                                    whileHover={{ scale: 1.03 }}
                                    transition={{ type: "spring", stiffness: 200 }}
                                >
                                    <CardMedia
                                        component="img"
                                        className="campaign-image"
                                        src={imgSrc}
                                        alt={`${title} - image ${index}`}
                                        sx={{
                                            width: "100%",
                                            height: 240,
                                            objectFit: "cover",
                                            borderRadius: 2,
                                            boxShadow: 2,
                                            transition: "transform 0.3s ease",
                                        }}
                                    />
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default CampaignCard;
