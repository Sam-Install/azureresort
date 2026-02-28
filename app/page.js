import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Abouts from "./components/Abouts";
import Why from "./components/Why";
import Preview from "./components/Preview";
import Offers from "./components/Offers";
import Local from "./components/Local";
import Map from "./components/Map";
import Footer from "./components/Footer";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
 <>
 
 <Navbar/>
 <Hero/>
 <Abouts/>
 <Why/>
<Preview/>
<Offers/>
<Local/>
<Map/>
<Footer/>


   <a
        href="https://wa.me/254753879163?text=Hello%20can%20I%20help%20you"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition"
      >
        <FaWhatsapp size={28} />
      </a>
 
 </>
  );
}
