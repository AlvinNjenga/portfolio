import Hero from "./sections/Hero";
import EmailLink from "./components/EmailLink";
import SocialLink from "./components/SocialLink";
import Header from "./components/Header";
import About from "./sections/About";
import Experience from "./sections/Experience";
import FeaturedProjects from "./sections/FeaturedProjects";
import Contact from "./sections/Contact";

const HomePage = () => {
  return (
    <>
      <Header />
      <EmailLink />
      <SocialLink />
      <main className="px-8 sm:px-12 md:px-24 lg:px-40 max-w-[1600px]">
        <Hero />
        <About />
        <Experience />
        <FeaturedProjects />
        <Contact />
      </main>
    </>
  )
}

export default HomePage;