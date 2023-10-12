import HomeScreen from "@/components/HomeScreen";
import Services from "@/components/ServicesComponents/Services";
import Certifications from "@/components/CertificationsComponents/Certifications";
import Footer from "@/components/Footer";
import Jobs from "@/components/JobsComponents/Jobs";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <HomeScreen />
      <Services />
      <Jobs />
      <Certifications />
    </main>
  )
}
