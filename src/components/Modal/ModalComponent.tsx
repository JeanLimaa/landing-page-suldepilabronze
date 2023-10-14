'use client';
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { ReactNode, useState } from "react";
import Box from "@mui/material/Box";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 510,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 0.7,
};

interface ModalComponentProps {
  children: ReactNode,
  btnText: string,
  btnClassName?: string,
  btnColor?: 'error',
  btnVariant: 'contained' | 'outlined'
}
export default function ModalComponent({ children, btnText, btnClassName, btnVariant, btnColor }: ModalComponentProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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