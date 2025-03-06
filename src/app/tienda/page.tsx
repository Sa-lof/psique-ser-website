"use client";

import React from "react";
import { ThemeProvider } from "@mui/material";
import theme from "../../theme";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";

export default function Tienda() {
    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            
            <Footer />
        </ThemeProvider>
    );
}
