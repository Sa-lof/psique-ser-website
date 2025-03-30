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
    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        correo: "",
        mensaje: "",
    });
    const [isSending, setIsSending] = useState(false);
    const [responseMessage, setResponseMessage] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSending(true);

        try {
            const res = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                throw new Error("Error en el envío del correo");
            }

            const data = await res.json();
            console.log(data);
            setResponseMessage("¡Tu mensaje ha sido enviado!");
            setFormData({
                nombre: "",
                apellido: "",
                correo: "",
                mensaje: "",
            });
        } catch (error) {
            console.error("Error al enviar el email", error);
            setResponseMessage(
                "Hubo un error al enviar tu mensaje. Inténtalo de nuevo más tarde."
            );
        } finally {
            setIsSending(false);
        }
    };

    return (
        <Card
            sx={{
                maxWidth: '100%',
                p: 4,
                backgroundColor: "white",
            }}
        >
            <Typography variant="h5" fontWeight="bold" gutterBottom>
                Hablemos
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom mb={4}>
                Tu mensaje es importante para nosotros.
            </Typography>

            <Box
                component="form"
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            name="nombre"
                            label="Nombre"
                            variant="outlined"
                            size="medium"
                            value={formData.nombre}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            name="apellido"
                            label="Apellido"
                            variant="outlined"
                            size="medium"
                            value={formData.apellido}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            name="correo"
                            label="Correo electrónico"
                            variant="outlined"
                            size="medium"
                            value={formData.correo}
                            onChange={handleChange}
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
                            name="mensaje"
                            label="Mensaje"
                            variant="outlined"
                            multiline
                            rows={4}
                            value={formData.mensaje}
                            onChange={handleChange}
                            inputProps={{ maxLength: MAX_MESSAGE_LENGTH }}
                            helperText={`${formData.mensaje.length}/${MAX_MESSAGE_LENGTH}`}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            disabled={isSending}
                        >
                            {isSending ? "Enviando..." : "Enviar"}
                        </Button>
                    </Grid>
                    {responseMessage && (
                        <Grid item xs={12}>
                            <Typography variant="body2" align="center">
                                {responseMessage}
                            </Typography>
                        </Grid>
                    )}
                </Grid>
            </Box>
        </Card>
    );
};

export default ContactForm;
