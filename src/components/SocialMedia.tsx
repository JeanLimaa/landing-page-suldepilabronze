import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const SocialMedia = ({names}: {names?: boolean}) => {
    return (
        <>
            <a href="" target='_blank'>
                <WhatsAppIcon sx={{ color: "#25D366" }} fontSize='large' className='cursor-pointer' />
                {names && (
                    <span className='text-xs hover:text-sm hover:text-purple-700  transition-all ease-in-out duration-500'>Whatsapp</span>
                )}
            </a>
            <a target='_blank' href="https://www.instagram.com/suldepillaebronze/">
                <InstagramIcon sx={{ color: "#cd486b" }} fontSize='large' className='cursor-pointer' />
                {names && (
                    <span className='text-xs hover:text-sm hover:text-purple-700  transition-all ease-in-out duration-500'>Instagram</span>
                )}
            </a>
        </>
    )
}