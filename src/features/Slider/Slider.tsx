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

export default function ImageSlider() {
  const [open, setOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState<string | null>(null);

  const handleOpen = (src: string) => () => {
    setCurrentImg(src);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentImg(null);
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
                onClick={handleOpen(src)}
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

      {/* Модальное окно */}
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
            // borderRadius: '32px',
            overflow: 'hidden',
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{ position: 'absolute', top: 8, right: 8, color: '#fff', zIndex: 10 }}
          >
            <CloseIcon />
          </IconButton>
          {currentImg && (
            <Box
              component="img"
              src={currentImg}
              alt="full-size"
              sx={{
                width: '100%',
                height: 'auto',
                display: 'block',
                // borderRadius: '32px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.6)',
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
}

// export default function ImageSlider() {
//   return (
//     <Box>
//       <Title>Фотографии с Нева 2023</Title>
//       <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
//         <Swiper
//           modules={[Navigation]}
//           slidesPerView={4}
//           spaceBetween={16}
//           navigation={{
//             nextEl: '.custom-swiper-next',
//             prevEl: '.custom-swiper-prev',
//           }}
//         >
//           {images.map((src, index) => (
//             <SwiperSlide key={index}>
//               <Box
//                 component="img"
//                 src={src}
//                 alt={`slide-${index}`}
//                 sx={{
//                   width: '100%',
//                   height: 'auto',
//                   display: 'block',
//                   filter: 'grayscale(100%)',
//                   transition: 'filter 0.3s, transform 0.3s',
//                   cursor: 'pointer',
//                   borderRadius: '12px',
//                   '&:hover': {
//                     filter: 'grayscale(0%)',
//                     transform: 'scale(1.05)',
//                   },
//                 }}
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Кнопки навигации */}
//         <IconButton
//           className="custom-swiper-prev"
//           sx={{
//             position: 'absolute',
//             top: '50%',
//             left: 8,
//             transform: 'translateY(-50%)',
//             backgroundColor: 'rgba(0,0,0,0.4)',
//             color: '#fff',
//             zIndex: 10,
//             '&:hover': { backgroundColor: 'rgba(0,0,0,0.6)' },
//           }}
//         >
//           <ArrowBackIosNewIcon />
//         </IconButton>

//         <IconButton
//           className="custom-swiper-next"
//           sx={{
//             position: 'absolute',
//             top: '50%',
//             right: 8,
//             transform: 'translateY(-50%)',
//             backgroundColor: 'rgba(0,0,0,0.4)',
//             color: '#fff',
//             zIndex: 10,
//             '&:hover': { backgroundColor: 'rgba(0,0,0,0.6)' },
//           }}
//         >
//           <ArrowForwardIosIcon />
//         </IconButton>
//       </Box>
//     </Box>
//   );
// }
