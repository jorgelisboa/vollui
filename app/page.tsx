import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Method } from "@/components/method";
import { Partners } from "@/components/partners";
import { Services } from "@/components/services";
import { Technologies } from "@/components/technologies";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Technologies />
        <About />
        <Method />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
