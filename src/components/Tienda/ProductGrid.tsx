import React from 'react';
import { Grid, Container } from '@mui/material';
import ProductCard from './ProductCard';

const products = [
    {
      imageUrl: '/Tienda/termo.jpeg',
      name: 'Termo con frase para promover el bienestar mental',
      price: 280,
      description: [
        "Termo color rojo, azul o negro con frases ilustradas:",
        "Ir a terapia es como abrir el tercer ojo.",
        "Ir a terapia son mis 5 minutos de Milky way",
        "Se aprende del dolor.",
        "En terapia encontré la brújula que había perdido.",
        "Ir a terapia es regalarme tiempo para entenderme.",
        "En cada sesión pongo una pieza en el rompecabezas de mi vida.",
        "Terapia es liberar el nudo de un hilo enredado.",
        "Ir a terapia es encontrar luz en un bosque oscuro.",
        "Sanar en terapia es aprender a abrazar mis sombras y mis luces.",
        "Precio: $280 x pieza"
      ]
    },
    {
      imageUrl: '/Tienda/libreta.jpeg',
      name: 'Libreta con frase para promover el bienestar mental',
      price: 230,
      description: [
        "Libreta color azul, naranja y gris con frases ilustradas:",
        "Ir a terapia es como abrir el tercer ojo.",
        "Ir a terapia son mis 5 minutos de Milky way",
        "Se aprende del dolor.",
        "En terapia encontré la brújula que había perdido.",
        "Ir a terapia es regalarme tiempo para entenderme.",
        "En cada sesión pongo una pieza en el rompecabezas de mi vida.",
        "Terapia es liberar el nudo de un hilo enredado.",
        "Ir a terapia es encontrar luz en un bosque oscuro.",
        "Sanar en terapia es aprender a abrazar mis sombras y mis luces.",
        "Precio: $230 x pieza"
      ]
    },
    {
      imageUrl: '/Tienda/cinta.jpeg',
      name: 'Cinta para credencial o llaves con frases para promover el bienestar mental',
      price: 60,
      description: [
        "Cinta con diferentes frases ilustrativas:",
        "Ir a terapia es como abrir el tercer ojo.",
        "Ir a terapia son mis 5 minutos de Milky way",
        "Se aprende del dolor.",
        "En terapia encontré la brújula que había perdido.",
        "Ir a terapia es regalarme tiempo para entenderme.",
        "En cada sesión pongo una pieza en el rompecabezas de mi vida.",
        "Terapia es liberar el nudo de un hilo enredado.",
        "Ir a terapia es encontrar luz en un bosque oscuro.",
        "Sanar en terapia es aprender a abrazar mis sombras y mis luces.",
        "Precio: $60 x pieza"
      ]
    },
    {
      imageUrl: '/Tienda/stickers.jpeg',
      name: 'Stickers con frases para promover el bienestar mental',
      price: 80,
      description: [
        "Kit de 9 stickers con frases ilustradas:",
        "Ir a terapia es como abrir el tercer ojo.",
        "Ir a terapia son mis 5 minutos de Milky way",
        "Se aprende del dolor.",
        "En terapia encontré la brújula que había perdido.",
        "Ir a terapia es regalarme tiempo para entenderme.",
        "En cada sesión pongo una pieza en el rompecabezas de mi vida.",
        "Terapia es liberar el nudo de un hilo enredado.",
        "Ir a terapia es encontrar luz en un bosque oscuro.",
        "Sanar en terapia es aprender a abrazar mis sombras y mis luces.",
        "Precio: $80 x pieza"
      ]
    },
  ];  

const ProductGrid: React.FC = () => {
  return (
    <Container sx={{ py: 18}}>
      <Grid container spacing={4} justifyContent="center">
        {products.map((product, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <ProductCard {...product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductGrid;
