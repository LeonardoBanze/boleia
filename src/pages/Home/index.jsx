import AboutSection from "../../components/about";
import SessaoApp from "../../components/Appss";
import PostsRecentes from "../../components/blog";
import CTASection from "../../components/CTASection";
import Footer from "../../components/footer";
import HeroSlider from "../../components/Heroslider";
import SejaMembro from "../../components/Membro";
import Navbar from "../../components/Navbar";
import OurSolutionsSection from "../../components/OurSolutionsSection";
// import Parceiros from "../../components/parceiros";
import SessaoSeguranca from "../../components/sercurity";
import Servicos from "../../components/Service";
import StatsSection from "../../components/StatsSection";
import Topbar from "../../components/Topbar";
import WhyChooseSection from "../../components/WhyChooseSection";

// src/pages/Home.jsx
export default function Home() {
  return (
   <div>
    <Topbar />
     <Navbar />
     <HeroSlider />
     <StatsSection/>
     <WhyChooseSection/> 
     <OurSolutionsSection/> 
     <CTASection/>
 
     <Footer />
   </div>

  )
}
