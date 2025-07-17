import React from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { images } from './config/images';
import { Box, IconButton } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Title } from '@/shared/Typography/Title';

export default function ImageSlider() {
  return (
    <Box>
      <Title>Фотографии с Нева 2023</Title>
      <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
        <Swiper
          modules={[Navigation]}
          slidesPerView={4}
          spaceBetween={16}
          navigation={{
            nextEl: '.custom-swiper-next',
            prevEl: '.custom-swiper-prev',
          }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <Box
                component="img"
                src={src}
                alt={`slide-${index}`}
                sx={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  filter: 'grayscale(100%)',
                  transition: 'filter 0.3s, transform 0.3s',
                  cursor: 'pointer',
                  borderRadius: '12px',
                  '&:hover': {
                    filter: 'grayscale(0%)',
                    transform: 'scale(1.05)',
                    borderRadius: '12px',
                  },
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Кнопки навигации */}
        <IconButton
          className="custom-swiper-prev"
          sx={{
            position: 'absolute',
            top: '50%',
            left: 8,
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0,0,0,0.4)',
            color: '#fff',
            zIndex: 10,
            '&:hover': { backgroundColor: 'rgba(0,0,0,0.6)' },
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>

        <IconButton
          className="custom-swiper-next"
          sx={{
            position: 'absolute',
            top: '50%',
            right: 8,
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0,0,0,0.4)',
            color: '#fff',
            zIndex: 10,
            '&:hover': { backgroundColor: 'rgba(0,0,0,0.6)' },
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
