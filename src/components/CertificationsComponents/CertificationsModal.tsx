import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ModalComponent from '../Modal/ModalComponent';
import Skeleton from '@mui/material/Skeleton';
import { certificates } from './certificates';

export function TitlebarBelowImageList() {

  return (
    <ImageList sx={{ width: '100%' , height: 450 }}>
      {certificates.map((item) => (
        <ImageListItem key={item.img}>
            {item ? (
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          ): <Skeleton variant="rectangular" height={150} className='w-full' />}  
          <ImageListItemBar
            title={item.title}
            subtitle={<span>by: {item.emissor}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export function CertificationsModal() {
  return (
    <ModalComponent
      btnText='Ver mais'
      btnClassName='font-semibold text-[#ac1742] border-[#ac1742]'
      btnVariant='text'
      btnColor="error"
    >
      <TitlebarBelowImageList />
    </ModalComponent>
  );
}