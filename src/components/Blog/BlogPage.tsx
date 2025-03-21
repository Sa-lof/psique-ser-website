"use client";

import React, { useRef, useState } from "react";
import { Box, Button, Container, Grid } from "@mui/material";
import { motion, useInView } from "framer-motion";
import BlogCard from "./BlogCard"; // Adjust import path as needed
import Banner from "../Layout/Banner";

interface BlogItem {
    date: string;
    author: string;
    title: string;
    excerpt: string;
    href: string;
    image: string;
}

const blogData: BlogItem[] = [
    {
        date: "31 OCT",
        author: "Psic. Ruth Gonzalez",
        title: "Salud mental, un derecho universal",
        excerpt: "Tu bienestar mental es un derecho, no un lujo. Descubre cómo cuidar tu salud emocional y mejorar tu calidad de vida.",
        href: "/blog/post-1",
        image: "/blog/post-1.jpg",
    },
    {
        date: "31 AGO",
        author: "Psic. Brenda Linares",
        title: "Suicidio: Mitos y realidades",
        excerpt: "Rompiendo mitos sobre el suicidio: descubre la verdad, derriba estigmas y aprende cómo la prevención puede salvar vidas. ",
        href: "/blog/post-2",
        image: "/blog/post-2.jpg",
    },
    {
        date: "31 JUL",
        author: "Psic. Pablo Estrada",
        title: "Competencias parentales: ¿Qué hace a una mamá, a un papá ser eficientes?",
        excerpt: "Ser un buen padre o madre no es cuestión de suerte, sino de competencias. Descubre cómo fortalecer tu rol parental y criar con confianza.",
        href: "/blog/post-3",
        image: "/blog/post-3.jpg",
    },
    {
        date: "31 MAY",
        author: "Psic. Teresita Quintana",
        title: "La ruptura del lazo social como consecuencia de la posmodernidad",
        excerpt: "En la era digital, ¿nos estamos desconectando más que nunca? Descubre cómo la posmodernidad impacta nuestras relaciones y lazos sociales",
        href: "/blog/post-4",
        image: "/blog/post-4.jpg",
    },
    {
        date: "28 ABR",
        author: "Psic. Paola Luna",
        title: "Disciplina positiva: un método de crianza para niños",
        excerpt: "Educar con amor y respeto es posible. Descubre cómo la disciplina positiva puede transformar la crianza de tus hijos.",
        href: "/blog/post-5",
        image: "/blog/post-5.jpg",
    },
    {
        date: "31 MAR",
        author: "Psic. Liliana Guzmán",
        title: "La obesidad, como un tejido entre la alimentación y los afecto",
        excerpt: "La obesidad va más allá de la alimentación: descubre su conexión con las emociones y el afecto.",
        href: "/blog/post-6",
        image: "/blog/post-6.jpg",
    },
    {
        date: "28 FEB",
        author: "Psic. Ximena Mendoza",
        title: "Relaciones sanas en la adolescencia: Amor y amistad",
        excerpt: "Amor y amistad en la adolescencia: claves para construir relaciones sanas y significativas.",
        href: "/blog/post-7",
        image: "/blog/post-7.jpg",
    },
    {
        date: "31 ENE",
        author: "Psic. Alan Torres V",
        title: "Rituales de inicio de año y sus efectos en nuestra psique",
        excerpt: "Más que una tradición, los rituales de inicio de año impactan nuestra mente y emociones. Descubre su poder psicológico.",
        href: "/blog/post-8",
        image: "/blog/post-8.jpg",
    },
    {
        date: "11 AGO 2022",
        author: "Psique & Ser",
        title: "¿Qué enfoque psicológico es el adecuado para mi para tomar terapia?",
        excerpt: "¿Quieres empezar terapia pero no sabes qué enfoque elegir? Descubre cuál se adapta mejor a ti y a tus necesidades.",
        href: "/blog/post-9",
        image: "/blog/post-9.jpg",
    },
    {
        date: "10 JUN 2022",
        author: "Psique & Ser",
        title: "La normalización del estrés",
        excerpt: "¿El estrés se ha convertido en tu día a día? Descubre por qué normalizarlo es peligroso y cómo gestionarlo mejor.",
        href: "/blog/post-10",
        image: "/blog/post-10.jpg",
    },
    {
        date: "4 MAY 2022",
        author: "Psique & Ser",
        title: "La era de la procastinación",
        excerpt: "¿Postergas todo para después? Descubre por qué vivimos en la era de la procrastinación y cómo romper el ciclo.",
        href: "/blog/post-11",
        image: "/blog/post-11.jpg",
    },
    {
        date: "2 MAR 2022",
        author: "Psique & Ser",
        title: "La dualidad éxito-fracaso",
        excerpt: "¿Fracaso o éxito? Descubre cómo reinterpretar ambos conceptos y convertir cada experiencia en una oportunidad de crecimiento.",
        href: "/blog/post-12",
        image: "/blog/post-12.jpg",
    },
    {
        date: "5 ENE 2022",
        author: "Psique & Ser",
        title: "Año Nuevo, casualidades o causalidades nuevas",
        excerpt: "¿Tu destino está marcado por el azar o por tus decisiones? Descubre si el Año Nuevo trae casualidades o causalidades.",
        href: "/blog/post-13",
        image: "/blog/post-13.jpg",
    },
    {
        date: "4 NOV 2021",
        author: "Psique & Ser",
        title: "La muerte en la vida",
        excerpt: "La muerte no es solo un final, sino una parte esencial de la vida. Comprenderla nos ayuda a valorar cada instante.",
        href: "/blog/post-14",
        image: "/blog/post-14.jpg",
    },
    {
        date: "2 SEP 2021",
        author: "Psique & Ser",
        title: "La hibridez en nuestras vida",
        excerpt: "La hibridez transforma nuestra forma de vivir, conectar y adaptarnos a un mundo en constante cambio.",
        href: "/blog/post-15",
        image: "/blog/post-15.jpg",
    },
    {
        date: "4 AGO 2021",
        author: "Psique & Ser",
        title: "Autoconcepto y equilibrio emocional en la adolescencia",
        excerpt: "Construir un autoconcepto sólido en la adolescencia es clave para el equilibrio emocional y el bienestar futuro.",
        href: "/blog/post-16",
        image: "/blog/post-16.jpg",
    },
    {
        date: "1 JUL 2021",
        author: "Psique & Ser",
        title: "El mundo que habito",
        excerpt: "El mundo que habitamos refleja nuestras acciones. Comprenderlo es el primer paso para transformarlo.",
        href: "/blog/post-17",
        image: "/blog/post-17.jpg",
    },
    {
        date: "1 JUN 2021",
        author: "Psique & Ser",
        title: "La ganancia secundaria. Una crítica a nuestra situación actual",
        excerpt: "Las crisis traen cambios, pero también ganancias ocultas. Una reflexión sobre nuestra realidad actual.",
        href: "/blog/post-18",
        image: "/blog/post-18.jpg",
    },
    {
        date: "5 MAY 2021",
        author: "Psique & Ser",
        title: "Hablemos de adolescentes",
        excerpt: "La adolescencia es un viaje de cambios y descubrimientos. Hablemos de cómo acompañarlos en esta etapa clave.",
        href: "/blog/post-19",
        image: "/blog/post-19.jpg",
    },
    {
        date: "6 ABR 2021",
        author: "Psique & Ser",
        title: "Sociedad y locura",
        excerpt: "La locura a lo largo de la historia: un reflejo de cómo la sociedad define y transforma lo que considera 'normal'.",
        href: "/blog/post-20",
        image: "/blog/post-20.jpg",
    },
    {
        date: "3 MAR 2021",
        author: "Psique & Ser",
        title: "La familia en épocas modernas",
        excerpt: "La familia evoluciona con el tiempo, adaptándose a los cambios sociales y redefiniendo sus vínculos.",
        href: "/blog/post-21",
        image: "/blog/post-21.jpg",
    },
    {
        date: "2 FEB 2021",
        author: "Psique & Ser",
        title: "¿Post Covid-19?",
        excerpt: "Más allá de la pandemia, el Covid-19 dejó huellas en nuestra salud mental y emocional. Reflexionemos sobre el futuro.",
        href: "/blog/post-22",
        image: "/blog/post-22.jpg",
    },
    {
        date: "4 ENE 2021",
        author: "Psique & Ser",
        title: "¿Un año para el olvido?",
        excerpt: "El olvido no borra, transforma. Reflexionemos sobre lo vivido y cómo nos ayuda a construir el futuro.",
        href: "/blog/post-23",
        image: "/blog/post-23.jpg",
    },
    {
        date: "1 DIC 2020",
        author: "Psique & Ser",
        title: "Un año pandémico no es un año perdido",
        excerpt: "Cada crisis trae aprendizaje. Un año pandémico no es un año perdido, sino una oportunidad de transformación.",
        href: "/blog/post-24",
        image: "/blog/post-24.jpg",
    },
    {
        date: "29 SEP 2020",
        author: "Psique & Ser",
        title: "Consecuencias psicológicas en un año pandémico",
        excerpt: "La pandemia dejó huellas en nuestra mente. Reflexionemos sobre sus consecuencias psicológicas y cómo sanarlas.",
        href: "/blog/post-25",
        image: "/blog/post-25.jpg",
    },
    {
        date: "24 AGO 2020",
        author: "Psique & Ser",
        title: "Un diferente retorno a las escuelas",
        excerpt: "El regreso a clases nunca fue tan diferente. Adaptarnos a la nueva educación es un reto para estudiantes y docentes.",
        href: "/blog/post-26",
        image: "/blog/post-26.jpg",
    },
    {
        date: "24 JUL 2020",
        author: "Psique & Ser",
        title: "Nuestro estado emocional ante el COVID-19",
        excerpt: "La pandemia transformó nuestras emociones. Comprender nuestro estado emocional es clave para afrontar el cambio.",
        href: "/blog/post-27",
        image: "/blog/post-27.jpg",
    },
    {
        date: "2 JUL 2020",
        author: "Psique & Ser",
        title: "Lidiar con el estrés en momentos de pandemia",
        excerpt: "El estrés en tiempos de pandemia es real, pero también lo son las herramientas para enfrentarlo.",
        href: "/blog/post-28",
        image: "/blog/post-28.jpg",
    }
];

const ITEMS_PER_PAGE = 9;

const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

const BlogSection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const sectionInView = useInView(sectionRef, { once: true, amount: 0.2 });
    const [currentPage, setCurrentPage] = useState(0);

    const totalPages = Math.ceil(blogData.length / ITEMS_PER_PAGE);
    const paginatedData = blogData.slice(
        currentPage * ITEMS_PER_PAGE,
        (currentPage + 1) * ITEMS_PER_PAGE
    );

    return (
        <Box ref={sectionRef} sx={{ py: { xs: 6, md: 10 } }}>
            <Container>
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    animate={sectionInView ? "visible" : "hidden"}
                >
                    <Banner
                        backgroundImage="/images/servicios-banner.jpg"
                        title="Explora Nuestro Blog"
                        description="Accede a artículos especializados sobre salud mental, bienestar emocional y herramientas psicológicas para mejorar tu calidad de vida."
                    />
                    <Grid container spacing={4}>
                        {paginatedData.map((item, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <BlogCard
                                    date={item.date}
                                    author={item.author}
                                    title={item.title}
                                    excerpt={item.excerpt}
                                    href={item.href}
                                    image={item.image}
                                />
                            </Grid>
                        ))}
                    </Grid>
                    <Box display="flex" justifyContent="center" alignItems="center" mt={4} gap={2} flexWrap="wrap">
                        <Button
                            variant="outlined"
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
                            disabled={currentPage === 0}
                        >
                            ← Anterior
                        </Button>

                        {/* Números de página */}
                        {[...Array(totalPages)].map((_, index) => (
                            <Button
                                key={index}
                                variant={index === currentPage ? "contained" : "outlined"}
                                onClick={() => setCurrentPage(index)}
                                sx={{
                                    minWidth: 40,
                                    px: 1,
                                    fontWeight: index === currentPage ? "bold" : "normal",
                                }}
                            >
                                {index + 1}
                            </Button>
                        ))}

                        <Button
                            variant="outlined"
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))}
                            disabled={currentPage === totalPages - 1}
                        >
                            Siguiente →
                        </Button>
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
};

export default BlogSection;