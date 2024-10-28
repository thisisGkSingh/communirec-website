import BrandedStoreSection from "./BrandedStoreSection";
import ClientsSection from "./ClientsSection";
import ContactUs from "./ContactUs";
import FacilityManagementSection from "./FacilityManagementSection";
import HeroSection from "./HeroSection";
import NavigationBar from "./NavigationBar";
import Services from "./Services";
import TopComponent from "./TopComponent";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <NavigationBar />
      <Services />
      <BrandedStoreSection />
      {/* <ClientsSection /> */}
      <FacilityManagementSection />
      <ContactUs />
    </div>
  );
}
