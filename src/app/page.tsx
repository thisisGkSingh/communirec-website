import ClientsSection from "./ClientsSection";
import ContactUs from "./ContactUs";
import HeroSection from "./HeroSection";
import NavigationBar from "./NavigationBar";
import Services from "./Services";
import TopComponent from "./TopComponent";

export default function Home() {
  return (
    <div>
      <HeroSection />
      {/* <TopComponent /> */}
      <NavigationBar />
      <Services />
      {/* <ClientsSection /> */}
      <ContactUs />
    </div>
  );
}
