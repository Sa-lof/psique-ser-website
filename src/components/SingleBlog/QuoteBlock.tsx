import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

interface QuoteBlockProps {
  text: string;
}

const QuoteBlock: React.FC<QuoteBlockProps> = ({ text }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: '#fff',
        borderLeft: '5px solid #034873',
        borderRadius: 2,
        boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
        p: { xs: 3, sm: 4 },
        my: 4,
        mx: 'auto',
        maxWidth: '800px',
        fontFamily: `'Georgia', serif`,
        color: '#333',
      }}
    >
      <Avatar
        sx={{
          bgcolor: '#034873',
          width: 56,
          height: 56,
          position: 'absolute',
          top: -28,
          left: 24,
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
        }}
      >
        <FormatQuoteIcon sx={{ fontSize: 32 }} />
      </Avatar>

      <Typography
        variant="h5"
        component="blockquote"
        sx={{
          fontStyle: 'italic',
          lineHeight: 1.6,
          px: 4,
          position: 'relative',
          '&::before': {
            content: '"“"',
            fontSize: '3rem',
            color: '#034873',
            position: 'absolute',
            left: 0,
            top: -20,
          },
          '&::after': {
            content: '"”"',
            fontSize: '3rem',
            color: '#034873',
            position: 'absolute',
            right: 0,
            bottom: -20,
          },
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default QuoteBlock;
