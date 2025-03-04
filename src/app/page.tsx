"use client";

import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import Navbar from "@/components/Layout/Navbar";
import HeroSwiper from "@/components/HeroSwiper";
import FounderSection from "@/components/FounderSection";
import ServiceSection from "@/components/Services/ServiceSection";
import WhyPsiqueSer from "@/components/WhyPsiqueSer";
import CTA from "@/components/Layout/CTA";
import BlogSection from "@/components/Blog/BlogSection";
import CountersSection from "@/components/CountersSection";
import TestimoniesSection from "@/components/Testimonies/TestimoniesSection";
import Footer from "@/components/Layout/Footer";

export default function Home() {
    return (
        <ThemeProvider theme={theme}>
              <Navbar />
              <HeroSwiper />
              <FounderSection />
              <ServiceSection />
              <WhyPsiqueSer />
              <CTA />
              <BlogSection />
              <CountersSection />
              <TestimoniesSection />
              <Footer />
        </ThemeProvider>
    );
}
