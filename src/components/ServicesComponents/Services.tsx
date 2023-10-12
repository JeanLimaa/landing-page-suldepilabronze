import Service from "./Service"

export default function Services() {
    return (
        <section
            id="Serviços"
            className="bg-[linear-gradient(93deg,_#a9145b_-7%,#161315_71%,#db2c80_146%)] bg-cover bg-blend-normal bg-no-repeat flex flex-col justify-center mb-[146px] py-16"
        >
            <div className="bg-white flex flex-row justify-center gap-8 p-9 max-xl:flex-col items-center max-sm:p-3" >
                <div className="self-start flex flex-col mt-24 gap-4 items-start w-[30vw] pr-16 max-xl:w-full max-lg:pr-0">
                    <div className="text-lg tracking-[0.9] text-[#ac1742]">
                        SERVIÇOS
                    </div>
                    <div className="text-3xl font-semibold tracking-[0.84] text-[#251d1d] mb-2 w-full">
                        O MELHOR PARA A SUA BELEZA!
                    </div>
                    <div className="text-[#535151] mb-4 w-full text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue elit
                        interdum ante purus gravida.
                    </div>
                    <div className="text-justify text-lg underline font-semibold tracking-[0.36] text-[#ac1742]">
                        Consultar Preços
                    </div>
                </div>
                <aside className="grid gap-5 grid-cols-3 max-xl:mb-10 justify-between max-lg:gap-20 max-md:grid-cols-2 max-md:mb-4 max-[375px]:grid-cols-1 items-center">
                    <Service serviceName="Bronzeamento" src="https://file.rendit.io/n/GBbZYVupjEn6Xub5qMTk.png">
                        Aqui nós temos bronze com excelencia! Desde bronzeamento natural,
                        até bronze no “Sol azul”.
                    </Service>
                    <Service serviceName="Depilação" src="https://file.rendit.io/n/sy12oaP5RB40R4BW7JvN.png">
                        Está afim de uma depilação à cera, com até 80% a menos de dor? Você
                        está no lugar certo!
                    </Service>
                    <Service serviceName="Limpeza de pele" src="https://file.rendit.io/n/PhUBn2CddZAeuIva53kg.png">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                        egestas felis, in aliquam.
                    </Service>
                </aside>
            </div>
        </section>
    )
}