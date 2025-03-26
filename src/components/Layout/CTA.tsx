"use client";

import React, { useRef } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const svgBackground =
  "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201600%20800'%20preserveAspectRatio='none'%3E%3Crect%20width='1600'%20height='800'%20fill='%2300407A'/%3E%3Cpath%20fill='%23005A9C'%20d='M0%20100C300%20200%20500%20100%20800%20150s500-50%20800-100v750H0Z'/%3E%3Cpath%20fill='%230070B8'%20d='M0%20200C350%20150%20450%20200%20750%20230s550-30%20850-80v650H0Z'/%3E%3Cpath%20fill='%23339EDB'%20d='M0%20350C300%20300%20500%20350%20800%20380s500-30%20800-80v450H0Z'/%3E%3Cpath%20fill='%2366B8E1'%20d='M0%20450C300%20400%20550%20480%20800%20500s500-50%20800-30v330H0Z'/%3E%3C/svg%3E";

const CTA: React.FC = () => {
    const ctaRef = useRef<HTMLDivElement | null>(null);
    const inView = useInView(ctaRef, { once: true, amount: 0.2 });

    return (
        <Box
            ref={ctaRef}
            component={motion.div}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            sx={{
                position: "relative",
                py: { xs: 6, md: 12 },
                textAlign: "center",
                backgroundImage: `url("${svgBackground}")`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Soft opacity overlay */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0,0,0,0.3)",
                    zIndex: 1,
                }}
            />
            <Container sx={{ position: "relative", zIndex: 2 }}>
                <Typography variant="h2" sx={{ mb: 2 }} color="white">
                    ¿Listo para transformar tu vida?
                </Typography>
                <Typography variant="h5" sx={{ mb: 4 }} color="white">
                    Da el primer paso hacia tu bienestar hoy.
                </Typography>
                <Button
                    component={Link}
                    href="/contacto"
                    variant="contained"
                    color="primary"
                    sx={{ textTransform: "none", color: "white" }}
                >
                    Agenda una cita
                </Button>
            </Container>
        </Box>
    );
};

export default CTA;
