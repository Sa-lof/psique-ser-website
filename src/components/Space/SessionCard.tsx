"use client";

import React, { useRef } from "react";
import { Card, Typography, Box } from "@mui/material";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

interface SessionCardProps {
    icon: React.ReactNode;
    date: string;
    title?: string;
    description?: string;
    link: string;
}

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

const SessionCard: React.FC<SessionCardProps> = ({
    icon,
    date,
    title,
    description,
    link,
}) => {
    const cardRef = useRef<HTMLDivElement | null>(null);
    const inView = useInView(cardRef, { once: true, amount: 0.2 });

    return (
        <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ width: "100%", textDecoration: "none" }}
        >
            <motion.div
                ref={cardRef}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                style={{ width: "100%", cursor: "pointer" }}
            >
                <Card
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        p: 2,
                        textAlign: "center",
                        height: "100%",
                    }}
                >
                    <Box sx={{ fontSize: 64, color: "primary.main", mb: 2 }}>
                        {icon}
                    </Box>
                    <Typography variant="h6" sx={{ mb: 1, fontWeight: 700 }}>
                        {date}
                    </Typography>
                    {title && (
                        <Typography variant="subtitle1" sx={{ mb: 1 }}>
                            {title}
                        </Typography>
                    )}
                    {description && (
                        <Typography variant="body2" sx={{ color: "text.secondary" }}>
                            {description}
                        </Typography>
                    )}
                </Card>
            </motion.div>
        </Link>
    );
};

export default SessionCard;
