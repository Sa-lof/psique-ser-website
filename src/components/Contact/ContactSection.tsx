"use client";

import React from "react";
import { Box, Grid, Typography} from "@mui/material";
import ContactForm from "./ContactForm"; // Asegúrate de importar el formulario correctamente

const ContactSection: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: "#fbfbfb",
        py: { xs: 6, md: 20},
        px: { xs: 2, md: 10 },
      }}
    >
      <Grid container spacing={6} justifyContent="center">
        {/* Left Column - Info */}
        <Grid item xs={12} md={6}>
          <Box maxWidth="500px">
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Contáctanos
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
                Si necesitas orientación, apoyo psicológico o deseas conocer más sobre nuestros servicios, estamos aquí para escucharte. Puedes llamarnos, escribirnos o completar el formulario.
                Juntos, podemos dar el primer paso hacia tu bienestar emocional.
            </Typography>
            <Typography variant="body1" fontWeight={500}>
                psique_ser@outlook.com
            </Typography>
            <Typography variant="body1" fontWeight={500} mb={1}>
                +52 1 55 3445 8029
            </Typography>

            {/* Additional Sections */}
            <Grid container spacing={3} mt={5}>
              <Grid item xs={12} sm={4}>
                <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                    Atención al Cliente
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Resolvemos tus dudas sobre horarios, servicios o campañas. Estamos para ayudarte.
                </Typography>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                    Sugerencias y Retroalimentación
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Tus comentarios nos ayudan a mejorar. Agradecemos tu retroalimentación.
                </Typography>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                    Colaboraciones y Alianzas
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    ¿Institución, organización o profesional en salud mental? Colaboremos. <strong>📬 psique_ser@outlook.com</strong>.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        {/* Right Column - Contact Form */}
        <Grid item xs={12} md={6}>
          <ContactForm />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactSection;
