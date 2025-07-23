import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { FC, useState } from 'react';
import { ArrowButton } from '@/shared/ArrowButton/ArrowButton';
import { AnimatePresence, motion } from 'framer-motion';

interface Props {
  open?: boolean;
  icon: string;
  title: string;
  description: string;
  backgroundImage?: string; // Add background image prop
}

export const Product: FC<Props> = ({ open, icon, title, description, backgroundImage }) => {
  const [hover, setHover] = useState(false);

  // Debug log
  console.log('Product props:', { title, backgroundImage });

  return (
    <Box
      component={motion.div}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      sx={{
        borderRadius: 2,
        background: (theme) => theme.palette.background.paper,
        padding: 2,
        flex: 1,
        opacity: 1,
        transition: 'height 0.5s ease-in-out 0.2s',
        minWidth: '434px',
        height: open ? 350 : 150,
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
      }}
    >
      {/* Background Image */}
      <AnimatePresence>
        {hover && (
          <>
            {/* Background Image Layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 1,
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: 8,
                minHeight: 150, // Установите нужную минимальную высоту
                maxHeight: 350, // Ограничьте максимальную высоту
              }}
            />
            {/* Dark Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 2,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                borderRadius: 8,
              }}
            />
          </>
        )}
      </AnimatePresence>

      <Stack
        justifyContent="space-between"
        gap={2}
        direction="row"
        sx={{
          marginBottom: 2,
          alignItems: 'center',
          position: 'relative',
          zIndex: 3,
        }}
      >
        <Stack
          justifyContent="start"
          gap={2}
          direction="row"
          sx={{ alignItems: 'center', width: '100%' }}
        >
          <AnimatePresence>
            {!hover && (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
              >
                <motion.div
                  // animate={{
                  //   scale: hover ? 1.1 : 1,
                  // }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <Box
                    sx={{
                      minWidth: 40,
                      minHeight: 40,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flex: 1,
                      borderRadius: 2,
                      padding: '4px',
                      boxSizing: 'content-box',
                      position: 'relative',
                      backgroundColor: (theme) => theme.palette.background.default,
                      '&::after': {
                        width: '60%',
                        height: '60%',
                        content: "''",
                        position: 'absolute',
                        top: '-2px',
                        left: '-2px',
                        borderRadius: 2,
                        pointerEvents: 'none',
                        background:
                          'linear-gradient(135deg, blue 0%, rgba(65, 65, 244, 0.5) 20%, transparent 100%)',
                      },
                      '&::before': {
                        width: '60%',
                        height: '60%',
                        content: "''",
                        position: 'absolute',
                        bottom: '-2px',
                        right: '-2px',
                        borderRadius: 2,
                        pointerEvents: 'none',
                        background:
                          'linear-gradient(135deg, transparent 0%, rgba(0, 0, 255, 0.5) 95%, blue 100%)',
                      },
                    }}
                  >
                    <Image src={icon} alt="icon" width={34} height={34} />
                  </Box>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          <Typography
            component={motion.h5}
            variant="h5"
            fontWeight="bold"
            initial={{ x: 0 }} // Изначальное положение
            animate={{
              x: hover ? -5 : 0, // Смещение влево на 50px при hover
              color: hover ? '#ffffff' : 'inherit',
            }}
            transition={{
              duration: 0.9,
              ease: 'linear',
            }}
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {title}
          </Typography>
        </Stack>
        <ArrowButton active={hover} />
      </Stack>

      {open && !hover && (
        <Box
          sx={{
            position: 'relative',
            zIndex: 3,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: '#000000',
            }}
          >
            {description}
          </Typography>
        </Box>
      )}

      {open && hover && (
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
          }}
          style={{
            position: 'relative',
            zIndex: 3,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: '#ffffff',
            }}
          >
            {description}
          </Typography>
        </motion.div>
      )}
    </Box>
  );
};
