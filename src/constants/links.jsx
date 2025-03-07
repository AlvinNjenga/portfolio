import FadeInSection from "../components/FadeInSection"

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

const navLinks = (col, callback) => {
  const triggerCallback = () => {
    if (callback) callback()
  }

  return links.map((link, index) => (
    <FadeInSection key={index} direction="down" delay={index * 200}>
      <a
        href={link.href}
        onClick={() => triggerCallback()}
        className={`${col ? 'flex flex-col items-center' : ''} hover:text-primaryColor transition-all duration-300`}
        key={index}
      >
        <span className="text-primaryColor">0{index + 1}. </span>
        <span className="cursor-pointer">{link.label}</span>
      </a>
    </FadeInSection>
  ))
}

export { navLinks };