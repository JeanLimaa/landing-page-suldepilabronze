import { ReactNode } from "react"

export const FloatSection = ({children}: {children: ReactNode}) => {
    return (
        <section
            className="rounded-lg shadow-[0px_16px_50px_0px_rgba(38,_38,_38,_0.4)] bg-white absolute flex flex-col justify-center gap-8 items-start px-20 py-8 max-xl:px-12 max-xl:py-6 max-lg:gap-5 max-sm:items-center "
        >
            {children}
        </section>
    )
}