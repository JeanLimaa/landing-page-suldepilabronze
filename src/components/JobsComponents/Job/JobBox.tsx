import { ReactNode } from "react"

export const JobBox = ({src, children}: {src: string, children: ReactNode}) => {
    return (
        <div className="flex flex-col place-items-center">
            <img
                src={src}
                alt="meus serviços"
                className="rounded max-lg:w-64 max-md:w-full"
            />
            <div className="flex gap-4 max-sm:gap-2">
                <img
                    src="https://file.rendit.io/n/HWJcOWsKyM8w9DhpmCyB.svg"
                    alt="check circle"
                    className="mt-1 w-6 shrink-0"
                />
                <h4 className="text-lg font-medium text-[#535151] mt-1">
                    {children}
                </h4>
            </div>
        </div>
    )
}