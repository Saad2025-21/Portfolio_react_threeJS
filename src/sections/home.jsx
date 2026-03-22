import HeroText from "../components/Herotxt.jsx";
import Astro from "../components/astronaut.jsx";
import Bg from "../components/bg.jsx";

const Home = () => {
  return (
    <section className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space bg-#0F121A" id="home">
      <HeroText />
       <Astro/> 
       <Bg/>
       <div className="h-0.75 w-2.5 absolute top-[2%] left-[8%] rounded-sm bg-[#e7d7b1] view sm:animate-design max-sm:animate-ln"></div>
    </section>
  );
};


export default Home;