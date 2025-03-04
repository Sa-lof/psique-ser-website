"use client";

import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";

interface ServiceItem {
    title: string;
    description: string;
    image: string;
}

const serviceData: ServiceItem[] = [
    {
        title: "Terapia",
        description:
            "Contamos con especialistas en terapia cognitivo conductual, humanismo y psicoanálisis.",
        image: "/therapy.jpg",
    },
    {
        title: "Evaluaciones",
        description:
            "Evaluaciones psicodiagnósticas, psicológicas y perfil vocacional.",
        image: "/evaluations.jpg",
    },
    {
        title: "Conferencias y Cursos",
        description: "Temas relacionados a la salud mental.",
        image: "/conferences.jpg",
    },
];

const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 },
    },
};

const ServiceSection: React.FC = () => {
    return (
        <Box sx={{ py: { xs: 6, md: 10 } }}>
            <Container>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={sectionVariants}
                >
                    <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                color: "primary.main",
                                mb: 1,
                                display: "block",
                            }}
                        >
                            Nuestros Servicios
                        </Typography>
                        <Typography variant="h3" sx={{ mb: 2 }}>
                            Terapia para quienes más lo necesitan
                        </Typography>
                    </Box>

                    <Grid container spacing={4} alignItems="stretch">
                        {serviceData.map((service, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <ServiceCard
                                    title={service.title}
                                    description={service.description}
                                    image={service.image}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </motion.div>
            </Container>
        </Box>
    );
};

export default ServiceSection;
