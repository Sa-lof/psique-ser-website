"use client";

import React from "react";
import { ThemeProvider} from "@mui/material";
import theme from "../../theme";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import BlogPage from "@/components/Blog/BlogPage";

export default function Blog() {
    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <BlogPage />
            <Footer />
        </ThemeProvider>
    );
}
