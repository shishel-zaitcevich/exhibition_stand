import React, { useState } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { images } from './config/images';
import { Box, Dialog, DialogContent, IconButton } from '@mui/material';
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
  [side]: 8,
  transform: 'translateY(-50%)',
  backgroundColor: 'rgba(0,0,0,0.4)',
  color: '#fff',
  zIndex: 10,
  '&:hover': { backgroundColor: 'rgba(0,0,0,0.6)' },
});

export default function ImageSlider() {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

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
          slidesPerView={4}
          spaceBetween={16}
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
                  borderRadius: '12px',
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
          <ArrowBackIosNewIcon />
        </IconButton>

        <IconButton className="custom-swiper-next" sx={navButtonStyles('right')}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        disableScrollLock
        maxWidth="lg"
        fullWidth
        BackdropProps={{
          sx: {
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            backdropFilter: 'blur(8px)',
          },
        }}
        PaperProps={{ sx: { borderRadius: '30px', background: 'transparent' } }}
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
            sx={{ position: 'absolute', top: 8, right: 8, color: '#fff', zIndex: 10 }}
          >
            <CloseIcon />
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
                spaceBetween={16}
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
                        height: 'auto',
                        display: 'block',
                        borderRadius: '12px',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.6)',
                      }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <IconButton className="modal-swiper-prev" sx={navButtonStyles('left')}>
                <ArrowBackIosNewIcon />
              </IconButton>

              <IconButton className="modal-swiper-next" sx={navButtonStyles('right')}>
                <ArrowForwardIosIcon />
              </IconButton>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
}
