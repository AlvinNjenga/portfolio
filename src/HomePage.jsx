import Hero from "./sections/Hero";
import Email from "./components/Email";
import Header from "./components/Header";
import Social from "./components/Social";
import About from "./sections/About";
import WorkExperience from "./sections/WorkExperience";

const HomePage = () => {
  return (
    <>
      <Header />
      <main className="px-24 xl:px-40 max-w-[1600px]">
        <Hero />
        <About />
        <WorkExperience />
      </main>
      <Email />
      <Social />
    </>
  )
}

export default HomePage;