"use client";

import React, { useRef } from "react";
import {
    Box,
    Container,
    Grid,
    Tabs,
    Tab,
    Typography,
    Card,
    CardContent,
} from "@mui/material";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

interface TherapyTabData {
    label: string;
    image: string;
    title: string;
    description: string;
    points: string[];
}

const therapyTabs: TherapyTabData[] = [
    {
        label: "Terapia Niños",
        image: "/About/therapy-kids.jpg",
        title: "Terapia Niños",
        description:
            "Abordado desde la terapia cognitivo conductual, terapia de juego y retroalimentación con padres o tutores.",
        points: [
            "Enfoque integral en el bienestar emocional de los niños.",
            "Utilización de técnicas de juego para fomentar la expresión y comunicación.",
            "Colaboración estrecha con padres o tutores para un apoyo continuo.",
            "Adaptación de estrategias según las necesidades individuales del niño.",
        ],
    },
    {
        label: "Terapia Adolescentes",
        image: "/About/therapy-teens.jpg",
        title: "Terapia Adolescentes",
        description:
            "Proceso de acompañamiento que aborda cambios emocionales, sociales y académicos propios de la etapa adolescente.",
        points: [
            "Promueve la autoestima y la identidad saludable.",
            "Manejo de estrés escolar y orientación vocacional.",
            "Fomento de la comunicación asertiva con la familia y el entorno.",
            "Prevención de conductas de riesgo y fortalecimiento de habilidades sociales.",
        ],
    },
    {
        label: "Terapia Adultos",
        image: "/About/therapy-adults.jpg",
        title: "Terapia Adultos",
        description:
            "Espacio de autoconocimiento y acompañamiento ante desafíos laborales, personales y relacionales.",
        points: [
            "Manejo de ansiedad, depresión y estrés crónico.",
            "Fortalecimiento de habilidades de afrontamiento y resiliencia.",
            "Mejora de relaciones interpersonales y autoestima.",
            "Enfoque en metas personales y crecimiento continuo.",
        ],
    },
];

const fadeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 },
    },
};

const TherapyTabs: React.FC = () => {
    const [value, setValue] = React.useState(0);

    // Scroll-triggered fade for the entire section
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const inView = useInView(sectionRef, { once: true, amount: 0.2 });

    const handleChange = (_: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const currentTab = therapyTabs[value];

    return (
        <Box
            component={motion.div}
            ref={sectionRef}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeVariants}
            sx={{
                py: { xs: 6, md: 10 },
                backgroundColor: "#f9fafb",
            }}
        >
            <Container>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    sx={{
                        mb: 4,
                        "& .MuiTab-root": {
                            textTransform: "none",
                            fontWeight: 600,
                        },
                    }}
                >
                    {therapyTabs.map((tab, index) => (
                        <Tab key={index} label={tab.label} />
                    ))}
                </Tabs>

                {/* Content area */}
                <Card sx={{ p: 2 }}>
                    <CardContent>
                        <Grid container spacing={4} alignItems="center">
                            <Grid item xs={12} md={4}>
                                <Box sx={{ textAlign: "center" }}>
                                    <Image
                                        src={currentTab.image}
                                        alt={currentTab.title}
                                        width={200}
                                        height={200}
                                        style={{ maxWidth: "100%", height: "auto" }}
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
                                    {currentTab.title}
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 3 }}>
                                    {currentTab.description}
                                </Typography>
                                {currentTab.points.map((point, idx) => (
                                    <Typography
                                        key={idx}
                                        variant="body2"
                                        sx={{ mb: 1, display: "flex", alignItems: "center" }}
                                    >
                                        • {point}
                                    </Typography>
                                ))}
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Container>
        </Box>
    );
};

export default TherapyTabs;
