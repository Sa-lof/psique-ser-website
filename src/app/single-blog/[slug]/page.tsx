"use client";

import { useParams } from "next/navigation";
import HeaderBlog from "@/components/SingleBlog/HeaderBlog";
import ContentBlog from "@/components/SingleBlog/ContentBlog";
import { blogData } from "@/components/Blog/BlogData";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "@mui/material";
import theme from "../../../theme";
import { ParamValue } from "next/dist/server/request/params";

export default function SingleBlogPage() {
    const { slug } = useParams();

    const post = blogData.find((item: { slug: ParamValue; }) => item.slug === slug);
    
    if (!post) return <div>Blog no encontrado</div>;

    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <HeaderBlog post={post} />
            <ContentBlog post={post} />
            <Footer />
        </ThemeProvider>
    );
}
