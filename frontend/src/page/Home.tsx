import BlogSection from "../components/home/BlogSection";
import CategoryIcons from "../components/home/CategoryIcons";
import HomeProducts from "../components/home/HomeProducts";
import HomeSlider from "../components/home/HomeSlider";
import TestimonialSection from "../components/home/TestimonialSection";


const Home = () => {
  return (
    <div>
       <HomeSlider/>
       <CategoryIcons/>
       <HomeProducts/>
       <TestimonialSection/>
       <BlogSection/>
       
    </div>
  );
};

export default Home;