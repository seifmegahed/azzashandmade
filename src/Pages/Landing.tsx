import photo1 from "../assets/AzzaPhoto1.jpg";
import NavBar from "../components/Navbar";

const titleText = "Unique Jewelry & Accessories Crafted with Love";
const subTitleText =
  "From delicate earrings to statement necklaces, find the perfect piece to express your individuality. Our jewelry and accessories are designed for the modern woman who appreciates quality, craftsmanship, and a touch of Egyptian flair.";

function Hero() {
  return (
    <div className="w-full flex-grow grid md:grid-cols-5 grid-cols-1">
      <div className="w-full h-full flex md:col-span-3 flex-col items-center justify-center p-5">
        <p className="text-4xl max-w-[500px] font-thin">{titleText}</p>
        <p className="text-xl max-w-[500px] font-thin">{subTitleText}</p>
      </div>
      <div className="w-full h-full flex flex-col md:col-span-2 items-center justify-center p-5">
        <img src={photo1} alt="Azza" className="max-h-[400px]" />
      </div>
    </div>
  );
}
export default function Landing() { 
  return (
    <div className="w-full md:h-screen h-fit bg-pink-50 flex flex-col">
      <NavBar />
      <Hero />
    </div>
  );
}
