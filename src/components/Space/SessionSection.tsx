"use client";

import React, { useRef } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import SessionCard from "./SessionCard";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LockIcon from "@mui/icons-material/Lock";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import CelebrationIcon from "@mui/icons-material/Celebration";
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
      date: "Viernes | 31 Ene",
      title: "Entendiendo y abrazando nuestros miedos",
      description: "Ponente: Ana Laura",
      link: "/",
    },
    {
      icon: <LockIcon fontSize="inherit" />,
      date: "Viernes | 28 Feb",
      title: "Heridas de la infancia desde la teoría del apego",
      description: "Ponente: Paola Estrada",
      link: "/",
    },
    {
      icon: <NightsStayIcon fontSize="inherit" />,
      date: "Lunes | 31 Mar",
      title: "Entre sueños y desvelos: Cómo el sueño afecta tu bienestar",
      description: "Ponente: Naylea Bonilla",
      link: "/",
    },
    {
      icon: <VolunteerActivismIcon fontSize="inherit" />,
      date: "Miércoles | 30 Abr",
      title: "Cuidar y cuidarnos: La magia de la responsabilidad afectiva",
      description: "Ponente: Maricela Lara",
      link: "/",
    },
    {
      icon: <PsychologyAltIcon fontSize="inherit" />,
      date: "Viernes | 30 May",
      title: "El narcisista: Discursos de amor",
      description: "Ponente: Ximena Mendoza",
      link: "/",
    },
    {
      icon: <AutoFixHighIcon fontSize="inherit" />,
      date: "Lunes | 30 Jun",
      title: "Metamorfosis personal: Redescubre tu mejor versión",
      description: "Ponente: Angélica Gil",
      link: "/",
    },
    {
      icon: <LocalFireDepartmentIcon fontSize="inherit" />,
      date: "Jueves | 31 Jul",
      title: "Mitos del Amor Romántico",
      description: "Ponente: Diana Trujillo",
      link: "/",
    },
    {
      icon: <FavoriteIcon fontSize="inherit" />,
      date: "Viernes | 19 Ago",
      title: "Salud mental y salud sexual",
      description: "Ponente: Luisa María",
      link: "/",
    },
    {
      icon: <ColorLensIcon fontSize="inherit" />,
      date: "Martes | 30 Sept",
      title: "Colores del alma: Arteterapia para el bienestar emocional",
      description: "Ponente: Bea Martínez",
      link: "/",
    },
    {
      icon: <RecordVoiceOverIcon fontSize="inherit" />,
      date: "Viernes | 31 Oct",
      title: "El valor de la escucha activa",
      description: "Ponente: Brenda Linares",
      link: "/",
    },
    {
      icon: <CelebrationIcon fontSize="inherit" />,
      date: "Viernes | 28 Nov",
      title: "Cierre anual",
      description: "Ponente: Alan Torres",
      link: "/",
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
