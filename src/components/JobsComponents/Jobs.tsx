import Pagination from "@mui/material/Pagination";
import BasicTabs from "./Tabs";

export default function Jobs() {
    return (
        <section className="rounded-lg shadow-[0px_16px_50px_0px_rgba(38,_38,_38,_0.4)] bg-white flex flex-col justify-end gap-3 items-center mb-40 mx-36 pt-8 pb-4 px-8">
            <div className="text-xl font-semibold tracking-[0.9] text-[#ac1742] mb-px">
                COMO É O MEU TRABALHO?
            </div>
            <BasicTabs />
            <Pagination count={2} variant="outlined" color="secondary" />
            <button
                id="CTAButton"
                className="border-solid border-[#ac1742] flex flex-col justify-center h-16 shrink-0 items-center border-2"
            >
                <div className="text-center text-lg font-semibold text-[#ac1742] mx-16">
                    Agende agora
                </div>
            </button>
        </section>
    )
}