import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ExecutiveHeads from "@/components/ExecutiveHeads";
import Clubs from "@/components/Clubs";
import Footer from "@/components/Footer";
import NoticePopup from "@/components/NoticePopup";
import EventsImage from "@/assets/events.webp";
import NoticeImage from "@/assets/notice.png";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>NSS Club | National School of Sciences</title>
        <meta
          name="description"
          content="Official website of the NSS Club at the National School of Sciences. Get the latest updates on the events, gallery, and clubs."
        />
      </Helmet>
      <NoticePopup imageUrl={NoticeImage} eventUrl="/events/techfest" />
      <Navbar />
      <Hero />
      <About />
      <ExecutiveHeads />
      <Clubs />
      <Footer />
    </div>
  );
};

export default Index;
