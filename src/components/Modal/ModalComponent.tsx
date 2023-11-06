'use client';
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { ReactNode, useState } from "react";
import Box from "@mui/material/Box";
import { useMediaQuery } from "@mui/material";

interface ModalComponentProps {
  children: ReactNode,
  btnText: string,
  btnClassName?: string,
  btnColor?: 'error',
  btnVariant: 'contained' | 'text'
}
export default function ModalComponent({ children, btnText, btnClassName, btnVariant, btnColor }: ModalComponentProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const isTablet = useMediaQuery("(max-width:768px)");
  const isMobile = useMediaQuery("(max-width:510px)");

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: isMobile ? "98.8%" : isTablet ? "95%" : 510,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: isMobile ? 0.25 : 1,
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant={btnVariant}
        color={btnColor}
        className={btnClassName}
      >
        {btnText}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {children}
        </Box>
      </Modal>
    </div>
  );
}