"use client";

import React from "react";
import { Box, Container, Typography } from "@mui/material";
import CampaignCard from "./CampaignCard"; // Adjust path as needed

// Example data
const campaigns = [
    {
        title: "Dogminiquee",
        description:
            "Dogminiquee es una fundación dedicada a la protección y rescate de perros en situación de calle. A través de esta campaña, recolectamos alimento, medicinas y donaciones para apoyar su labor.",
        images: [
            "/Campanas/dogminiquee-1.jpeg",
            "/Campanas/dogminiquee-2.jpeg",
            "/Campanas/dogminiquee-3.jpeg",
            "/Campanas/dogminiquee-4.jpeg",
            "/Campanas/dogminiquee-5.jpeg",
        ],
    },
    {
        title: "Funfai Segunda Campaña",
        description:
            "Funfai brinda asistencia a familias de escasos recursos, fomentando la educación y la nutrición infantil. En nuestra segunda campaña colaboramos para donar víveres, ropa y juguetes.",
        images: [
            "/Campanas/funfai-1.jpeg",
            "/Campanas/funfai-2.png",
            "/Campanas/funfai-3.png",
            "/Campanas/funfai-4.jpeg",
            "/Campanas/funfai-5.jpeg",
            "/Campanas/funfai-6.jpeg",
        ],
    },
];

const CampaignsSection: React.FC = () => {
    return (
        <Box
            component="section"
            sx={{
                py: { xs: 6, md: 10 },
                backgroundColor: "#f9fafb",
            }}
        >
            <Container>
                <Typography
                    variant="h3"
                    sx={{ mb: 2, textAlign: "center", fontWeight: 700 }}
                >
                    Campañas de Solidaridad
                </Typography>

                {/* Missing Text Added Here */}
                <Typography
                    variant="body1"
                    sx={{ mb: 4, maxWidth: 1200, mx: "auto", textAlign: "center" }}
                >
                    Anualmente realizamos una colecta para apoyar a las poblaciones y áreas
                    vulnerables que requieren de nuestra ayuda, amor y solidaridad. Arrancamos en
                    septiembre de cada año y cerramos entregando en noviembre. Pregunta a quién
                    apoyaremos este año para la colecta y entrega de víveres.
                </Typography>

                {campaigns.map((campaign, index) => (
                    <CampaignCard
                        key={index}
                        title={campaign.title}
                        description={campaign.description}
                        images={campaign.images}
                    />
                ))}
            </Container>
        </Box>
    );
};

export default CampaignsSection;
