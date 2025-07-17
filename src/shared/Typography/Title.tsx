import { Typography, TypographyProps } from '@mui/material';

export const Title = (props: TypographyProps) => {
  return (
    <Typography
      component="h2"
      sx={{
        fontSize: '42px',
        color: '#FFFFFF',
        // margin: 0,
        padding: 0,
        fontWeight: 600,
        textAlign: 'center',
        ...props.sx,
        margin: '140px 0 80px 0',
      }}
      {...props}
    />
  );
};
