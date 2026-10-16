import Portfolio from "../components/mainPage/Portfolio";
import Team from "../components/mainPage/Team";
import Navbar from "../components/Navbar";
import Service from "../components/mainPage/Service";
import Contact from "../components/mainPage/Contact";

function MainPage() {
  return (
    <>
      <Navbar />
      <Service />
      <Portfolio />
      <Team />
      <Contact />
    </>
  );
}
export default MainPage;
