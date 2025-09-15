
import CTASection from "../../components/CTASection";
import EmpoweringUrbanMobility from "../../components/EmpoweringUrbanMobility";
import Foooter from "../../components/foooter";

import Navbar from "../../components/Navbar";
import OurSolutionsSection from "../../components/OurSolutionsSection";
import StatsSection from "../../components/StatsSection";
import Topbar from "../../components/Topbar";
import WhyChooseSection from "../../components/WhyChooseSection";

// src/pages/Home.jsx
export default function Home() {
  return (
   <div>
    <Topbar />
     <Navbar />
     <EmpoweringUrbanMobility/>
     <StatsSection/>
     <WhyChooseSection/> 
     <OurSolutionsSection/> 
     <CTASection/>
 
     <Foooter />
   </div>

  )
}
