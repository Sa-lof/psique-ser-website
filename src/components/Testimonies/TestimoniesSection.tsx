"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { styled } from "@mui/material/styles";
import TestimoniesCard from "./TestimoniesCard"; // Adjust import path as needed

interface Testimony {
    name: string;
    role: string;
    text: string;
    image: string;
}

const SwiperContainer = styled(Box)(() => ({
    ".swiper-button-next, .swiper-button-prev": {
        color: "#00407A !important", // primary color
    },
    ".swiper-pagination-bullet": {
        backgroundColor: "#00407A !important", // primary color
    },
}));

const testimoniesData: Testimony[] = [
    {
        name: "Juan Pérez",
        role: "Cliente Satisfecho",
        text: "La atención fue excelente y me sentí acompañado en todo momento. ¡Recomendado!",
        image: "/Home/person-1.png",
    },
    {
        name: "María López",
        role: "Paciente",
        text: "Encontré la ayuda que necesitaba para superar mis desafíos emocionales.",
        image: "/Home/person-2.png",
    },
    {
        name: "Carlos Ramírez",
        role: "Paciente",
        text: "Los profesionales son muy dedicados y se nota su vocación por el bienestar.",
        image: "/Home/person-1.png",
    },
    {
        name: "Laura Gómez",
        role: "Paciente",
        text: "Me siento mucho mejor y agradezco el apoyo que me brindaron en todo momento.",
        image: "/Home/person-4.png",
    },
];

const TestimoniesSection: React.FC = () => {
    return (
        <SwiperContainer sx={{ py: { xs: 6, md: 10 } }}>
            <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
                <Typography variant="subtitle1" sx={{ color: "primary.main", mb: 1 }}>
                    Testimonios
                </Typography>
                <Typography variant="h3">
                    Lo que dicen nuestros clientes
                </Typography>
            </Box>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                loop
                breakpoints={{
                    320: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                style={{ width: "100%", padding: "0 2rem" }}
            >
                {testimoniesData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100%",
                                px: { xs: 2, md: 4 },
                                py: 2,
                            }}
                        >
                            <TestimoniesCard
                                name={item.name}
                                role={item.role}
                                text={item.text}
                                image={item.image}
                            />
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </SwiperContainer>
    );
};

export default TestimoniesSection;
