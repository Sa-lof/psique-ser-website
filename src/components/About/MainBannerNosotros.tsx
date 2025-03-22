"use client";

import React, { useRef } from "react";
import { Box, Container, Grid, Typography, Button, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

const MainBannerNosotros: React.FC = () => {
    const bannerRef = useRef<HTMLDivElement | null>(null);
    const inView = useInView(bannerRef, { once: true, amount: 0.2 });

    return (
        <Box
            ref={bannerRef}
            component={motion.div}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            sx={{
                minHeight: { xs: "auto", md: "100vh" },
                py: { xs: 6, md: 10 },
                backgroundColor: "#f9fafb",
                display: "flex",
                alignItems: "center",
            }}
        >
            <Container>
                <Grid container spacing={4} alignItems="center">
                    {/* Left: Illustration */}
                    <Grid item xs={12} md={5}>
                        <Box sx={{ textAlign: "center" }}>
                            <Image
                                src="/About/nosotros-illustration.jpg"
                                alt="Ilustración Psique & Ser"
                                width={300}
                                height={300}
                                style={{ maxWidth: "100%", height: "auto" }}
                            />
                        </Box>
                    </Grid>

                    {/* Right: Text Content */}
                    <Grid item xs={12} md={7}>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                display: "block",
                                mb: 1,
                                color: "primary.main",
                            }}
                        >
                            Conócenos
                        </Typography>
                        <Typography variant="h2" sx={{ mb: 2 }}>
                            Psique & Ser A.C. Fundación
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 3 }}>
                            Psique & Ser surge en el año 2015 por el psicólogo Alan Torres y
                            Ximena Mendoza. A lo largo de los años, han institucionalizado e
                            integrado una red de atención psicológica con especialistas
                            altamente competentes en la salud mental y en el ámbito clínico.
                            Hoy en día, Psique & Ser es una Asociación Civil y marca
                            registrada ante el IMPI.
                        </Typography>

                        <List sx={{ mb: 3 }}>
                            <ListItem disablePadding sx={{ mb: 1 }}>
                                <ListItemIcon sx={{ minWidth: 32 }}>
                                    <CheckCircleIcon color="primary" />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Terapia psicológica a niños, adolescentes y adultos"
                                    primaryTypographyProps={{ variant: "body2" }}
                                />
                            </ListItem>
                            <ListItem disablePadding sx={{ mb: 1 }}>
                                <ListItemIcon sx={{ minWidth: 32 }}>
                                    <CheckCircleIcon color="primary" />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Evaluaciones psicodiagnósticas"
                                    primaryTypographyProps={{ variant: "body2" }}
                                />
                            </ListItem>
                            <ListItem disablePadding sx={{ mb: 1 }}>
                                <ListItemIcon sx={{ minWidth: 32 }}>
                                    <CheckCircleIcon color="primary" />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Cursos, conferencias y talleres"
                                    primaryTypographyProps={{ variant: "body2" }}
                                />
                            </ListItem>
                        </List>

                        <Button
                            variant="contained"
                            color="primary"
                            sx={{ textTransform: "none", color: "white" }}
                            href="/agendar"
                        >
                            Agenda una cita
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default MainBannerNosotros;
