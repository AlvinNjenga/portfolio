import SectionHeader from "../components/SectionHeader";

const About = () => {
  return (
    <section id="about" className="py-24">
        <SectionHeader title="About Me" number="01" />
        <div className="inner flex">
            <div id="about-me-text" className="flex-3">
                <p>Talk about yourself here.</p>
                <p>Talk about yourself here.</p>
                <p>Talk about yourself here.</p>
                {/* TODO: Section describing skills */}
            </div>
            <div id="profile-pic" className="flex-2 min-w-[300px]">
                Picture
            </div>
        </div>
    </section>
  )
}

export default About;