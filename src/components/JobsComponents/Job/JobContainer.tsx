import { ReactNode } from "react"

export const JobContainer = ({children}: {children: ReactNode}) => {
    return <div className="self-stretch flex flex-row justify-between items-start mb-1 mr-px">{children}</div>
    
}