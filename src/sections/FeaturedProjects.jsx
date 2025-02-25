import SectionHeader from "../components/SectionHeader";
import AppOneImg from '../assets/demo-app-one.png';
import AppTwoImg from '../assets/demo-app-two.png';
import "../index.css";
// import FadeInSection from "../components/FadeInSection";


// TODO: See if I can get the FadeInSection component to work


const FeaturedProjects = () => {
    return (
        <section id="projects">
            <SectionHeader title="Some Things I've Built" number="03" />
            <div className="featured-projects">

                    <div className="featured-project relative grid grid-cols-[repeat(12,1fr)] mb-24">
                        <div className="featured-project-image flex col-[1/-1] md:col-[1/8] row-[1/-1]">
                            <div className="featured-project-image-wrapper flex max-w-[700px]">
                                <img src={AppOneImg} width="700px" height="auto" alt="Demo App One" />
                            </div>
                        </div>
                        <div className="featured-project-content  bg-[rgba(17,34,64,0.9)] z-10 p-10 row-[1/-1] md:p-0 md:text-right col-[1/-1] md:col-[6/-1] md:z-[1] md:bg-transparent ">
                            <p className="py-2.5 text-sm font-dm-mono-regular text-primaryColor">Featured Project</p>
                            <h3 className="text-2xl font-semibold mb-5 text-[#CCD6F6] relative z-[2]">VS Code Extension</h3>
                            <div className="p-0 z-[2] relative text-textColor leading-[1.2] md:bg-[#112240] md:p-6">
                                <p>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                            </div>
                            <ul className="project-tech-stack flex relative z-[2] mt-6 mb-2.5 gap-2.5 text-sm font-dm-mono-regular text-primaryColor md:justify-end">
                                <li>React</li>
                                <li>TypeScript</li>
                                <li>JavaScript</li>
                                <li>HTML</li>
                            </ul>
                        </div>
                    </div>

                    <div className="featured-project relative grid grid-cols-[repeat(12,1fr)]">
                        <div className="featured-project-image flex col-[1/-1] row-[1/-1]  md:col-[6/-1] ">
                            <div className="featured-project-image-wrapper flex max-w-[700px]">
                                <img src={AppTwoImg} width="700px" height="auto" alt="Demo App One" />
                            </div>
                        </div>
                        <div className="featured-project-content relative z-[2] bg-[rgba(17,34,64,0.90)] col-[1/-1] row-[1/-1] p-10 md:p-0 md:col-[1/8] md:bg-transparent">
                            <p className="py-2.5 text-sm font-dm-mono-regular text-primaryColor">Featured Project</p>
                            <h3 className="text-3xl font-semibold mb-5 text-[#CCD6F6]">Spotify App</h3>
                            <div className=" text-textColor p-0 z-[2] relative leading-[1.2] md:bg-[#112240] md:p-6">
                                <p>A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.</p>
                            </div>
                            <ul className="project-tech-stack flex flex-wrap relative z-[2] mt-6 mb-2.5 gap-2.5 text-sm font-dm-mono-regular text-primaryColor">
                                <li>React</li>
                                <li>TailwindCSS</li>
                                <li>Express</li>
                                <li>Docker</li>
                            </ul>
                        </div>
                    </div>

            </div>
        </section>
    )
}

export default FeaturedProjects;