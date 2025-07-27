'use client';

import { useMediaQuery } from '@mui/material';
import { ProductsScreen } from './ProductsScreen';
import { MobileProductsScreen } from './MobileProductsScreen';

export const ResponsiveProducts = () => {
  //   const theme = useTheme();
  const isDesktop = useMediaQuery('(min-width:1351px)');

  return isDesktop ? <ProductsScreen /> : <MobileProductsScreen />;
};
