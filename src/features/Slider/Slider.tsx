import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { images } from './config/images';

export default function ImageSlider() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (
      activeIndex !== null &&
      containerRef.current &&
      !containerRef.current.contains(e.target as Node)
    ) {
      setActiveIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeIndex]);

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Box
      ref={containerRef}
      sx={{
        display: 'flex',
        gap: 2,
        overflowX: 'auto',
        p: 2,
        position: 'relative',
        zIndex: 1,
      }}
    >
      {images.map((src, i) => {
        const isActive = i === activeIndex;

        return (
          <Box
            key={i}
            onClick={() => handleClick(i)}
            component="img"
            src={src}
            alt={`slide-${i}`}
            sx={{
              width: isActive ? 'auto' : 200,
              height: isActive ? 'auto' : 150,
              maxWidth: isActive ? '80vw' : 200,
              maxHeight: isActive ? '80vh' : 150,
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              filter: 'grayscale(100%)',
              '&:hover': {
                filter: 'grayscale(0%)',
                transform: 'scale(1.05)',
              },
              position: isActive ? 'fixed' : 'relative',
              top: isActive ? '50%' : 'auto',
              left: isActive ? '50%' : 'auto',
              transform: isActive ? 'translate(-50%, -50%) scale(2)' : 'none',
              boxShadow: isActive ? '0px 4px 20px rgba(0,0,0,0.5)' : 'none',
              zIndex: isActive ? 10 : 0,
            }}
          />
        );
      })}
    </Box>
  );
}
