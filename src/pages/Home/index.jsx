import AboutSection from "../../components/about";
import SessaoApp from "../../components/Appss";
import PostsRecentes from "../../components/blog";
import Footer from "../../components/footer";
import HeroSlider from "../../components/Heroslider";
import SejaMembro from "../../components/Membro";
import Navbar from "../../components/Navbar";
// import Parceiros from "../../components/parceiros";
import SessaoSeguranca from "../../components/sercurity";
import Servicos from "../../components/Service";
import Topbar from "../../components/Topbar";

// src/pages/Home.jsx
export default function Home() {
  return (
   <div>
    <Topbar />
     <Navbar />
     <HeroSlider />
     <AboutSection />
     <Servicos />
     <SessaoSeguranca />
     <SessaoApp />
<SejaMembro />
     <PostsRecentes />
     {/* <Parceiros /> */}
     <Footer />
   </div>

  )
}
