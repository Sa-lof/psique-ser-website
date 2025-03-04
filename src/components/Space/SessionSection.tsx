"use client";

import React, { useRef } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import SessionCard from "./SessionCard";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LockIcon from "@mui/icons-material/Lock";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import { motion, useInView } from "framer-motion";

interface SessionData {
    icon: React.ReactNode;
    date: string;
    title?: string;
    description?: string;
    link: string;
}

// Example data with links
const sessions: SessionData[] = [
    {
        icon: <FavoriteIcon fontSize="inherit" />,
        date: "31 Ene",
        title: "Sesión: Cuidado Emocional",
        description: "Técnicas para manejar el estrés y la ansiedad diaria.",
        link: "/espacio-psicoeducativo/sesion/cuidado-emocional",
    },
    {
        icon: <LockIcon fontSize="inherit" />,
        date: "28 Feb",
        title: "Sesión: Autocuidado y Límites",
        description: "Aprende a establecer límites saludables en tus relaciones.",
        link: "/espacio-psicoeducativo/sesion/autocuidado-limites",
    },
    {
        icon: <HeartBrokenIcon fontSize="inherit" />,
        date: "31 Mar",
        title: "Sesión: Procesar el Duelo",
        description: "Herramientas para sobrellevar pérdidas y transiciones.",
        link: "/espacio-psicoeducativo/sesion/procesar-duelo",
    },
];

// Fade-up animation variants
const fadeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 },
    },
};

const SessionsSection: React.FC = () => {
    // Ref for scroll-triggered animation
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const inView = useInView(sectionRef, { once: true, amount: 0.2 });

    return (
        <Box
            ref={sectionRef}
            component={motion.div}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeVariants}
            sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#f9fafb" }}
        >
            <Container>
                <Typography
                    variant="h3"
                    sx={{ textAlign: "center", mb: 4, fontWeight: 700 }}
                >
                    Próximas Sesiones
                </Typography>
                <Grid container spacing={4}>
                    {sessions.map((session, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <SessionCard
                                icon={session.icon}
                                date={session.date}
                                title={session.title}
                                description={session.description}
                                link={session.link}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default SessionsSection;
