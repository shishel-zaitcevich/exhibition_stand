import { Typography, TypographyProps } from '@mui/material';

export type PColor = 'white' | 'black' | 'lightBlue' | 'lightBlack' | 'blue' | 'grayBlue';

const colorMap: Record<PColor, string> = {
  white: '#FFFFFF',
  black: '#000000',
  lightBlue: 'rgba(230, 236, 255, 0.57)',
  lightBlack: 'rgba(0, 0, 0, 0.76)',
  blue: '#8DA7FF',
  grayBlue: '#E6ECFF',
};

interface PProps extends TypographyProps {
  colorVariant?: PColor;
}

export const Paragraph = ({ colorVariant = 'white', sx, ...props }: PProps) => {
  return (
    <Typography
      component="p"
      sx={{
        fontSize: '20px',
        color: colorMap[colorVariant],
        margin: 0,
        padding: 0,
        ...sx,
      }}
      {...props}
    />
  );
};
