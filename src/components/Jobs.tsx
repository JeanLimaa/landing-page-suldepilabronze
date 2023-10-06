export default function Jobs() {
    return (
        <section className="shadow-[0px_0px_30px_0px_rgba(38,_38,_38,_0.15)] bg-white flex flex-col justify-end gap-6 items-center mb-48 mx-32 pt-12 pb-3 px-8">
            <div className="text-lg font-['Montserrat'] font-semibold tracking-[0.9] text-[#ac1742] mb-px">
                COMO É O MEU TRABALHO?
            </div>
            <div className="self-stretch flex flex-row justify-between items-start mb-1 mr-px">
                <img
                    src="https://file.rendit.io/n/nq99GJLxMp8Fjyq00dQC.png"
                    id="Imgfundocliente"
                    className=""
                />
                <img
                    src="https://file.rendit.io/n/nq99GJLxMp8Fjyq00dQC.png"
                    id="Imgfundocliente2"
                    className=""
                />
                <img
                    src="https://file.rendit.io/n/nq99GJLxMp8Fjyq00dQC.png"
                    id="Imgfundocliente1"
                    className=""
                />
            </div>
            <div className="self-stretch flex flex-row gap-4 items-start ml-16 mr-12">
                <img
                    src="https://file.rendit.io/n/HWJcOWsKyM8w9DhpmCyB.svg"
                    id="Checkcircle2"
                    className="mt-1 w-6 shrink-0"
                />
                <div
                    id="Bronzeamento1"
                    className="text-lg font-['Montserrat'] font-medium text-[#535151] mt-1 mr-56"
                >
                    Bronzeamento{" "}
                </div>
                <img
                    src="https://file.rendit.io/n/Ot6305PcJvAEUUfQPVuF.svg"
                    id="Checkcircle1"
                    className="w-6 shrink-0"
                />
                <div className="text-lg font-['Montserrat'] font-medium text-[#535151] mt-px mr-56">
                    Depilação
                </div>
                <img
                    src="https://file.rendit.io/n/ufSZ1tIBHFk7UiVaoxcU.svg"
                    id="Checkcircle"
                    className="mt-1 w-6 shrink-0"
                />
                <div className="text-lg font-['Montserrat'] font-medium text-[#535151] mt-1">
                    Limpeza de pele
                </div>
            </div>
            <button
                id="CTAButton"
                className="border-solid border-[#ac1742] flex flex-col justify-center h-16 shrink-0 items-center border-2"
            >
                <div className="text-center text-lg font-['Montserrat'] font-semibold text-[#ac1742] mx-16">
                    Agende agora
                </div>
            </button>
        </section>
    )
}