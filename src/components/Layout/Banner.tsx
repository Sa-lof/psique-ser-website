"use client";

import React, { useRef } from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion, useInView } from "framer-motion";

interface BannerProps {
    backgroundImage: string;
    title: string;
    description: string;
}

const bannerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

const Banner: React.FC<BannerProps> = ({ backgroundImage, title, description }) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const inView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <Box
            ref={ref}
            component={motion.div}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={bannerVariants}
            sx={{
                height: "100vh",
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                position: "relative",
            }}
        >
            <Container sx={{ position: "relative", zIndex: 1 }}>
                <Typography variant="h3" sx={{ mb: 2 }}>
                    {title}
                </Typography>
                <Typography variant="body1">
                    {description}
                </Typography>
            </Container>
        </Box>
    );
};

export default Banner;
