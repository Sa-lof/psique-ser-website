"use client";

import React from "react";
import {
  Box,
  Grid,
  Typography,
} from "@mui/material";

const locations = [
    {
    name: "Consultorio",
    company: "Psique & Ser Consultorio de Psicología A.C.",
    addressLines: [
        "Carlota 67, Guadalupe Tepeyac",
        "Gustavo A. Madero, 07840",
        "Ciudad de México, CDMX",
        ],
    mapIframeSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120375.64495043075!2d-99.20475236899951!3d19.466820760034018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f9da05ca0445%3A0x43403bab7aca7f2d!2sPsique%20%26%20Ser%20Consultorio%20de%20Psicologia%20A.C.!5e0!3m2!1ses-419!2smx!4v1743101107985!5m2!1ses-419!2smx",
    mapsUrl: "https://goo.gl/maps/Wx4NZ1Hukwz13jPGA",
    },
  {
    name: "Consultorio",
    company: "Psique & Ser Consultorio de Psicología A.C.",
    addressLines: [
      "Miraflores 837, Miravalle",
      "Benito Juárez, 03580",
      "Ciudad de México, CDMX",
    ],
    mapIframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.1737038159135!2d-99.14406082523183!3d19.36162994294441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f99d481a6cab%3A0x24d206bb359f0e7!2sPsique%20%26%20Ser%20Consultorio%20de%20Psicolog%C3%ADa%20A.C.!5e0!3m2!1ses!2smx!4v1742958589246!5m2!1ses!2smx",
    mapsUrl: "https://goo.gl/maps/Wx4NZ1Hukwz13jPGA"
  },
  {
    name: "Consultorio",
    company: "Hamburgo 15",
    addressLines: [
      "Hamburgo 15, Juárez",
      "Cuauhtémoc, 06600",
      "Ciudad de México, CDMX",
    ],
    mapIframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.612633062471!2d-99.16386222215532!3d19.429135994015283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff325624c35f%3A0x680a9229c3cd30ec!2sHamburgo%2015%2C%20Ju%C3%A1rez%2C%20Cuauht%C3%A9moc%2C%2006600%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1742958385793!5m2!1ses!2smx",
    mapsUrl: "https://goo.gl/maps/Bp4u8eEuubPiVCBN6"
  },
];

const LocationSection: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, md: 6 } }}>
      {locations.map((loc, index) => (
        <Grid
          container
          spacing={6}
          alignItems="center"
          key={index}
          sx={{ mb: index < locations.length - 1 ? 10 : 0 }}
        >
          {/* Mapa */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                height: { xs: 300, md: 400 },
                borderRadius: 1,
                overflow: "hidden",
              }}
            >
              <iframe
                src={loc.mapIframeSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
          </Grid>

          {/* Texto */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              gutterBottom
            >
              Nuestras locaciones
            </Typography>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Te esperamos en {loc.addressLines[0]}
            </Typography>

            <Box mt={3}>
              <Typography variant="subtitle1" fontWeight={600}>
                {loc.name}
              </Typography>
              <Typography>{loc.company}</Typography>
              {loc.addressLines.map((line, idx) => (
                <Typography key={idx}>{line}</Typography>
              ))}
            </Box>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

export default LocationSection;
