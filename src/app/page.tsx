
import Navbar from "./components/Navbar";
import Homepage from "./(route group)/home/page";
import Services from "./(route group)/service/page";
import AppointmentForm from "./(route group)/appointment/page";
import OurDoctors from "./(route group)/doctors/page";
import NewsSlider from "./(route group)/news/page";
import Contact from "./contact/page";
import Footer from "./footer/page";

export default function Home() {
  return (
    <>
<Navbar/>
<Homepage/>
<Services/>
<AppointmentForm/>
<OurDoctors/>
<NewsSlider/>
<Contact/>
<Footer/>
</>
  );
}
