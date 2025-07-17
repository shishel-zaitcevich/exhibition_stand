"use client";

import { Box, Grid } from '@mui/material';
import { Product } from '@/shared/Cards/Product/Product';
import { productsList } from './consts';
import { useEffect, useRef, useState } from 'react';

export const ProductsScreen = () => {
  const cardsRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeCards, setActiveCards] = useState<number[]>([]);
  const lastScrollY = useRef<number>(0);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    // Проверяем, доступен ли window
    if (typeof window === 'undefined') return;

    // Инициализируем начальную позицию скролла
    lastScrollY.current = window.scrollY;

    const checkCardPositions = () => {
      const viewportCenter = window.innerHeight / 2;
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY.current;
      const candidates: number[] = [];

      // Проверяем положение каждой карточки
      cardsRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (isScrollingDown) {
            // При прокрутке вниз: верхний край пересекает центр
            if (rect.top <= viewportCenter && rect.bottom > viewportCenter) {
              candidates.push(index);
            }
          } else {
            // При прокрутке вверх: нижний край пересекает центр
            if (rect.bottom >= viewportCenter && rect.top < viewportCenter) {
              candidates.push(index);
            }
          }
        }
      });

      // Обновляем активные карточки, ограничивая до 3
      setActiveCards((prev) => {
        const newActive = [...prev];
        candidates.forEach((index) => {
          if (!newActive.includes(index) && newActive.length < 3) {
            newActive.push(index);
          }
        });

        // Фильтруем карточки, которые больше не соответствуют условиям
        const filteredActive = newActive.filter((index) => {
          const rect = cardsRefs.current[index]?.getBoundingClientRect();
          if (!rect) return false;
          if (isScrollingDown) {
            return rect.bottom > viewportCenter;
          } else {
            return rect.top < viewportCenter;
          }
        });

        // Сортируем по индексу для предсказуемого порядка
        return filteredActive.sort((a, b) => a - b).slice(0, 3);
      });

      lastScrollY.current = currentScrollY;

      // Запрашиваем следующий кадр
      animationFrameRef.current = window.requestAnimationFrame(checkCardPositions);
    };

    // Запускаем проверку позиций
    animationFrameRef.current = window.requestAnimationFrame(checkCardPositions);

    // Очистка при размонтировании
    return () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <Box sx={{ margin: '80px 0' }}>
      <Grid container spacing={4}>
        {productsList.map((product, index) => (
          <Grid
            key={product.title}
            sx={{
              display: 'flex',
            }}
            size={{ lg: 4, sm: 12 }}
            ref={(el: HTMLDivElement | null) => {
              cardsRefs.current[index] = el;
            }}
          >
            <Product {...product} open={activeCards.includes(index)} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};