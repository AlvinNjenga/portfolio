import SectionHeader from "../components/SectionHeader";
import PromptApp from '../assets/prompt-app.jpg';
import InventoryManagementApp from '../assets/inventory-management-app.jpg';
import "../index.css";
import FadeInSection from "../components/FadeInSection";

const FeaturedProjects = () => {
    return (
        <section id="projects">
            <SectionHeader title="Some Projects" number="03" />
            <div className="featured-projects">

                <FadeInSection delay={200}>
                    <div className="featured-project relative grid grid-cols-[repeat(12,1fr)] mb-24">
                        <div className="featured-project-image flex col-[1/-1] md:col-[1/8] row-[1/-1]">
                            <div className="featured-project-image-wrapper flex max-w-[700px]">
                                <img src={PromptApp} width="700px" height="auto" alt="Prompt App Image" />
                            </div>
                        </div>
                        <div className="featured-project-content  bg-[rgba(17,34,64,0.9)] z-10 p-10 row-[1/-1] md:p-0 md:text-right col-[1/-1] md:col-[6/-1] md:z-[1] md:bg-transparent ">
                            <p className="py-2.5 text-sm font-dm-mono-regular text-primaryColor">Featured Project</p>
                            <h3 className="text-2xl font-semibold mb-5 text-[#CCD6F6] relative z-[2]">AI Prompt App</h3>
                            <div className="p-0 z-[2] relative text-textColor leading-[1.2] md:bg-[#112240] md:p-6">
                                <p>An open-source AI prompting tool for the modern world, enabling users to discover, create and share creative prompts. Built with <span className="text-primaryColor">Next.js 14</span> with <span className="text-primaryColor">NextAuth</span> for Google authentication, prompt sharing between users and profile management. Uses <span className="text-primaryColor">TailwindCSS</span> for easier modern styling.</p>
                            </div>
                            <ul className="project-tech-stack flex relative z-[2] mt-6 mb-2.5 gap-2.5 text-sm font-dm-mono-regular text-primaryColor md:justify-end">
                                <li>Next.js</li>
                                <li>Tailwind</li>
                                <li>NextAuth</li>
                                <li>MongoDB</li>
                            </ul>
                        </div>
                    </div>
                </FadeInSection>

                <FadeInSection delay={200}>
                    <div className="featured-project relative grid grid-cols-[repeat(12,1fr)]">
                        <div className="featured-project-image flex col-[1/-1] row-[1/-1]  md:col-[6/-1] ">
                            <div className="featured-project-image-wrapper flex max-w-[700px]">
                                <img src={InventoryManagementApp} width="700px" height="auto" alt="Inventory Management App Image" />
                            </div>
                        </div>
                        <div className="featured-project-content relative z-[2] bg-[rgba(17,34,64,0.90)] col-[1/-1] row-[1/-1] p-10 md:p-0 md:col-[1/8] md:bg-transparent">
                            <p className="py-2.5 text-sm font-dm-mono-regular text-primaryColor">Featured Project</p>
                            <h3 className="text-3xl font-semibold mb-5 text-[#CCD6F6]">Bespoke Inventory Management App</h3>
                            <div className=" text-textColor p-0 z-[2] relative leading-[1.2] md:bg-[#112240] md:p-6">
                                <p>A custom inventory mangement system that featured unique <span className="text-primaryColor">reporting and analytics</span> tools. Developed in Next.js, hosted in <span className="text-primaryColor">Amazon Web Services</span>, using <span className="text-primaryColor">Prisma</span> as the ORM to facilitate database interactions.</p>
                            </div>
                            <ul className="project-tech-stack flex flex-wrap relative z-[2] mt-6 mb-2.5 gap-2.5 text-sm font-dm-mono-regular text-primaryColor">
                                <li>Next.js</li>
                                <li>Redux</li>
                                <li>Node.js</li>
                                <li>Prisma</li>
                                <li>AWS</li>
                            </ul>
                        </div>
                    </div>
                </FadeInSection>
            </div>
        </section>
    )
}

export default FeaturedProjects;