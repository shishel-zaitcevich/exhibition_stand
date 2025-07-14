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
    <Box display="flex" gap={2}>
      {timeUnits.map((unit, index) => (
        <Box key={index} textAlign="center">
          <Box
            sx={{
              width: 111,
              height: 55,
              backgroundColor: '#031457',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 2,
            }}
          >
            <Typography variant="h5" sx={{ color: '#fff', fontWeight: 600 }}>
              {unit.value.toString().padStart(2, '0')}
            </Typography>
          </Box>
          <Typography
            variant="body2"
            sx={{ color: '#fff', mt: 1, textTransform: 'uppercase', fontWeight: 600 }}
          >
            {unit.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
