import Image from "next/image"

export default function About() {
    return (
        <section
            className="rounded-lg shadow-[0px_16px_50px_0px_rgba(38,_38,_38,_0.4)] bg-white absolute flex flex-col justify-center gap-8 items-start px-20 py-8 max-xl:px-12 max-xl:py-6 max-lg:gap-5 max-sm:items-center "
        >
            <div className="text-3xl font-semibold tracking-[0.84] leading-[34.3px] text-[#251d1d]">
                Sobre Mim
            </div>
            <div className="self-stretch flex flex-row gap-8 items-start max-sm:flex-col max-sm:items-center">
                <div className="max-sm:w-10/12">
                    <img
                        src="https://file.rendit.io/n/1ve4xW8sP2zeW6e2f5lu.png"
                        id="ProfilePic"
                        className="rounded-xl"
                    />
                    {/* <Image alt="" quality={100} width={100} height={100} src="https://file.rendit.io/n/1ve4xW8sP2zeW6e2f5lu.png" /> */}
                </div>
                <aside className="text-justify text-xl tracking-[0.4] text-[#535151] mt-3 w-2/3 max-md:w-full max-lg:text-lg">
                    <p className="pb-4">
                        Na SulDepila&Bronze, a excelência é a nossa norma. Utilizamos as
                        técnicas mais avançadas e produtos de alta qualidade para garantir
                        resultados impecáveis. Somos sua parceira de confiança na busca pela
                        sua melhor versão.
                    </p>
                    <p>
                        O que está esperando? Confira já nossos serviços e marque seu
                        horario conosco. Te aguardo!{" "}
                    </p>
                </aside>
            </div>
        </section>
    )
}