import Hero from "./sections/Hero";
import Email from "./components/Email";
import Header from "./components/Header";
import Social from "./components/Social";
import About from "./sections/About";
import WorkExperience from "./sections/WorkExperience";
import FeaturedProjects from "./sections/FeaturedProjects";
import Contact from "./sections/Contact";

const HomePage = () => {
  return (
    <>
      <Header />
      <main className="px-24 lg:px-40 max-w-[1600px]">
        <Hero />
        <About />
        <WorkExperience />
        <FeaturedProjects />
        <Contact />
      </main>
      <Email />
      <Social />
    </>
  )
}

export default HomePage;