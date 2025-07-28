import React from 'react';
import { Box, Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import Link from 'next/link';
import { Telegram } from '@mui/icons-material';

export default function Footer() {
  return (
    <Box
      component="footer"
      id={'contacts'}
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0 auto',
        // p: 4,
        color: '#ffffff',
        // gap: 2,

        // Адаптивные стили
        p: {
          xs: 2,
          sm: 3,
          md: 4, // возвращаем исходное
        },

        gap: {
          xs: 1.5,
          sm: 2,
        },
      }}
    >
      <Box
        sx={{
          flexShrink: 0,
          // Адаптивные стили для изображения
          width: {
            xs: '300px',
            sm: '400px',
            md: '500px',
            lg: '600px',
            xl: '700px', // исходный размер
          },
          height: {
            xs: '300px',
            sm: '400px',
            md: '500px',
            lg: '600px',
            xl: '700px', // исходный размер
          },
        }}
      >
        <img
          src="/img/sailboat.png"
          alt="sailboat"
          style={{
            objectFit: 'contain',
            width: '100%',
            height: '100%',
          }}
        />
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        gap={2}
        alignItems={'center'}
        sx={{
          // Адаптивные стили для контентного блока
          gap: {
            xs: 1.5,
            md: 2, // возвращаем исходное
          },
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{
            // fontSize: '47px',
            // marginBottom: '30px',

            // Адаптивные стили
            fontSize: {
              xs: '28px',
              sm: '32px',
              md: '38px',
              lg: '42px',
              xl: '47px', // возвращаем исходное
            },

            marginBottom: {
              xs: '15px',
              sm: '20px',
              md: '25px',
              xl: '30px', // возвращаем исходное
            },

            textAlign: 'center',
          }}
        >
          Увидимся на выставке!
        </Typography>

        <Typography
          variant="body2"
          sx={{
            // fontSize: '20px',
            textAlign: 'center',
            // marginBottom: '40px',

            // Адаптивные стили
            fontSize: {
              xs: '14px',
              sm: '16px',
              md: '18px',
              xl: '20px', // возвращаем исходное
            },

            marginBottom: {
              xs: '20px',
              sm: '25px',
              md: '30px',
              xl: '40px', // возвращаем исходное
            },

            lineHeight: {
              xs: 1.4,
              md: 1.2,
            },
          }}
        >
          C 23 по 26 cентября 2025 года в Санкт-Петербурге, <br />
          КВЦ Экспофорум Павильон F5, 245.
        </Typography>

        <Box
          display="flex"
          alignItems="center"
          gap={3}
          mt={1}
          sx={{
            // Адаптивные стили для блока контактов
            // flexDirection: {
            //   xs: 'column',
            //   md: 'row', // возвращаем исходное
            // },
            flexDirection: { xs: 'row', lg: 'column', xl: 'row' },

            gap: {
              xs: 1.5,
              md: 3, // возвращаем исходное
            },

            mt: {
              xs: 0.5,
              md: 1, // возвращаем исходное
            },
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            gap={1}
            sx={{
              gap: {
                xs: 0.5,
                md: 1, // возвращаем исходное
              },
            }}
          >
            <PhoneIcon
              fontSize="small"
              sx={{
                fontSize: {
                  xs: '16px',
                  md: '20px', // small размер для десктопа
                },
              }}
            />
            <Typography
              variant="body2"
              sx={{
                fontSize: {
                  xs: '14px',
                  sm: '16px',
                  md: '18px',
                  xl: '20px', // возвращаем исходное
                },
              }}
            >
              +7 (812) 325-31-31
            </Typography>
          </Box>

          <Box
            display="flex"
            alignItems="center"
            gap={1}
            sx={{
              gap: {
                xs: 0.5,
                md: 1, // возвращаем исходное
              },
            }}
          >
            <EmailIcon
              fontSize="small"
              sx={{
                fontSize: {
                  xs: '16px',
                  md: '20px', // small размер для десктопа
                },
              }}
            />
            <Typography
              variant="body2"
              sx={{
                fontSize: {
                  xs: '14px',
                  sm: '16px',
                  md: '18px',
                  xl: '20px', // возвращаем исходное
                },
              }}
            >
              info@transas.org
            </Typography>
          </Box>
        </Box>

        {/* Новый блок с Telegram */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            mt: {
              xs: 1,
              md: 2,
            },
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            gap={1}
            sx={{
              textDecoration: 'none',
              color: '#ffffff',
              transition: 'all 0.3s ease',
              // padding: '8px 16px',
              borderRadius: '8px',

              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                transform: 'translateY(-2px)',
              },

              gap: {
                xs: 0.5,
                md: 1,
              },

              padding: {
                xs: '6px 12px',
                md: '8px 16px',
              },
            }}
          >
            <Telegram
              sx={{
                fontSize: {
                  xs: '18px',
                  md: '22px',
                },
                color: '#FFF', // цвет Telegram
              }}
            />
            <Link
              href={'https://t.me/transas_official'}
              target="_blank"
              style={{ textDecoration: 'none', color: '#FFFFFF' }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontSize: {
                    xs: '14px',
                    sm: '16px',
                    md: '18px',
                    xl: '20px',
                  },
                }}
              >
                Telegram
              </Typography>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
