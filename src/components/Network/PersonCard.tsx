"use client";

import React, { useState } from "react";
import {
    Card,
    CardActionArea,
    CardContent,
    Typography,
    Box,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    Avatar,
    IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface PersonCardProps {
    photoUrl: string;         // URL for background image
    name: string;            // Person's name
    description: string;     // Short description or role
    avatarUrl?: string;      // URL for avatar in the dialog
    semblanza?: string;      // Full text to display in dialog
}

const PersonCard: React.FC<PersonCardProps> = ({
    photoUrl,
    name,
    description,
    avatarUrl,
    semblanza,
}) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Card
                sx={{
                    overflow: "hidden",
                    height: 350,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    position: "relative",
                    backgroundImage: `url(${photoUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    color: "#fff",
                }}
            >
                <CardActionArea
                    onClick={handleOpen}
                    sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}
                >
                    <CardContent
                        sx={{
                            background: "linear-gradient(to top, rgba(0,0,0,0.08), rgba(0,0,0,0))",
                            width: "100%",
                            py: 2,
                            px: 2,
                        }}
                    >
                        <Typography variant="h6" color="#00407A">
                            {name}
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.9 }} color="#00407A">
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            {/* Dialog for more details */}
            <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
                <DialogTitle sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Box display="flex" alignItems="center" gap={2}>
                        {avatarUrl && (
                            <Avatar
                                src={avatarUrl}
                                alt={name}
                                sx={{ width: 48, height: 48 }}
                            />
                        )}
                        <Typography variant="h6" sx={{ fontWeight: 700 }}>
                            {name}
                        </Typography>
                    </Box>
                    <IconButton onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent dividers>
                    {semblanza ? (
                        <DialogContentText variant="body2" sx={{ whiteSpace: "pre-line" }}>
                            {semblanza}
                        </DialogContentText>
                    ) : (
                        <DialogContentText variant="body2" sx={{ fontStyle: "italic" }}>
                            No semblanza disponible
                        </DialogContentText>
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
};

export default PersonCard;
