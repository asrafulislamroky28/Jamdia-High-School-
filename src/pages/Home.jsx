import HeroSection from '../components/HeroSection.jsx';
import PrinciplesSaying from '../components/PrinciplesSaying.jsx';
import PresidentSpeech from '../components/PresidentSpeech.jsx';
 import Administration  from  "../pages/Administration.jsx";
 import BannerCarousel from "../components/BannerCarousel";
const Home = () => {

  return (
    <div>
      <HeroSection />
      <PresidentSpeech/>
      <PrinciplesSaying/> 
      <Administration/>
      <BannerCarousel /> 
   
      </div>
  );
};

export default Home;
