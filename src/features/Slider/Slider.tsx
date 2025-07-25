import React, { useState } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { images } from './config/images';
import { Box, Dialog, DialogContent, IconButton, useMediaQuery, useTheme } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Title } from '@/shared/Typography/Title';
import CloseIcon from '@mui/icons-material/Close';

const navButtonStyles = (side: 'left' | 'right') => ({
  position: 'absolute',
  top: '50%',
  [side]: { xs: 4, sm: 6, md: 8, xl: 8 },
  transform: 'translateY(-50%)',
  backgroundColor: 'rgba(0,0,0,0.4)',
  color: '#fff',
  zIndex: 10,
  width: { xs: 32, sm: 36, md: 40, xl: 40 },
  height: { xs: 32, sm: 36, md: 40, xl: 40 },
  '&:hover': { backgroundColor: 'rgba(0,0,0,0.6)' },
});

export default function ImageSlider() {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const theme = useTheme();

  // Determine maxWidth based on breakpoint
  const isXs = useMediaQuery(theme.breakpoints.only('xs')); // 0–359px
  const isSm = useMediaQuery(theme.breakpoints.only('sm')); // 360–599px
  const isMd = useMediaQuery(theme.breakpoints.only('md')); // 600–899px
  const isLg = useMediaQuery(theme.breakpoints.only('lg')); // 900–1199px

  // Исправленная логика для maxWidth
  const maxWidth: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = isXs
    ? 'sm'
    : isSm
    ? 'md'
    : isMd
    ? 'lg'
    : isLg
    ? 'xl' // для lg используем xl
    : 'xl'; // для xl и больше используем xl

  const handleOpen = (index: number) => () => {
    setCurrentIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentIndex(null);
  };

  return (
    <Box>
      <Title>Фотографии с Нева 2023</Title>

      <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
        <Swiper
          modules={[Navigation]}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 8 }, // xs
            360: { slidesPerView: 2, spaceBetween: 12 }, // sm
            600: { slidesPerView: 3, spaceBetween: 14 }, // md
            900: { slidesPerView: 3.5, spaceBetween: 14 }, // lg
            1200: { slidesPerView: 4, spaceBetween: 16 }, // xl
          }}
          navigation={{ nextEl: '.custom-swiper-next', prevEl: '.custom-swiper-prev' }}
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <Box
                component="img"
                src={src}
                alt={`slide-${idx}`}
                onClick={handleOpen(idx)}
                sx={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  filter: 'grayscale(100%)',
                  transition: 'filter 0.3s, transform 0.3s',
                  cursor: 'pointer',
                  borderRadius: { xs: '8px', sm: '8px', md: '10px', xl: '12px' },
                  '&:hover': {
                    filter: 'grayscale(0%)',
                    transform: 'scale(1.05)',
                  },
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <IconButton className="custom-swiper-prev" sx={navButtonStyles('left')}>
          <ArrowBackIosNewIcon sx={{ fontSize: { xs: 16, sm: 18, md: 20, xl: 24 } }} />
        </IconButton>

        <IconButton className="custom-swiper-next" sx={navButtonStyles('right')}>
          <ArrowForwardIosIcon sx={{ fontSize: { xs: 16, sm: 18, md: 20, xl: 24 } }} />
        </IconButton>
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        disableScrollLock
        maxWidth={maxWidth}
        fullWidth
        BackdropProps={{
          sx: {
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            backdropFilter: 'blur(8px)',
          },
        }}
        PaperProps={{
          sx: {
            borderRadius: { xs: '16px', sm: '20px', md: '24px', xl: '30px' },
            background: 'transparent',
            // Добавляем принудительное ограничение размеров для xl экранов
            maxWidth: {
              xl: '1200px !important',
            },
            maxHeight: {
              xl: '800px !important',
            },
          },
        }}
      >
        <DialogContent
          sx={{
            position: 'relative',
            p: 0,
            background: 'transparent',
            overflow: 'hidden',
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: { xs: 4, sm: 6, md: 8, xl: 8 },
              right: { xs: 4, sm: 6, md: 8, xl: 8 },
              color: '#fff',
              zIndex: 10,
              width: { xs: 32, sm: 36, md: 40, xl: 40 },
              height: { xs: 32, sm: 36, md: 40, xl: 40 },
            }}
          >
            <CloseIcon sx={{ fontSize: { xs: 16, sm: 18, md: 20, xl: 24 } }} />
          </IconButton>

          {typeof currentIndex === 'number' && (
            <Box sx={{ position: 'relative' }}>
              <Swiper
                initialSlide={currentIndex}
                modules={[Navigation]}
                navigation={{
                  nextEl: '.modal-swiper-next',
                  prevEl: '.modal-swiper-prev',
                }}
                breakpoints={{
                  0: { spaceBetween: 8 }, // xs
                  360: { spaceBetween: 12 }, // sm
                  600: { spaceBetween: 14 }, // md
                  900: { spaceBetween: 14 }, // lg
                  1200: { spaceBetween: 16 }, // xl
                }}
                slidesPerView={1}
              >
                {images.map((src, idx) => (
                  <SwiperSlide key={idx}>
                    <Box
                      component="img"
                      src={src}
                      alt={`modal-slide-${idx}`}
                      sx={{
                        width: '100%',
                        height: '100%',
                        maxWidth: { xl: '1200px' },
                        maxHeight: { xl: '800px' },
                        display: 'block',
                        objectFit: 'contain',
                        margin: 'auto',
                        borderRadius: { xs: '8px', sm: '8px', md: '10px', xl: '12px' },
                        boxShadow: {
                          xs: '0 4px 12px rgba(0,0,0,0.4)',
                          sm: '0 6px 18px rgba(0,0,0,0.5)',
                          xl: '0 8px 24px rgba(0,0,0,0.6)',
                        },
                      }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <IconButton className="modal-swiper-prev" sx={navButtonStyles('left')}>
                <ArrowBackIosNewIcon sx={{ fontSize: { xs: 16, sm: 18, md: 20, xl: 24 } }} />
              </IconButton>

              <IconButton className="modal-swiper-next" sx={navButtonStyles('right')}>
                <ArrowForwardIosIcon sx={{ fontSize: { xs: 16, sm: 18, md: 20, xl: 24 } }} />
              </IconButton>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
}
