
import { Maps } from "../Maps"
import { NavFooter, TitleFooter } from "./FooterComponents";
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import TodayIcon from '@mui/icons-material/Today';

export default function Footer() {
    return (
        <footer
            id="BgFooter"
            className="bg-[linear-gradient(93deg,_#cc186e_-7%,#8b1717_146%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat grid grid-cols-4 justify-items-center max-2xl:justify-items-start max-md:grid-cols-2 pr-4 pl-8 py-16 gap-4 max-sm:gap-2 max-sm:pr-0 "
        >
            <div>
                <TitleFooter>Links</TitleFooter>
                <NavFooter>
                    <a href="#Inicio">
                        <h3>Inicio</h3>
                    </a>
                    <a href="#Sobre">
                        <h3>Sobre</h3>
                    </a>
                    <a href="#Serviços">
                        <h3>Serviços</h3>
                    </a>
                    <a href="#Trabalhos">
                        <h3>Trabalhos</h3>
                    </a>
                    <a href="#Certificados">
                        <h3>Certificados</h3>
                    </a>
                </NavFooter>
            </div>
            <div>
                <TitleFooter>Contatos</TitleFooter>
                <NavFooter>
                    <h3 className="font-semibold text-white">Whatsapp</h3>
                    <a href="http://" target="_blank" rel="noopener noreferrer"><h3 className="">
                        {<WhatsAppIcon />} +71 9 9113-1833</h3>
                    </a>
                    <h3 className="font-semibold text-white">Instagram</h3>
                    <a href="https://www.instagram.com/suldepillaebronze/" target="_blank" rel="noopener noreferrer">
                        <h3 className="">{<InstagramIcon />} @suldepillaebronze</h3>
                    </a>
                    <h3 className="font-semibold text-white">Email</h3>
                    <a href="mailto:suely.passos82@gmail.com">
                        <h3 className="">{<EmailIcon />} suely.passos82@gmail.com</h3>
                    </a>
                </NavFooter>
            </div>
            <div>
                <TitleFooter>Agendamento</TitleFooter>
                <NavFooter>
                    <h3 className="font-semibold text-white">Agenda</h3>
                    <a href="https://client.tuaagenda.com/c/Suldepilla&bronze" target="_blank" rel="noopener noreferrer">
                        <h3 className="">{<TodayIcon />} Link</h3>
                    </a>
                    <h3 className="font-semibold text-white">Via Whatsapp</h3>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <h3 className="">{<WhatsAppIcon />} +71 9 9113-1833</h3>
                    </a>
                </NavFooter>
            </div>
            <div>
                <TitleFooter>Localização</TitleFooter>
                <NavFooter>
                    <h3 className="font-semibold text-white">Cidade</h3>
                    <h3 className="">Dias D’àvila, Bahia</h3>
                    <h3 className="font-semibold text-white">Endereço</h3>
                    <h3 className="">Imbassay, Rua Santa Rita de Cássia, 96</h3>
                    <Maps />
                </NavFooter>
            </div>
            <div>
            </div>
        </footer>
    )
}