"use client";

import React, { useRef, useEffect } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";

// Framer Motion variants for a simple fade-up
const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 },
    },
};

const WhyPsiqueSer: React.FC = () => {
    const imgRef = useRef<HTMLDivElement | null>(null);
    const textRef = useRef<HTMLDivElement | null>(null);

    // Check if text is in view to trigger Framer Motion fade-up
    const textInView = useInView(textRef, { once: true, amount: 0.2 });

    // GSAP microanimation for the image
    useEffect(() => {
        if (imgRef.current) {
            gsap.fromTo(
                imgRef.current,
                { opacity: 0, x: 30 },
                { opacity: 1, x: 0, duration: 1, ease: "power2.out" }
            );
        }
    }, []);

    return (
        <Box
            sx={{
                minHeight: { xs: "auto", md: "100vh" },
                display: "flex",
                alignItems: "center",
                py: { xs: 6, md: 8 },
            }}
        >
            <Container>
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <motion.div
                            ref={textRef}
                            variants={fadeUp}
                            initial="hidden"
                            animate={textInView ? "visible" : "hidden"}
                        >
                            <Typography variant="subtitle1" sx={{ color: "primary.main", mb: 1 }}>
                                ¿Por qué Psique & Ser?
                            </Typography>
                            <Typography variant="h3" sx={{ mb: 2 }}>
                                Somos Líderes en Psicología
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 2 }}>
                                Contamos con una red multidisciplinaria para promover tu bienestar integral.
                                Al integrar conocimientos de diversas disciplinas, como la Psiquiatría y la
                                Psicología, trabajamos en conjunto para ofrecerte la mejor atención.
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 4 }}>
                                Descubre cómo podemos ayudarte a alcanzar tus objetivos de bienestar mental y emocional.
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 4, fontStyle: "italic" }}>
                                “La salud mental no es un destino, es un proceso. Se trata de cómo conduces,
                                no de a dónde vas.” — Noam Shpancer
                            </Typography>
                        </motion.div>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box ref={imgRef}>
                            <Image
                                src="/psychology-illustration.jpg"
                                alt="Psicología"
                                width={600}
                                height={400}
                                style={{ objectFit: "cover" }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default WhyPsiqueSer;
