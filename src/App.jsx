import Brainstorming from "./components/Brainstorming";
import ClientReviews from "./components/ClientReviews";
import ConnectSection from "./components/ConnectSection";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Prospects from "./components/Prospects";
import TrustedSection from "./components/TrustedSection";
import WaysWeWork from "./components/WaysWeWork";
import WorkTogether from "./components/WorkTogether";

function App() {
  return (
    <>
    <Header/>
    <Hero/>
    <TrustedSection/>
    <Feature/>
    <WorkTogether/>
    <ConnectSection/>
    <WaysWeWork/>
    <Brainstorming/>
    <Prospects/>
    <ClientReviews/>
    <Footer/>
    </>
  );
}

export default App;
