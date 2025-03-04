"use client";

import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import Banner from "@/components/Layout/Banner";
import CampaignsSection from "@/components/Campaigns/CampaignsSection";

export default function Campañas() {
    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <Banner
                backgroundImage="/images/servicios-banner.jpg"
                title="Campañas Psique & Ser"
                description="Conoce nuestras campañas y eventos."
            />
            <CampaignsSection />        
            <Footer />
        </ThemeProvider>
    );
}
