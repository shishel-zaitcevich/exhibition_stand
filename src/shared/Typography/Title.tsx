import { Typography, TypographyProps } from '@mui/material';

// export const Title = (props: TypographyProps) => {
//   return (
//     <Typography
//       component="h2"
//       sx={{
//         fontSize: '42px',
//         color: '#FFFFFF',
//         // margin: 0,
//         padding: 0,
//         fontWeight: 600,
//         textAlign: 'center',
//         ...props.sx,
//         margin: '140px 0 80px 0',
//       }}
//       {...props}
//     />
//   );
// };

export const Title = (props: TypographyProps) => {
  return (
    <Typography
      component="h2"
      sx={{
        color: '#FFFFFF',
        fontWeight: 600,
        textAlign: {
          xs: 'center', // мобильные устройства
        },
        // Адаптивный размер шрифта
        fontSize: {
          xs: '24px', // мобильные устройства
          sm: '28px', // планшеты (портретная ориентация)
          md: '34px', // планшеты (альбомная ориентация)
          lg: '38px', // десктоп
          xl: '42px', // большие экраны
        },
        // Адаптивные отступы
        margin: {
          xs: '60px 0 40px 0', // мобильные устройства
          sm: '80px 0 50px 0', // планшеты (портретная ориентация)
          md: '100px 0 60px 0', // планшеты (альбомная ориентация)
          lg: '120px 0 70px 0', // десктоп
          xl: '140px 0 80px 0', // большие экраны
        },
        ...props.sx,
      }}
      {...props}
    />
  );
};
