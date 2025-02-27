import SectionHeader from "../components/SectionHeader";
import { Tabs } from '@mantine/core';
import { useMediaQuery } from "@mantine/hooks";
import '../index.css';


const Experience = () => {
  return (
    <section id="experience" className="!max-w-[700px]">
      <SectionHeader title="Where I've Worked" number="02" />
      <WorkTabs />
    </section>
  )
}



const WorkTabs = () => {
  const isMobile = useMediaQuery('(max-width: 640px)');
  const orientation = isMobile ? 'horizontal' : 'vertical';

  return (
    <Tabs
      defaultValue="freelance"
      orientation={orientation}
      className="text-textColor text-sm"
    >
      <Tabs.List className="text-sm font-dm-mono-regular max-h-[108px] max-w-[440px] !flex-nowrap">
        <Tabs.Tab value="freelance">Freelance</Tabs.Tab>
        <Tabs.Tab value="merkle">Merkle (Dentsu)</Tabs.Tab>
        <Tabs.Tab value="hen">Hen Creative</Tabs.Tab>
      </Tabs.List>
      <div className="text-lg w-full ml-2.5 p-1.5">
        <Tabs.Panel value="freelance">
          <div className="experience-tab-content">
            <h3 className="font-semibold text-[#ccd6f6]">Freelance <span className="text-primaryColor">Full Stack Developer</span></h3>
            <p className="mb-6 text-sm font-dm-mono-regular">October 2023 - Current</p>
            <ul className="text-[16px] font-sans leading-5">
              <li><span className="text-primaryColor">Freelancing: </span>Stepping into the role of an independent contractor, I developed skills beyond the technical aspects of my work with a focus on project planning, successful on-time delivery and client satisfaction. </li>
              <li><span className="text-primaryColor">Project management: </span> Ensuring project deadlines are met, a continuous feedback loop at important milestones and  collaboration with designers/developers. </li>
              <li><span className="text-primaryColor">Managing clients: </span>Handling client consultations, providing technical advice on their goals and vision, defining project parameters and expectations and clear communication.</li>
              <li><span className="text-primaryColor">Continuous technical development: </span>Investing in technical learning to stay up-to-date on developments in best practices and new methodology using online sources and certifications. </li>
            </ul>
          </div>
        </Tabs.Panel>
        <Tabs.Panel value="merkle">
          <div className="experience-tab-content">
            <h3 className="font-semibold text-[#ccd6f6]">Software Developer &nbsp;
              <span className="text-primaryColor">@ Merkle (Dentsu)</span>
            </h3>
            <p  className="mb-6 text-sm font-dm-mono-regular">April 2019 - June 2023</p>
            
            <ul className="text-[16px] font-sans leading-5">
              <li><span className="text-primaryColor">Core role: </span>Worked on an in-house reporting and QA application designed to provide digital marketers with data-driven warnings and suggestions for managing accounts using user-defined criteria. Played an integral role in development of this greenfield project - contributing to planning and design decisions</li>
              <li><span className="text-primaryColor">Enterprise development: </span> Experience building production quality software, working closely with product managers and UI/UX designers to implement features following best practices and company guidelines.</li>
              <li><span className="text-primaryColor">Cloud computing: </span>Extensively used Google Cloud Platform for building and deploying the application image using Docker, Pub/Sub for events, hosted SQL and noSQL options, Cloud Tasks and more. </li>
              <li><span className="text-primaryColor">Testing: </span>Spearheaded React unit tests using Cypress and learned how to write XUnit tests with Moq for our .NET microservices. Introduced NodeJS testing using Jest.</li>
            </ul>
          </div>
        </Tabs.Panel>
        <Tabs.Panel value="hen">
          <div className="experience-tab-content">
            <h3 className="font-semibold text-[#ccd6f6]">Intern &nbsp;
              <span className="text-primaryColor">@ Hen Creative</span>
            </h3>
            <p  className="mb-6 text-sm font-dm-mono-regular">June 2017 - Dec 2018</p>
            <ul className="text-[16px] font-sans leading-5">
              <li><span className="text-primaryColor">Wordpress developer: </span>Worked for a web design agency as a WordPress developer, primarily dealing with requests for custom themes and e-commerce websites for personal and commercial use. </li>
              <li><span className="text-primaryColor">Custom themes: </span>Using PSD or images from clients, and building fully functioning custom websites using HTML, CSS and Javascript (jQuery).</li>
              <li><span className="text-primaryColor">E-commerce: </span> Experience using Woo-commerce to build professional e-commerce websites for clients, as well as extending plguins for unique use cases.</li>
              <li><span className="text-primaryColor">Client on-boarding & management: </span>Explaining to non-technical clients how to navigate the WP admin dashboard and features, translating client requests into added features or pages and working towards strict deadlines.</li>
            </ul>
          </div>
        </Tabs.Panel>
      </div>
    </Tabs>
  );
}

export default Experience;