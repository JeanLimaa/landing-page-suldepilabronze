import { ReactNode } from "react"

export const NavFooter = ({ children }: { children: ReactNode }) => {
    return (
        <nav className="text-sm text-zinc-200 flex flex-col pl-2 gap-3 leading-[21.8px]">
            {children}
        </nav>
    )
}

export const TitleFooter = ({ children }: { children: ReactNode }) => {
    return (
        <h2 className="pb-4 text-2xl font-semibold leading-[38.2px] text-white">{children}</h2>
    )
}