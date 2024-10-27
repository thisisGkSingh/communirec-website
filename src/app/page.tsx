import ClientsSection from "./ClientsSection";
import ContactUs from "./ContactUs";
import NavigationBar from "./NavigationBar";
import Services from "./Services";
import TopComponent from "./TopComponent";

export default function Home() {
  return (
    <div>
      <TopComponent />
      <NavigationBar />
      <Services />
      <ClientsSection />
      <ContactUs />
    </div>
  );
}
