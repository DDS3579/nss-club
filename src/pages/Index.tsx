import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ExecutiveHeads from "@/components/ExecutiveHeads";
import Clubs from "@/components/Clubs";
import Footer from "@/components/Footer";
import NoticePopup from "@/components/NoticePopup";
import EventsImage from "@/assets/events.webp";
import NoticeImage from "@/assets/notice.png"

const Index = () => {
  return (
    <div className="min-h-screen">
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
