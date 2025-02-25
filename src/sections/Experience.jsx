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
      <Tabs.List
        className="text-sm font-dm-mono-regular max-h-[102px] max-w-[322px] !flex-nowrap"
      >
        <Tabs.Tab value="freelance">Freelance</Tabs.Tab>
        <Tabs.Tab value="merkle">Merkle</Tabs.Tab>
        <Tabs.Tab value="hen">Hen Creative</Tabs.Tab>
      </Tabs.List>
      <div className="text-lg w-full ml-2.5 p-1.5 sm:pt-3.5">
        <Tabs.Panel value="freelance">
          <div className="experience-tab-content">
            <h3 className="font-semibold text-[#ccd6f6]">Freelance &nbsp;
              <span className="text-primaryColor">Full Stack Developer</span>
            </h3>
            <p className="mb-6 text-sm font-dm-mono-regular">August 2023 - Current</p>
            <ul className="text-[17px] font-sans">
              <li>Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more</li>
              <li>Bullet points about this job.</li>
              <li>Bullet points about this job.</li>
              <li>Bullet points about this job.</li>
            </ul>
          </div>
        </Tabs.Panel>
        <Tabs.Panel value="merkle">
          <div className="experience-tab-content">
            <h3 className="font-semibold text-[#ccd6f6]">Software Developer &nbsp;
              <span className="text-primaryColor">@ Merkle</span>
            </h3>
            <p  className="mb-6 text-sm font-dm-mono-regular">April 2019 - June 2023</p>
            <ul>
              <li>Bullet points about this job.</li>
              <li>Bullet points about this job.</li>
              <li>Bullet points about this job.</li>
              <li>Bullet points about this job.</li>
            </ul>
          </div>
        </Tabs.Panel>
        <Tabs.Panel value="hen">
          <div className="experience-tab-content">
            <h3 className="font-semibold text-[#ccd6f6]">Intern &nbsp;
              <span className="text-primaryColor">@ Hen Creative</span>
            </h3>
            <p  className="mb-6 text-sm font-dm-mono-regular">Feb 2018 - March 2019</p>
            <ul className="text-textColor text-lg font-sans">
              <li>Bullet points about this job.</li>
              <li>Bullet points about this job.</li>
              <li>Bullet points about this job.</li>
              <li>Bullet points about this job.</li>
            </ul>
          </div>
        </Tabs.Panel>
      </div>
    </Tabs>
  );
}

export default Experience;