import AboutUs from "./components/AboutUs";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import Clients from "./components/Clients";
import TestimonialCarousel from "./components/Testimonials";
// import Navbar from "./components/NavTest";
import CaseStudies from "./components/CaseStudies";
import Procedure from "./components/Procedure";
import DevApproach from "./components/DevApproach";
import TechStack from "./components/TechStack";
// import FeaturedResources from "./components/FeaturedResources";
import DevProcess from "./components/DevProcess";

config.autoAddCss = false; // Prevent Font Awesome from adding its CSS automatically

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <NavBar />
      <Hero />
      <Services />
      <AboutUs />
      <Clients />
      <TestimonialCarousel />
      <CaseStudies />
      <Procedure />
      <DevApproach />
      <TechStack />
      <DevProcess />
      {/* <FeaturedResources /> */}
      <div className="wrap1 h-96 border py-14 pb-20"></div>
    </>
  );
}
