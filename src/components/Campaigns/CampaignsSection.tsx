"use client";

import React, { useRef } from "react";
import { Box, Container, Typography } from "@mui/material";
import CampaignCard from "./CampaignCard"; // Adjust path as needed
import { motion, useInView } from "framer-motion";

// Example data
const campaigns = [
    {
        title: "Dogminiquee",
        description:
            "Dogminiquee es una fundación dedicada a la protección y rescate de perros en situación de calle. A través de esta campaña, recolectamos alimento, medicinas y donaciones para apoyar su labor.",
        images: [
            "/Campanas/dogminiquee-1.jpeg",
            "/Campanas/dogminiquee-2.jpeg",
            "/Campanas/dogminiquee-3.jpeg",
            "/Campanas/dogminiquee-4.jpeg",
            "/Campanas/dogminiquee-5.jpeg",
        ],
    },
    {
        title: "Funfai Segunda Campaña",
        description:
            "Funfai brinda asistencia a familias de escasos recursos, fomentando la educación y la nutrición infantil. En nuestra segunda campaña colaboramos para donar víveres, ropa y juguetes.",
        images: [
            "/Campanas/funfai-1.jpeg",
            "/Campanas/funfai-2.png",
            "/Campanas/funfai-3.png",
            "/Campanas/funfai-4.jpeg",
            "/Campanas/funfai-5.jpeg",
            "/Campanas/funfai-6.jpeg",
        ],
    },
];


const fadeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

const svgBackground =
    "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100%25'%20height='100%25'%20viewBox='0%200%201600%20800'%3E%3Crect%20fill='%2300407A'%20width='1600'%20height='800'/%3E%3Cg%20fill-opacity='1'%3E%3Cpath%20fill='%2304838a'%20d='M486%20705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5%20692.1%2049%20703%200%20719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8%20707.1%20489.4%20706.5%20486%20705.8z'/%3E%3Cpath%20fill='%230a9965'%20d='M1600%200H0v719.8c49-16.8%2099.5-27.8%20150.7-33.5c111.9-12.7%20226-2.4%20335.3%2019.4c3.4%200.7%206.8%201.4%2010.2%202c116.8%2024%20231.7%2059%20347.6%2092.2H1600V0z'/%3E%3Cpath%20fill='%2311a732'%20d='M478.4%20581c3.2%200.8%206.4%201.7%209.5%202.5c196.2%2052.5%20388.7%20133.5%20593.5%20176.6c174.2%2036.6%20349.5%2029.2%20518.6-10.2V0H0v574.9c52.3-17.6%20106.5-27.7%20161.1-30.9C268.4%20537.4%20375.7%20554.2%20478.4%20581z'/%3E%3Cpath%20fill='%2339b419'%20d='M0%200v429.4c55.6-18.4%20113.5-27.3%20171.4-27.7c102.8-0.8%20203.2%2022.7%20299.3%2054.5c3%201%205.9%202%208.9%203c183.6%2062%20365.7%20146.1%20562.4%20192.1c186.7%2043.7%20376.3%2034.4%20557.9-12.6V0H0z'/%3E%3Cpath%20fill='%2384BF23'%20d='M181.8%20259.4c98.2%206%20191.9%2035.2%20281.3%2072.1c2.8%201.1%205.5%202.3%208.3%203.4c171%2071.6%20342.7%20158.5%20531.3%20207.7c198.8%2051.8%20403.4%2040.8%20597.3-14.8V0H0v283.2C59%20263.6%20120.6%20255.7%20181.8%20259.4z'/%3E%3Cpath%20fill='%23a1dc3f'%20d='M1600%200H0v136.3c62.3-20.9%20127.7-27.5%20192.2-19.2c93.6%2012.1%20180.5%2047.7%20263.3%2089.6c2.6%201.3%205.1%202.6%207.7%203.9c158.4%2081.1%20319.7%20170.9%20500.3%20223.2c210.5%2061%20430.8%2049%20636.6-16.6V0z'/%3E%3Cpath%20fill='%23b8e56f'%20d='M454.9%2086.3C600.7%20177%20751.6%20269.3%20924.1%20325c208.6%2067.4%20431.3%2060.8%20637.9-5.3c12.8-4.1%2025.4-8.4%2038.1-12.9V0H288.1c56%2021.3%20108.7%2050.6%20159.7%2082C450.2%2083.4%20452.5%2084.9%20454.9%2086.3z'/%3E%3Cpath%20fill='%23d0ed9f'%20d='M1600%200H498c118.1%2085.8%20243.5%20164.5%20386.8%20216.2c191.8%2069.2%20400%2074.7%20595%2021.1c40.8-11.2%2081.1-25.2%20120.3-41.7V0z'/%3E%3Cpath%20fill='%23e7f6cf'%20d='M1397.5%20154.8c47.2-10.6%2093.6-25.3%20138.6-43.8c21.7-8.9%2043-18.8%2063.9-29.5V0H643.4c62.9%2041.7%20129.7%2078.2%20202.1%20107.4C1020.4%20178.1%201214.2%20196.1%201397.5%20154.8z'/%3E%3Cpath%20fill='%23FFFFFF'%20d='M1315.3%2072.4c75.3-12.6%20148.9-37.1%20216.8-72.4h-723C966.8%2071%201144.7%20101%201315.3%2072.4z'/%3E%3C/g%3E%3C/svg%3E";

const CampaignsSection: React.FC = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const inView = useInView(ref, { once: true, amount: 0.2 });
    return (
        <>
        <Box
            ref={ref}
            component={motion.div}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeVariants}
            sx={{
                minHeight: { xs: "300px", md: "500px" },
                backgroundImage: `url("${svgBackground}")`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                color: "#fff",
            }}
        >
            <Container sx={{ zIndex: 1 }}>
                <Typography variant="h3" sx={{ mb: 2 }}>
                    Campañas de Solidaridad
                </Typography>
                <Typography variant="body1">
                Anualmente realizamos una colecta para apoyar a las poblaciones y áreas vulnerables que requieren de nuestra ayuda, amor y solidaridad. Arrancamos en septiembre de cada año y cerramos entregando en noviembre. Pregunta a quién apoyaremos este año para la colecta y entrega de víveres.
                </Typography>
            </Container>
        </Box>
        
        <Box
            component="section"
            sx={{
                py: { xs: 6, md: 10 },
                backgroundColor: "#f9fafb",
            }}
        >
            <Container>
                {campaigns.map((campaign, index) => (
                    <CampaignCard
                        key={index}
                        title={campaign.title}
                        description={campaign.description}
                        images={campaign.images}
                    />
                ))}
            </Container>
        </Box>
        </>
    );
};

export default CampaignsSection;
