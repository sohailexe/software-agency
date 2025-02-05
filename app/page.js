import AboutUs from "./components/AboutUs";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; // Prevent Font Awesome from adding its CSS automatically

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Services />
      <AboutUs />
    </>
  );
}
