"use client";

import React, { useRef } from "react";
import { Box, Container, Grid, Typography, Card } from "@mui/material";
import { motion, useInView } from "framer-motion";

interface ProcessStep {
    title: string;
    description: string;
    icon?: React.ReactNode;
}

const processSteps: ProcessStep[] = [
    {
        title: "Consulta Inicial",
        description:
            "Evaluamos tus necesidades y te conectamos con el especialista adecuado.",
    },
    {
        title: "Evaluación",
        description:
            "Realizamos evaluaciones detalladas para entender tu situación.",
    },
    {
        title: "Plan de Tratamiento",
        description:
            "Diseñamos un plan personalizado para tu bienestar.",
    },
    {
        title: "Seguimiento",
        description:
            "Monitoreamos tu progreso y ajustamos el plan según sea necesario.",
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

const OurProcessSection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const inView = useInView(sectionRef, { once: true, amount: 0.2 });

    return (
        <Box
            ref={sectionRef}
            component={motion.div}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            sx={{
                py: { xs: 6, md: 10 },
            }}
        >
            <Container>
                <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            color: "primary.main",
                            mb: 1,
                            display: "block",
                        }}
                    >
                        Nuestro Proceso
                    </Typography>
                    <Typography variant="h3">
                        Descubre cómo trabajamos para brindarte la mejor atención.
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    {processSteps.map((step, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Card
                                component={motion.div}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={fadeUp}
                                sx={{
                                    textAlign: "center",
                                    p: 2,
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    backgroundColor: "white",
                                }}
                            >
                                <Typography variant="h6" sx={{ mb: 1 }}>
                                    {step.title}
                                </Typography>
                                <Typography variant="body2">
                                    {step.description}
                                </Typography>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default OurProcessSection;
