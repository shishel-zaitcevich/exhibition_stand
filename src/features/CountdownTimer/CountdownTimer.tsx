'use client';

import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { TimeLeft, getTimeLeft, getWordForm } from './lib/countdown';

type CountdownTimerProps = {
  targetDate: Date;
};

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: getWordForm(timeLeft.days, ['день', 'дня', 'дней']), value: timeLeft.days },
    { label: getWordForm(timeLeft.hours, ['час', 'часа', 'часов']), value: timeLeft.hours },
    {
      label: getWordForm(timeLeft.minutes, ['минута', 'минуты', 'минут']),
      value: timeLeft.minutes,
    },
    {
      label: getWordForm(timeLeft.seconds, ['секунда', 'секунды', 'секунд']),
      value: timeLeft.seconds,
    },
  ];

  return (
    <Box
      display="flex"
      gap={2}
      position={'absolute'}
      sx={{
        // position: { xs: 'relative', lg: 'absolute', xl: '-37px' },
        bottom: {
          xs: '0',
          // sm: '0px',
          md: '-70px',
          lg: '-30px',
          xl: '-37px',
        },

        left: {
          xs: '0',
          md: '20px',
          lg: 'auto',
          xl: 'auto',
        },

        right: {
          xs: 'auto',
          lg: '10px',
          xl: '0',
        },
        width: {xs: '100%', sm: '100%', md: 'auto'},
        justifyContent: {sm: 'center', md: 'flex-start'}
      }}
    >
      {timeUnits.map((unit, index) => (
        <Box key={index} textAlign="center">
          <Box
            sx={{
              backgroundColor: '#031457',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 2,

              width: {
                xs: 60,
                sm: 70,
                // md:
                lg: 90,
                xl: 111,
              },

              height: {
                xs: 40,
                lg: 40,
                xl: 55,
              },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: '#fff',
                fontWeight: 600,
                fontSize: {
                  xs: '18px',
                  lg: '30px',
                },
              }}
            >
              {unit.value.toString().padStart(2, '0')}
            </Typography>
          </Box>
          <Typography
            variant="body2"
            sx={{
              color: '#fff',
              mt: 1,
              textTransform: 'uppercase',
              fontWeight: 600,
              fontSize: {
                xs: '12px',
                lg: '20px',
              },
            }}
          >
            {unit.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
