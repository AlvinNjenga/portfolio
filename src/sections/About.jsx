import SectionHeader from "../components/SectionHeader";
import ProfilePic from '../assets/avatar.jpg';
import '../index.css';

const About = () => {
  return (
    <section id="about" className="py-24">
        <SectionHeader title="About Me" number="01" />
        <div className="inner block md:grid grid-cols-[3fr_2fr] gap-[50px]">
            <div id="about-me-text" className="font-sans text-lg text-textColor">
                <p className="mb-4">Hello! My name is Alvin and I enjoy creating things that come alive through code. This interest emerged almost a decade ago when I decided to <span className="text-primaryColor">develop my own video game</span>; a 2D scroller in the vein of Rayman. While the game never saw the light of day - for good reason, trust me - I&apos;d caught the software bug and I&apos;ve never looked back.</p>
                <p className="mb-4">Fast-forward to today, and I’ve had the privilege of working as <span className="text-primaryColor">a Wordpress developer</span>, at a <span className="text-primaryColor">digital marketing start-up</span> (that later became a part of a Japanese multinational) and independently; <span className="text-primaryColor">freelancing for a variety of clients</span> with even more varied requirements and challenges.</p>
                <p className="mb-4">Here are a few technologies I’ve been working with recently:</p>

                <ul className="skill-list grid grid-cols-[repeat(2,minmax(120px,200px))] gap-2.5 text-sm font-dm-mono-regular">
                  <li>Javascript (ES6+)</li>
                  <li>React</li>
                  <li>Node.js</li>
                  <li>Next.js</li>
                  <li>.NET (C#)</li>
                  <li>GCP</li>
                  <li>Docker</li>
                  <li>AWS</li>
                </ul>
            </div>
            <div className="max-w-[300px] mt-6 mx-auto md:mt-0 about-me-picture">
                <div className="profile-wrapper  relative bg-[#5acfbd] rounded-lg" >
                    <img 
                      src={ProfilePic}
                      alt="Alvin Njenga"
                      className="profile-pic object-cover w-full h-full rounded-lg transition-all duration-600"
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About;