import { Box, keyframes, Typography } from '@mui/material';

const twinkle = keyframes`
  0% { opacity: 0.3; }
  100% { opacity: 1; }
`;

const spin = keyframes`
  0% { transform: translate(-50%, -100%) rotate(0deg); }
  100% { transform: translate(-50%, -100%) rotate(360deg); }
`;

const pulse = keyframes`
  0%, 80%, 100% {
    opacity: 0.4;
    transform: scale(1);
  }
  40% {
    opacity: 1;
    transform: scale(1.2);
  }
`;

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

interface CompassProps {
  text1: string;
  text2: string;
}

const CompassPreloader: React.FC<CompassProps> = ({ text1, text2 }) => {
  return (
    <Box
      sx={{
        fontFamily: "'Inter', sans-serif",
        background: 'linear-gradient(135deg, #1a237e 0%, #283593 50%, #1e3a8a 100%)',
        width: '100vw',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
        margin: 0,
        padding: 0,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: 1,
        }}
      >
        {[...Array(8)].map((_, i) => (
          <Box
            key={i}
            sx={{
              position: 'absolute',
              background: 'white',
              borderRadius: '50%',
              animation: `${twinkle} 2s infinite alternate`,
              top: `${[20, 30, 70, 10, 80, 60, 40, 15][i]}%`,
              left: `${[10, 80, 20, 70, 90, 5, 60, 40][i]}%`,
              width: `${[2, 1, 1.5, 1, 2, 1, 1.5, 1][i]}px`,
              height: `${[2, 1, 1.5, 1, 2, 1, 1.5, 1][i]}px`,
              animationDelay: `${[0, 0.5, 1, 1.5, 0.2, 0.8, 1.2, 0.3][i]}s`,
            }}
          />
        ))}
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          zIndex: 10,
          position: 'relative',
          animation: `${fadeInUp} 1s ease-out`,
        }}
      >
        <Box
          sx={{
            width: { xs: '150px', sm: '200px' },
            height: { xs: '150px', sm: '200px' },
            position: 'relative',
            marginBottom: '40px',
            background:
              'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
            borderRadius: '50%',
            border: '3px solid rgba(255,255,255,0.3)',
            boxShadow: '0 0 30px rgba(255,255,255,0.1), inset 0 0 30px rgba(255,255,255,0.05)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '100%',
              position: 'relative',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box sx={{ position: 'absolute', width: '100%', height: '100%' }}>
              {[...Array(4)].map((_, i) => (
                <Box
                  key={i}
                  sx={{
                    position: 'absolute',
                    background: 'rgba(255,255,255,0.6)',
                    transformOrigin: 'center',
                    width: '2px',
                    height: '20px',
                    top: '5px',
                    left: '50%',
                    marginLeft: '-1px',
                    transform: `rotate(${i * 90}deg)`,
                  }}
                />
              ))}
            </Box>
            <Box
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                color: 'rgba(255,255,255,0.8)',
                fontWeight: 600,
                fontSize: '18px',
                zIndex: 15, // Добавлен zIndex для букв, чтобы они были выше всех элементов
              }}
            >
              <Typography
                sx={{
                  position: 'absolute',
                  transform: 'translate(-50%, -50%)',
                  top: '15px',
                  left: '50%',
                }}
              >
                N{' '}
                {/* Заменено Box на Typography для корректного рендеринга текста и устранения артефактов */}
              </Typography>
              <Typography
                sx={{
                  position: 'absolute',
                  transform: 'translate(-50%, -50%)',
                  top: '50%',
                  right: '15px',
                }}
              >
                E {/* Заменено Box на Typography для консистентности */}
              </Typography>
              <Typography
                sx={{
                  position: 'absolute',
                  transform: 'translate(-50%, -50%)',
                  bottom: '15px',
                  left: '50%',
                }}
              >
                S {/* Заменено Box на Typography для консистентности */}
              </Typography>
              <Typography
                sx={{
                  position: 'absolute',
                  transform: 'translate(-50%, -50%)',
                  top: '50%',
                  left: '15px',
                }}
              >
                W {/* Заменено Box на Typography для консистентности */}
              </Typography>
            </Box>
            <Box
              sx={{
                position: 'absolute',
                width: '4px',
                height: '80px',
                background:
                  'linear-gradient(to bottom, #ff4444 0%, #ff4444 50%, #ffffff 50%, #ffffff 100%)',
                borderRadius: '2px',
                top: '50%',
                left: '50%',
                transformOrigin: 'center bottom',
                transform: 'translate(-50%, -100%) rotate(0deg)',
                animation: `${spin} 3s linear infinite`,
                boxShadow: '0 0 10px rgba(255,68,68,0.5)',
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  top: '-5px',
                  left: '-3px',
                  width: '10px',
                  height: '10px',
                  background: '#ff4444',
                  borderRadius: '50%',
                  boxShadow: '0 0 8px rgba(255,68,68,0.7)',
                },
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                width: '12px',
                height: '12px',
                background: 'radial-gradient(circle, #ffffff 0%, #cccccc 100%)',
                borderRadius: '50%',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 10,
                boxShadow: '0 0 8px rgba(255,255,255,0.5)',
              }}
            />
          </Box>
        </Box>
        <Box sx={{ textAlign: 'center', color: 'rgba(255,255,255,0.9)' }}>
          <Typography
            sx={{
              fontSize: { xs: '20px', sm: '24px' },
              fontWeight: 500,
              marginBottom: '12px',
              letterSpacing: '0.5px',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            {text1}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '14px', sm: '16px' },
              fontWeight: 300,
              opacity: 0.8,
              letterSpacing: '0.3px',
              marginBottom: '20px',
            }}
          >
            {text2}
          </Typography>
          <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            {[...Array(3)].map((_, i) => (
              <Box
                key={i}
                sx={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.4)',
                  animation: `${pulse} 1.5s infinite ease-in-out`,
                  animationDelay: `${i * 0.3}s`,
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CompassPreloader;
