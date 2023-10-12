import { Certification } from "./Certification"

export default function Certifications() {
    return (
        <section
            id="Certificados"
            className="flex flex-col mx-24 px-6 max-xl:mx-20 max-lg:mx-4 max-sm:px-2"
        >
            <div className="flex flex-row justify-between items-start mb-10">
                <div className="text-3xl  font-semibold tracking-[0.84]">
                    MINHAS CERTIFICAÇÕES
                </div>
                <div className="text-justify text-lg  font-semibold tracking-[0.36] text-[#ac1742] self-end">
                    Ver mais
                </div>
            </div>
            <div className="flex justify-center max-[2000px]:grid max-[2000px]:grid-cols-4 justify-items-center gap-8 mb-1 max-xl:grid-cols-3 max-sm:grid-cols-2">
                <Certification src="https://file.rendit.io/n/85hPxR6pbFI5NluXkfIv.png" alt="bronze natural">
                    Bronze Natural
                </Certification>
                <Certification src="https://file.rendit.io/n/85hPxR6pbFI5NluXkfIv.png" alt="bronze natural">
                    Bronze Natural
                </Certification>
                <Certification src="https://file.rendit.io/n/85hPxR6pbFI5NluXkfIv.png" alt="bronze natural">
                    Bronze Natural
                </Certification>
                <Certification src="https://file.rendit.io/n/85hPxR6pbFI5NluXkfIv.png" alt="bronze natural">
                    Bronze Natural
                </Certification>
                <Certification src="https://file.rendit.io/n/85hPxR6pbFI5NluXkfIv.png" alt="bronze natural">
                    Bronze Natural
                </Certification>
                <Certification src="https://file.rendit.io/n/85hPxR6pbFI5NluXkfIv.png" alt="bronze natural">
                    Bronze Natural
                </Certification>
            </div>
        </section>
    )
}