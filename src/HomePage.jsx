import { useMediaQuery } from "@mantine/hooks";
import Hero from "./sections/Hero";
import EmailLink from "./components/EmailLink";
import SocialLink from "./components/SocialLink";
import Header from "./components/Header";
import About from "./sections/About";
import Experience from "./sections/Experience";
import FeaturedProjects from "./sections/FeaturedProjects";
import Contact from "./sections/Contact";
import FadeInSection from "./components/FadeInSection";
import Container from "./components/Container";

const HomePage = () => {
  const isMobile = useMediaQuery('(max-width: 640px)');

  return (
    <>
      <Header />
      <EmailLink />
      <SocialLink />
      <Container>
        <Hero />

        {/* Prevent early fade-in on mobile */}
        <FadeInSection delay={isMobile ? 600 : 0}>
          <About />
        </FadeInSection>

        <FadeInSection>
          <Experience />
        </FadeInSection>

        <FadeInSection>
          <FeaturedProjects />
        </FadeInSection>
        <Contact />
      </Container>
    </>
  )
}

export default HomePage;