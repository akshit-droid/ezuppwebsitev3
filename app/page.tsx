import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Solutions } from "@/components/sections/Solutions";
import { Industries } from "@/components/sections/Industries";
import { Stats } from "@/components/sections/Stats";
import { About } from "@/components/sections/About";
import { Integrations } from "@/components/sections/Integrations";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { RevealProvider } from "@/components/ui/Reveal";
import { ChatWidget } from "@/components/chat/ChatWidget";

export default function Home() {
  return (
    <RevealProvider>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Solutions />
        <Industries />
        <Stats />
        <About />
        <Integrations />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </RevealProvider>
  );
}
