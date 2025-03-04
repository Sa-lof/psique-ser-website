"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, Typography, Box } from "@mui/material";
import Image from "next/image";

interface TestimonyProps {
    name: string;
    role: string;
    text: string;
    image: string;
}

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

const TestimoniesCard: React.FC<TestimonyProps> = ({
    name,
    role,
    text,
    image,
}) => {
    const cardRef = useRef<HTMLDivElement | null>(null);
    const inView = useInView(cardRef, { once: true, amount: 0.2 });

    return (
        <motion.div
            ref={cardRef}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            style={{ width: "100%" }}
        >
            <Card sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                {/* Optional image/avatar at the top */}
                <Box sx={{ width: 80, height: 80, mb: 2, mx: "auto" }}>
                    <Image
                        src={image}
                        alt={name}
                        width={80}
                        height={80}
                        style={{ borderRadius: "50%", objectFit: "cover" }}
                    />
                </Box>
                <CardContent>
                    <Typography variant="h6" sx={{ textAlign: "center", mb: 1 }}>
                        {name}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ textAlign: "center", mb: 2 }}>
                        {role}
                    </Typography>
                    <Typography variant="body2" sx={{ textAlign: "center", fontStyle: "italic" }}>
                        “{text}”
                    </Typography>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default TestimoniesCard;
