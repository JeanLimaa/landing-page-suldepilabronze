import { FloatSection } from "./FloatSection";
import Image from "next/image";

const About = () => {
    return (
        <FloatSection>
            <div className="text-3xl font-semibold tracking-[0.84] leading-[34.3px] text-[#251d1d]">
                Sobre Mim
            </div>
            <div className="self-stretch flex flex-row gap-8 items-start max-sm:flex-col max-sm:items-center">
                <div className="max-sm:w-10/12">
                    <Image
                        src="https://file.rendit.io/n/1ve4xW8sP2zeW6e2f5lu.png"
                        alt="Suely Imagem"
                        width={270}
                        height={270}
                        quality={100}
                        className="rounded-xl"
                    />
                </div>
                <aside className="text-justify text-xl tracking-[0.4] text-[#535151] mt-3 w-2/3 max-md:w-full max-lg:text-lg">
                    <p className="pb-4">
                        Na SulDepila&Bronze, buscamos a excelência em nossos serviços. Utilizamos técnicas avançadas e produtos de alta qualidade para garantir resultados impecáveis. Estamos comprometidos em ajudá-lo a alcançar sua melhor versão.
                    </p>
                    <p>
                        O que está esperando? Explore nossos serviços e agende um horário conosco. Estamos ansiosos para atendê-lo!
                    </p>
                </aside>
            </div>
        </FloatSection>
    );
}

export default About;