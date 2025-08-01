"use client";

import { Box, Grid } from '@mui/material';
import { Product } from '@/shared/Cards/Product/Product';
import { productsList } from './consts';
import { useState } from 'react';

export const ProductsScreen = () => {
  // State to track which row is being hovered (null if none)
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  // Group products into rows (3 cards per row for lg breakpoint)
  const rows = [];
  for (let i = 0; i < productsList.length; i += 3) {
    rows.push(productsList.slice(i, i + 3));
  }

  return (
      <Box sx={{ marginTop: 10 }}>
        <Grid container spacing={4} direction="column">
          {rows.map((row, rowIndex) => (
            <Grid
              container
              key={rowIndex}
              spacing={4}
              onMouseEnter={() => setHoveredRow(rowIndex)}
              onMouseLeave={() => setHoveredRow(null)}
            >
              {row.map((product) => (
                <Grid
                  key={product.title}
                  size={{lg: 4, md: 6, sm: 12}}
                  sx={{ display: 'flex' }}
                >
                  <Product {...product} open={hoveredRow === rowIndex} />
                </Grid>
              ))}
            </Grid>
          ))}
        </Grid>
      </Box>
  );
};