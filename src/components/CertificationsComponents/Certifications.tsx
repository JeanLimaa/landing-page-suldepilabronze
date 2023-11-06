import { CertificationsModal } from "./CertificationsModal";
import { Certification } from "./Certification";
import { certificates } from "./certificates";

export default function Certifications() {
  const displayedCertificates = certificates.slice(0, 8);

  return (
    <section
      id="Certificados"
      className="flex flex-col mx-24 px-6 max-xl:mx-20 max-lg:mx-4 max-sm:px-2 pb-32"
    >
      <div className="flex flex-row justify-between items-start mb-10">
        <div className="text-3xl  font-semibold tracking-[0.84]">
          MINHAS CERTIFICAÇÕES
        </div>
        <div className="text-justify  self-end">
          <CertificationsModal />
        </div>
      </div>
      <div className="flex justify-center max-[2000px]:grid max-[2000px]:grid-cols-4 justify-items-center gap-8 mb-1 max-xl:grid-cols-3 max-sm:grid-cols-2">
        {displayedCertificates.map((certificate, index) => (
          <Certification
            key={index}
            src={certificate.img}
            alt={certificate.title}
          >
            {certificate.title}
          </Certification>
        ))}
      </div>
    </section>
  );
}
