import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

const Social = () => {
  const socialConfig = [
    { link:"https://www.linkedin.com/in/alvin-n-retallack-a635869a/", icon: IconBrandLinkedin },
    { link:"https://github.com/AlvinNjenga", icon: IconBrandGithub }
  ];

  const socialLinks = socialConfig.map((socialLink, index) => (
    <a key={index} target="_blank" href={socialLink.link} className="text-sm hover:text-primaryColor hover:translate-x-1 rotate-90 transition-transform duration-300">
      <socialLink.icon className="rotate90" />
    </a>
  ))

  return (
    <div className="flex items-center font-dm-mono-regular fixed bottom-20 -left-[4.5rem] text-textColor -rotate-90 gap-6 bg-bgColor">
        <hr className="border-[2px] w-40 rounded-full bg-textColor" />
        {socialLinks}
    </div>
  )
}

export default Social;

// hover:text-primaryColor hover:-translate-x-2 transition-transform duration-300
// href="https://www.linkedin.com/in/alvin-n-retallack-a635869a/"