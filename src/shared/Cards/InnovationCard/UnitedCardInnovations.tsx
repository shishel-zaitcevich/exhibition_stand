import { Box, Typography } from '@mui/material';

export const UnitedCardInnovations = () => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '900px',
        height: {sm: 300, md: '550px'},
        display: 'flex',
        paddingLeft: {sm: 'auto', md: '80px'},
        padding: {sm: '20px', md: '80px'},
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: '26px',
        backgroundImage: `url('/img/cardBg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'calc(50% +80px) 50%',
        backgroundRepeat: 'no-repeat',
        color: '#FFF',
        // boxShadow: 'inset 0px 2px 7.6px 0px rgba(64, 119, 149, 0.68)',
        textMaxWidth: '280px',
        overflow: 'hidden',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.05)', // Белая прозрачная маска (30% непрозрачности)
          borderRadius: '26px', // Соответствует радиусу контейнера
          zIndex: 1, // Над фоном, но под контентом
        },
      }}
    >
      <Typography
        component="h1"
        sx={{
          fontWeight: '700',
          fontSize: '28px',
          maxWidth: '450px',
          lineHeight: '35px',
          textAlign: 'left',
        }}
      >
        ТРАНЗАС и NAVX — это не просто сотрудничество. Это синергия технологий и опыта.
      </Typography>
    </Box>
  );
};

// export const UnitedCardInnovations = () => {
//   const styles = {
//     ...cardStyles.base,
//   };

//   return (
//     <Box sx={styles}>
//       <Typography
//         component="h1"
//         sx={{ fontWeight: '700', fontSize: '28px', maxWidth: '834px', lineHeight: '35px' }}
//       >
//         TRANSAS и NAVX — это не просто сотрудничество.
//         <br /> Это синергия технологий и опыта.
//       </Typography>
//       <Typography
//         variant="body2"
//         sx={{
//           fontSize: '20px',
//           marginBottom: '40px',
//           maxWidth: '645px',
//           marginTop: '20px',
//           lineHeight: '30px',
//         }}
//       >
//         Когда разработки дополняются экспертизой и инфраструктурой — рождаются комплексные решения,
//         готовые к реальной работе на флоте.
//       </Typography>
//       <Box position="relative" display="flex">
//         <Box
//           position="relative"
//           width={'380px'}
//           height="250px"
//           borderRadius="16px"
//           overflow="hidden"
//         >
//           <Box
//             sx={{
//               //         background: `
//               //   linear-gradient(to left, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
//               //   linear-gradient(to left, rgba(0, 0, 0, 0.79), rgba(0, 0, 0, 0.79)),
//               //   linear-gradient(180deg, rgba(41, 52, 255, 1) 99.99%, rgba(41, 52, 255, 0) 100%)
//               // `,
//               //         opacity: 0.55,
//               width: '100%',
//               height: '100%',
//               position: 'absolute',
//               top: 0,
//               left: 0,
//               zIndex: 0,
//             }}
//           />
//           <Box
//             sx={{
//               background: `rgba(217, 217, 217, 0.1)`,
//               filter: 'blur(10px)',
//               position: 'absolute',
//               top: 0,
//               left: 0,
//               width: '100%',
//               height: '100%',
//               zIndex: 1,
//             }}
//           />
//           <Box
//             sx={{
//               position: 'relative',
//               zIndex: 2,
//               padding: '20px',
//               color: 'white',
//             }}
//           >
//             <GrowthTrackingBlock />
//           </Box>
//         </Box>
//         <Image
//           src="/img/graph.png"
//           alt="tanker"
//           width={600}
//           height={350}
//           style={{ objectFit: 'contain', position: 'relative', bottom: '85px', right: '100px' }}
//         />
//       </Box>
//     </Box>
//   );
// };
