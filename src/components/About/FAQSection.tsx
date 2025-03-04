"use client";

import React, { useRef } from "react";
import {
    Box,
    Container,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion, useInView } from "framer-motion";

const faqs = [
    {
        question: "¿Cómo puedo agendar una cita?",
        answer: `Puedes contactarnos por medio de los diferentes canales de comunicación
        que tenemos (página web, redes sociales, correo, WhatsApp).
        Nos pondremos en contacto contigo a la brevedad y te orientaremos
        sobre el especialista que pueda acompañarte en el cuidado de tu salud mental.`,
    },
    {
        question: "¿Qué es la campaña de salud mental?",
        answer: `Una iniciativa para concientizar sobre la importancia de la salud mental y
        brindar acceso a recursos y apoyo psicológico a quienes más lo necesiten.`,
    },
    {
        question: "¿Por qué elegir a Psique & Ser?",
        answer: `Contamos con un equipo de profesionales altamente calificados que trabajan
        con dedicación y empatía para brindarte la mejor atención psicológica.
        Nuestro enfoque integral se adapta a tus necesidades y objetivos personales.`,
    },
    {
        question: "¿Por qué hacen campaña de solidaridad?",
        answer: `Creemos en la importancia de la colaboración y la empatía social.
        A través de nuestras campañas de solidaridad, buscamos apoyar a comunidades
        y grupos vulnerables, promoviendo un mayor acceso a la atención psicológica.`,
    },
];

// Simple fade-up variants
const fadeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

const FAQSection: React.FC = () => {
    // Ref and inView for scroll-triggered fade
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const inView = useInView(sectionRef, { once: true, amount: 0.2 });

    return (
        <Box
            component={motion.div}
            ref={sectionRef}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeVariants}
            sx={{
                py: { xs: 6, md: 10 },
                background: "linear-gradient(to bottom right, #f9fafb, #eef1f2)",
            }}
        >
            <Container>
                <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            display: "block",
                            mb: 1,
                            color: "primary.main",
                            fontWeight: 600,
                        }}
                    >
                        Preguntas Frecuentes
                    </Typography>
                    <Typography variant="h3" sx={{ mb: 2, fontWeight: 700 }}>
                        FAQ
                    </Typography>
                    <Typography variant="body2" sx={{ maxWidth: 600, mx: "auto", color: "text.secondary" }}>
                        Encuentra respuestas a las preguntas más comunes sobre nuestros servicios,
                        campañas y procesos de atención.
                    </Typography>
                </Box>

                {faqs.map((faq, index) => (
                    <Accordion
                        key={index}
                        disableGutters
                        sx={{
                            mb: 2,
                            borderRadius: 1,
                            boxShadow: 2,
                            overflow: "hidden",
                            "&:before": { display: "none" }, // removes the default divider
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: "primary.main" }} />}
                            sx={{
                                backgroundColor: "#fff",
                                transition: "background-color 0.2s",
                                "&:hover": {
                                    backgroundColor: "rgba(0,0,0,0.03)",
                                },
                                "& .MuiAccordionSummary-content": {
                                    my: 1,
                                },
                            }}
                        >
                            <Typography variant="body1" sx={{ fontWeight: 600 }}>
                                {faq.question}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ backgroundColor: "#fff" }}>
                            <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
                                {faq.answer}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Container>
        </Box>
    );
};

export default FAQSection;
