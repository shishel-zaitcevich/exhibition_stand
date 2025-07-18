import { Box } from '@mui/material';

export default function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        maxWidth: '1400px',
        width: '100%',
        mx: 'auto',
        px: 2,
        // overflow: { md: 'hidden' },
        // margin: '0 auto',
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'center',
      }}
    >
      {children}
    </Box>
  );
}
