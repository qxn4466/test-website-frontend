import OurClients from "../components/our-clients";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Our Clients",
};

export default function Page() {
  return (
  
      <div>
        <TopBar />
        <Navbar />
        <OurClients />;
        </div>
        )
}
