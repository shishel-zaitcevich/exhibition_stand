'use client';
import { InnovationCard } from '@/shared/Cards/InnovationCard/InnovationCard';
import { Logo } from '@/shared/Logos/Logo';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import Link from 'next/link';
import { useRef, useState } from 'react';

export default function InnovationCards() {
  const [hovered, setHovered] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  const cards = [
    {
      variant: 'black' as const,
      logo: <Logo logoSrc={'/img/logo/transas.png'} />,
      name: 'ТРАНЗАС',
      href: 'https://transas.ru/',
      text: 'Многолетний опыт создания программно-аппаратных комплексов, интеграции, поддержки и управления жизненным циклом продуктов',
      backgroundImage: '/img/lightCard.png',
      stats: [
        { label: 'Береговых систем СУДС ', value: '250' },
        { label: 'Судов оснащено морским оборудованием', value: '13000+' },
        { label: 'Электронных карт поставлено пользователям.', value: '3 млн+' },
      ],
    },
    {
      variant: 'blue' as const,
      logo: <Logo logoSrc={'/img/logo/navx.png'} />,
      name: 'NAVX',
      href: 'https://navx.ru/',
      text: 'Разрабатывает высокоточные цифровые системы для судовождения и управления флотом',
      backgroundImage: '/img/darkCard.png',
      stats: [
        { label: 'Системы навигации и электронных карт', value: '' },
        { label: 'Картографические инструменты', value: '' },
        { label: 'Цифровая инфраструктура', value: '' },
      ],
    },
  ];

  const getState = (index: number) => {
    if (isMobile) return 'mobile';
    if (hovered === null) return 'normal';
    if (hovered === index) return 'expanded';
    return 'collapsed';
  };

  return (
    <Box
      display="flex"
      gap={4}
      justifyContent="center"
      ref={containerRef}
      sx={{ flexDirection: { xs: 'column', sm: 'column', lg: 'row' }, width: '100%' }}
    >
      {cards.map((c, i) => (
        <Link key={i} href={c.href} style={{ textDecoration: 'none', color: '#FFF' }}>
          <InnovationCard
            {...c}
            ref={(el: HTMLDivElement | null) => {
              cardRefs.current[i] = el;
            }}
            state={getState(i)}
            onHoverStart={() => setHovered(i)}
            onHoverEnd={() => setHovered(null)}
          />
        </Link>
      ))}
    </Box>
  );
};
