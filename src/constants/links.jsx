const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

// TODO: add navbar-link and isVisible to the a tag with a delay effect
// for each one, where the delay is based on the index of the link for a 
// staggered effect

const navLinks = (col, callback) => {
  const triggerCallback = () => {
    if (callback) callback()
  }

  return links.map((link, index) => (
    <a
      href={link.href}
      onClick={() => triggerCallback()}
      className={`${col ? 'flex flex-col items-center' : ''} hover:text-primaryColor transition-all duration-300`}
      key={index}
    >
      <span className="text-primaryColor">0{index + 1}. </span>
      <span className="cursor-pointer">{link.label}</span>
    </a>
  ))
}

export { navLinks };