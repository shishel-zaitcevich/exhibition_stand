import React from 'react';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  return (
    <Box
      component="footer"
      id={'contacts'}
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0 auto',
        p: 4,
        color: '#ffffff',
        gap: 2,
      }}
    >
      <Box sx={{ flexShrink: 0 }}>
        <Image
          src="/img/sailboat.png"
          alt="sailboat"
          width={700}
          height={700}
          style={{ objectFit: 'contain' }}
        />
      </Box>

      <Box display="flex" flexDirection="column" gap={2} alignItems={'center'}>
        <Typography variant="h4" component="h2" sx={{ fontSize: '47px', marginBottom: '30px' }}>
          Увидимся на выставке!
        </Typography>

        <Typography
          variant="body2"
          sx={{ fontSize: '20px', textAlign: 'center', marginBottom: '40px' }}
        >
          C 23 по 26 cентября 2025 года в Санкт-Петербурге, КВЦ <br />
          Экспофорум Павильон F5, 245.
        </Typography>

        <Box display="flex" alignItems="center" gap={3} mt={1}>
          <Box display="flex" alignItems="center" gap={1}>
            <PhoneIcon fontSize="small" />
            <Typography variant="body2" fontSize="20px">
              +7 (812) 325-31-31
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" gap={1}>
            <EmailIcon fontSize="small" />
            <Typography variant="body2" fontSize="20px">
              info@transas.org
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
