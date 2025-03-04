"use client";

import React from "react";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";

interface QuoteProps {
    text: string;
    author?: string;
}

const quoteVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

const Quote: React.FC<QuoteProps> = ({ text, author }) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={quoteVariants}
        >
            <Typography variant="h6" sx={{ fontStyle: "italic", mb: 1, lineHeight: 1.5 }}>
                “{text}”
            </Typography>
            {author && (
                <Typography variant="body2" sx={{ textAlign: "right", fontWeight: 600 }}>
                    - {author}
                </Typography>
            )}
        </motion.div>
    );
};

export default Quote;
