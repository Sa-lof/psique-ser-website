import React from "react";
import { Box, Card, Typography } from "@mui/material";

const CarouselLogos: React.FC = () => {
    const logos = [
        "/Convenios/conv-1.jpg",
        "/Convenios/conv-2.png",
        "/Convenios/conv-3.jpg",
        "/Convenios/conv-4.webp",
        "/Convenios/conv-5.png",
        "/Convenios/conv-6.png",
        "/Convenios/conv-7.jpeg",
        "/Convenios/conv-8.jpeg",
        "/Convenios/conv-9.png",
        "/Convenios/conv-10.jpg",
        "/Convenios/conv-11.jpg",
    ];

    return (
        <Box
            sx={{
                overflow: "hidden",
                width: "100%",
                py: 4,
                backgroundColor: "#FAFAFA", // similar al fondo de tu imagen
            }}
        >
            <Box sx={{ textAlign: "right", mb: { xs: 4, md: 6 }, paddingRight:10 }}>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                color: "primary.main",
                                mb: 1,
                                display: "block",
                            }}
                        >
                            Nuestros
                        </Typography>
                        <Typography variant="h3" sx={{ mb: 2 }}>
                            Convenios
                        </Typography>
                    </Box>
            <Box
                sx={{
                    display: "flex",
                    width: "max-content",
                    animation: "scroll 40s linear infinite",
                    gap: 4,
                    px: 2,
                }}
            >
                {[...logos, ...logos].map((logo, i) => (
                    <Card
                        key={i}
                        elevation={1}
                        sx={{
                            width: 200,
                            height: 150,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            p: 2,
                            boxSizing: "border-box",
                        }}
                    >
                        <img
                            src={logo}
                            alt={`logo-${i}`}
                            style={{
                                maxWidth: "100%",
                                maxHeight: "100%",
                                objectFit: "contain",
                            }}
                        />
                    </Card>
                ))}
            </Box>

            <style jsx global>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0%);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>
        </Box>
    );
};

export default CarouselLogos;
