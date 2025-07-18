import { Modal, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import BitrixScript from './BitrixScript';

interface BitrixModalProps {
  open: boolean;
  onClose: () => void;
}

export default function BitrixModal({ open, onClose }: BitrixModalProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
          maxWidth: '90vw',
          width: '600px',
          outline: 'none',
        }}
      >
        <IconButton onClick={onClose} sx={{ position: 'absolute', top: 8, right: 8 }}>
          <CloseIcon />
        </IconButton>

        <BitrixScript />
      </Box>
    </Modal>
  );
}
