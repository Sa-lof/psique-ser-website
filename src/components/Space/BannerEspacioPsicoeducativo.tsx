"use client";

import React, { useRef } from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion, useInView } from "framer-motion";

const fadeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

const BannerEspacioPsicoeducativo: React.FC = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const inView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <Box
            ref={ref}
            component={motion.div}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeVariants}
            sx={{
                minHeight: { xs: "300px", md: "500px" },
                backgroundImage: 'url("/images/espacio-psicoeducativo-banner.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                color: "#fff",
            }}
        >
            <Container sx={{ zIndex: 1 }}>
                <Typography variant="h3" sx={{ mb: 2 }}>
                    Espacio Psicoeducativo
                </Typography>
                <Typography variant="body1">
                    Brindamos un espacio virtual de forma gratuita a la audiencia con
                    contenidos relevantes y actuales en torno a la salud mental todos
                    los fines de mes a las 9pm hora CDMX. Puedes ver la transmisión en
                    vivo por Facebook o conectarte a zoom 409 111 3034.
                </Typography>
            </Container>
        </Box>
    );
};

export default BannerEspacioPsicoeducativo;
