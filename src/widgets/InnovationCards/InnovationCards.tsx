'use client';
import { InnovationCard } from '@/shared/Cards/InnovationCard/InnovationCard';
import { Logo } from '@/shared/Logos/Logo';
import { Box } from '@mui/material';
import { useState } from 'react';

export default function InnovationCards() {
  const [hovered, setHovered] = useState<number | null>(null);

  const cards = [
    {
      variant: 'black' as const,
      logo: <Logo logoSrc={'/img/logo/transas.png'} />,
      text: 'Многолетний опыт создания программно-аппаратных комплексов, интеграции, поддержки и управления жизненным циклом продуктов',
      backgroundImage: '/img/lightCard.png',
      stats: [
        { label: 'СУДС', value: '250' },
        { label: 'Электронных карт поставлено пользователям', value: '13000+' },
        { label: 'Оборудовано морского оборудования', value: '3 млн+' },
      ],
    },
    {
      variant: 'blue' as const,
      logo: <Logo logoSrc={'/img/logo/navx.png'} />,
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
    if (hovered === null) return 'normal';
    if (hovered === index) return 'expanded';
    return 'collapsed';
  };

  return (
    <Box display="flex" gap={4} justifyContent="center">
      {cards.map((c, i) => (
        <InnovationCard
          key={i}
          {...c}
          state={getState(i)}
          onHoverStart={() => setHovered(i)}
          onHoverEnd={() => setHovered(null)}
        />
      ))}
    </Box>
  );
}
