import { FloatSection } from "./FloatSection";
/* 'use client' */
import Image from "next/image";
/* import { Button } from "@mui/material";
import { useState } from "react";
 */
export default function About() {
    /* const [readMore, setReadMore] = useState(false); */

    return (
        <FloatSection>
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
                   {/*  <Image alt="suely-imagem" quality={100} width={270} height={270} src="https://file.rendit.io/n/1ve4xW8sP2zeW6e2f5lu.png" className="rounded-xl" /> */}
                </div>
                <aside className="text-justify text-xl tracking-[0.4] text-[#535151] mt-3 w-2/3 max-md:w-full max-lg:text-lg">
                    <p className="pb-4">
                        Na SulDepila&Bronze, a excelência é a nossa norma. Utilizamos as
                        técnicas mais avançadas e produtos de alta qualidade para garantir
                        resultados impecáveis. Somos sua parceira de confiança na busca pela
                        sua melhor versão. 
                        {/* <Button color="secondary" onClick={() => setReadMore(!readMore)}>{!readMore ? "Ler mais" : "Ler menos"}</Button> */}
                    </p>
                    {/* {readMore &&( */}
                        <p>
                            O que está esperando? Confira já nossos serviços e marque seu
                            horario conosco. Te aguardo!{" "}
                        </p>
{/*                     )
                    } */}
                </aside>
            </div>
        </FloatSection>
    )
}