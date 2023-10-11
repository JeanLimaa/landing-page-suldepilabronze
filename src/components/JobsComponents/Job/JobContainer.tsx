import { ReactNode } from "react"

export const JobContainer = ({children}: {children: ReactNode}) => {
    return <div className="self-stretch flex flex-row justify-around items-start mb-4 gap-4">{children}</div>
}