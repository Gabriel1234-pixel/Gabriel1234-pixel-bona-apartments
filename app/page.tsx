import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Apartments from "@/components/Apartments";
import Pricing from "@/components/Pricing";
import Amenities from "@/components/Amenities";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/FAQ";
import BookingForm from "@/components/BookingForm";
import Location from "@/components/location";
import Contact from "@/components/contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Gallery />
      <Apartments />
      <Pricing />
      <Amenities />
      <Testimonials />
      <FAQ />
      <BookingForm />
      <Location />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}