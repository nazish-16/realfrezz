import Homepage from "@/components/Homepage";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Tech from "@/components/Tech";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
      <div className="bg-[#13243c] h-screen">
        <Navbar />
        <Homepage/>
        <About/>
        <Tech/>
        <Testimonials/>
        <Footer/>
      </div>    
  );
}
