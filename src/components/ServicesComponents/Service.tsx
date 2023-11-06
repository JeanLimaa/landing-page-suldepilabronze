import { ReactNode } from "react";
import Image from "next/image";
interface ServiceProps {
    src: string;
    serviceName: string;
    children: ReactNode;
  }

export default function Service({children, src, serviceName}: ServiceProps){

    return (
        <div className="flex flex-col mt-10 gap-3 items-start w-[270px] max-lg:w-full max-[375px]:w-[80vw]">
            <div className="w-full ">
                <Image
                    src={src}
                    alt={serviceName}
                    width={280}
                    height={280}
                    priority
                />
            </div>
            <div className="flex flex-col gap-4 items-start ">
                <div className="text-justify text-2xl font-semibold tracking-[0.48] text-[#ac1742]">
                    {serviceName}
                </div>
                <div className="text-justify tracking-[0.32] text-[#535151] w-full">
                    <p>
                        {children}  
                        <span className="text-[#ac1742] contents"> Saiba mais.</span>
                    </p>
                </div>
            </div>
        </div>
    )
}