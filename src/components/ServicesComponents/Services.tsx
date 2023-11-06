import Service from "./Service";
import ServicesModal from "./Modal/ServicesModal";

const Services = () => {

    return (
        <section
            id="Serviços"
            className="bg-[linear-gradient(93deg,_#a9145b_-7%,#161315_71%,#db2c80_146%)] bg-cover bg-blend-normal bg-no-repeat flex flex-col justify-center mb-[146px] py-16"
        >
            <div className="bg-white flex flex-row justify-center gap-8 p-9 max-xl:flex-col items-center max-sm:p-3" >
                <div className="self-start flex flex-col mt-24 gap-4 items-start w-[30vw] pr-16 max-xl:w-full max-lg:pr-0">
                    <h2 className="text-lg tracking-[0.9] text-[#ac1742]">
                        SERVIÇOS
                    </h2>
                    <h1 className="text-3xl font-semibold tracking-[0.84] text-[#251d1d] mb-2 w-full">
                        DESTAQUE SUA BELEZA!
                    </h1>
                    <p className="text-[#535151] mb-4 w-full text-justify">
                        Desfrute de tratamentos de beleza excepcionais, projetados para realçar a sua aparência e aumentar a sua confiança. 
                        Nossa equipe de especialistas está comprometida em proporcionar os melhores serviços de estética para você.
                    </p>
                    <div className="text-justify text-lg underline font-semibold tracking-[0.36] text-[#ac1742]">
                        <ServicesModal />
                    </div>
                </div>
                <aside className="grid gap-6 grid-cols-3 max-xl:mb-10 justify-between max-lg:gap-20 max-md:grid-cols-2 max-md:mb-4 max-[375px]:grid-cols-1">
                    <Service serviceName="Bronzeamento" src="https://file.rendit.io/n/GBbZYVupjEn6Xub5qMTk.png">
                        Aqui nós temos bronze com excelência! Oferecemos desde bronzeamento natural até bronzeamento no Sol Azul.
                    </Service>
                    <Service serviceName="Depilação" src="https://file.rendit.io/n/sy12oaP5RB40R4BW7JvN.png">
                        Experimente a depilação à cera com até 80% menos dor. Você está no lugar certo para se sentir suave e confiante.
                    </Service>
                    <Service serviceName="Limpeza de pele" src="https://file.rendit.io/n/PhUBn2CddZAeuIva53kg.png">
                        Mime a sua pele com nossos tratamentos de limpeza de pele profunda. Sinta a diferença e revele a sua beleza natural.
                    </Service>
                </aside>
            </div>
        </section>
    );
}

export default Services;