import { ReactNode } from 'react'

interface CertificationProps {
    children: ReactNode,
    src: string,
    alt: string
}

export const Certification = ({ children, src, alt }: CertificationProps) => {
    return (
        <div className="border-b-2 border-[#a19e9e] ">
            <img
                src={src}
                alt={alt}
            />
            <div className="text-xl  tracking-[0.6] leading-[24.5px] text-[#251d1d] mr-4 ">
                {children}
            </div>
        </div>
    )
} 