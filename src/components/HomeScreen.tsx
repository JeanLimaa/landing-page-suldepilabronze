import Button from '@mui/material/Button';
import About from './About';
import { SocialMedia } from './SocialMedia';
import Image from 'next/image';

const HomeScreen = () => {
    return (
        <>
            <section
                id='Inicio'
                className='section-padding relative flex min-w-full bg-zinc-100 justify-evenly flex-wrap max-md:justify-center px-40 max-xl:px-0'
            >
                <article className='justify-center flex flex-col max-w-[40vw] max-md:min-w-full gap-4'>
                    <h1 className='text-pink-700 text-6xl max-lg:text-5xl font-bold max-sm:text-[2.52rem] pr-4'>SulDepilla&Bronze</h1>
                    <p className='text-justify '>Olá, seja bem vindo(a)! Eu sou a Suely, sua atendente na SulDepilla&Bronze. Somos uma empresa dedicada à estética e oferecemos diversos serviços de qualidade. Confira o que temos a oferecer!</p>
                    <div className='inline-flex gap-1'>
                        <SocialMedia names={true} />
                    </div>
                    <div>
                        <Button
                            variant="contained"
                            className='bg-[linear-gradient(93deg,_#cc186e_-7%,#8b1717_146%)] pt-3 pb-3'
                            target='_blank'
                            href='https://client.tuaagenda.com/c/Suldepilla&bronze/'
                        >
                            Agendar agora
                        </Button>
                    </div>
                </article>
                <aside className='flex w-42 h-96 mt-16 max-md:mt-2'>
                   {/*  <img src="/suely-cartaz.png" alt="imagem de suely" /> */}
                     <Image src="/suely-cartaz.png"  width={380} height={380} quality={100} priority alt='Imagem Suely' className='w-full' />
                    {/*  <Image src="https://i.imgur.com/rdPlxTx.png"  width={100} height={100} quality={100} alt='Imagem Suely' className='w-full h-full'  /> */}
                </aside>
                <div className='absolute bottom-12 w-[67vw] max-xl:w-[80vw] max-lg:w-[85vw] max-md:w-[90vw] '>
                    <About />
                </div>
            </section>
            <section className="min-h-[470px] max-md:min-h-[340px] max-sm:min-h-[700px] max-[375px]:min-h-[600px]"></section>
        </>
    )
}

export default HomeScreen;