'use client';

import { MotionProductCard } from '@/shared/Cards/Product/MotionProductCard';
import { Product } from '@/shared/Cards/Product/Product';
import { useMediaQuery, Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { productsList } from './consts';

export const MobileProductsScreen = () => {
  const isXs = useMediaQuery('(max-width:599px)');
  const isMd = useMediaQuery('(max-width:1350px)');

  if (isXs) {
    return (
      <Box sx={{ mt: 6, px: 2 }}>
        <Grid container direction="column" spacing={4} alignItems="center">
          {productsList.map((product, index) => {
            const from = index % 2 === 0 ? 'left' : 'right';
            return (
              <Grid key={product.title}>
                <MotionProductCard from={from}>
                  <Product {...product} open={true} variant="mobile" />
                </MotionProductCard>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    );
  }

  if (isMd) {
    const rows = [];
    for (let i = 0; i < productsList.length; i += 2) {
      rows.push(productsList.slice(i, i + 2));
    }

    return (
      <Box sx={{ mt: 6, px: 2 }}>
        <Grid container direction="column" spacing={4}>
          {rows.map((row, rowIndex) => (
            <Grid container spacing={4} key={rowIndex} justifyContent="center">
              {row.map((product, i) => {
                const from = i === 0 ? 'left' : 'right';
                return (
                  <Box key={product.title} sx={{ maxWidth: '450px', width: '100%' }}>
                    <MotionProductCard from={from}>
                      <Product {...product} open={true} variant="tablet" />
                    </MotionProductCard>
                  </Box>
                );
              })}
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }

  return null;
};
