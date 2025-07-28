'use client';

import { useRef } from 'react';
import { Box } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { useInView, motion } from 'framer-motion';
import { InnovationCard } from '@/shared/Cards/InnovationCard/InnovationCard';
import { UnitedCardInnovations } from '@/shared/Cards/InnovationCard/UnitedCardInnovations';
import { Logo } from '@/shared/Logos/Logo';

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

const MotionBlock = ({ children, from }: { children: React.ReactNode; from: 'left' | 'right' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: from === 'left' ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{ display: 'flex', justifyContent: from === 'left' ? 'flex-start' : 'flex-end' }}
    >
      {children}
    </motion.div>
  );
};

export const InnovationCardsMobile = () => {
  const isMobile = useMediaQuery('(max-width:1199px)');
  if (!isMobile) return null;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        px: 2,
        mt: 4,
      }}
    >
      {cards.map((card, index) => {
        const from = index % 2 === 0 ? 'left' : 'right';
        return (
          <MotionBlock from={from} key={card.name}>
            <InnovationCard
              {...card}
              state="expanded"
              onHoverStart={() => {}}
              onHoverEnd={() => {}}
            />
          </MotionBlock>
        );
      })}

      <MotionBlock from="left">
        <UnitedCardInnovations />
      </MotionBlock>
    </Box>
  );
};
