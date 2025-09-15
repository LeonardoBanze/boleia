import CoreSafetyFeatures from "../../components/CoreSafetyFeatures";
import Foooter from "../../components/foooter";
import Navbar from "../../components/Navbar";
import Topbar from "../../components/Topbar";
import bannerImg from "../../assets/entrega.png"


// src/pages/Safety.jsx
export default function Safety() {
  return (
   <div>
    <Topbar />
     <Navbar />
          <div className="relative h-64 md:h-80 w-full">
          <img
           src={bannerImg}
            alt="Banner Serviços"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center">
            <h1 className="text-white text-4xl md:text-5xl font-bold">Safety</h1>
          </div>
        </div>
     <CoreSafetyFeatures/>
    
 
     <Foooter />
   </div>

  )
}
