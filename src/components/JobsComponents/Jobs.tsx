import JobsTabs from "./Tabs/Tabs";

export default function Jobs() {
    return (
        <section
            id="Trabalhos"
            className="rounded-lg shadow-[0px_16px_50px_0px_rgba(38,_38,_38,_0.4)] bg-white flex flex-col justify-end gap-3 items-center mb-40 mx-40 pt-8 pb-4 px-8 max-xl:m-16 max-xl:px-2 max-sm:m-3"
        >
            <div className="text-xl font-semibold tracking-[0.9] text-[#ac1742] mb-px">
                COMO É O MEU TRABALHO?
            </div>
            <JobsTabs />
            <button
                className="hover:bg-rose-600 hover:text-white text-[#ac1742] transition-all ease-in-out duration-500 border-solid border-[#ac1742] flex flex-col justify-center h-16 shrink-0 items-center border-2"
            >
                <a className="text-center text-lg font-semibold  mx-16" target="_blank" href="https://client.tuaagenda.com/c/Suldepilla&bronze">
                    Agende agora
                </a>
            </button>
        </section>
    )
}