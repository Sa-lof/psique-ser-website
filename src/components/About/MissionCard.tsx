"use client";

import React, { useRef } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { motion, useInView } from "framer-motion";

interface MissionCardProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
}

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

const MissionCard: React.FC<MissionCardProps> = ({ title, description, icon }) => {
    const cardRef = useRef<HTMLDivElement | null>(null);
    const inView = useInView(cardRef, { once: true, amount: 0.2 });

    return (
        <motion.div
            ref={cardRef}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            style={{ width: "100%", height: "100%" }}
        >
            <Card
                sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    py: 4,
                }}
            >
                {icon && (
                    <Box
                        sx={{
                            fontSize: 48,
                            textAlign: "center",
                            color: "primary.main",
                        }}
                    >
                        {icon}
                    </Box>
                )}
                <CardContent
                    sx={{
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                >
                    <Typography variant="h6" sx={{ mb: 1, textAlign: "center" }}>
                        {title}
                    </Typography>
                    <Typography variant="body2" sx={{ textAlign: "center" }}>
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default MissionCard;
