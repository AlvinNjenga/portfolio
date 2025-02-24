import SectionHeader from "../components/SectionHeader";
import ProfilePic from '../assets/avatar.png';
import '../index.css';

const About = () => {
  return (
    <section id="about" className="py-24">
        <SectionHeader title="About Me" number="01" />
        <div className="inner grid grid-cols-[3fr_2fr] gap-[50px]">
            <div id="about-me-text" className="font-sans text-lg text-textColor">
                <p className="mb-4">Hello! My name is Alvin and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>
                <p className="mb-4">Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</p>
                <p className="mb-4">Here are a few technologies I’ve been working with recently:</p>

                <ul className="skill-list grid grid-cols-[repeat(2,minmax(120px,200px))] gap-2.5 text-sm font-dm-mono-regular">
                  <li>Javascript (ES6+)</li>
                  <li>React</li>
                  <li>Node.js</li>
                  <li>Typescript</li>
                  <li>.NET</li>
                  <li>GCP</li>
                </ul>
            </div>
            <div className="max-w-[300px] about-me-picture">
                <div className="profile-wrapper relative bg-[#5acfbd] rounded-lg" >
                    <img 
                      src={ProfilePic}
                      alt="Alvin Njenga"
                      className="profile-pic object-cover w-full h-full rounded-lg"
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About;