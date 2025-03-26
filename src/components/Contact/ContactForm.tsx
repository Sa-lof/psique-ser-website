"use client";

import React, { useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
  InputAdornment,
  Card,
} from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const MAX_MESSAGE_LENGTH = 120;

const ContactForm: React.FC = () => {
  const [message, setMessage] = useState("");

  return (
    <Card
      elevation={3}
      sx={{
        maxWidth: 480,
        mx: "auto",
        p: 4,
        backgroundColor: "white",
      }}
    >
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Hablemos
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        Tu mensaje es importante para nosotros.
      </Typography>

      <Box component="form" noValidate autoComplete="off">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Nombre"
              variant="outlined"
              size="medium"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Apellido"
              variant="outlined"
              size="medium"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Correo electrónico"
              variant="outlined"
              size="medium"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailOutlinedIcon color="disabled" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Mensage"
              variant="outlined"
              multiline
              rows={4}
              value={message}
              inputProps={{ maxLength: MAX_MESSAGE_LENGTH }}
              onChange={(e) => setMessage(e.target.value)}
              helperText={`${message.length}/${MAX_MESSAGE_LENGTH}`}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              sx={{ borderRadius: 10 }}
            >
              Enviar
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

export default ContactForm;
