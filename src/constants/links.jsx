const links = [
    { href: '#about', label: 'About' },
    { href: '#work', label: 'Work' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ]
  
  const navLinks = (col) => links.map((link, index) => (
              <a className={`${col ? 'flex flex-col items-center': ''} hover:text-primaryColor`} key={index} >
                <span className="text-primaryColor">0{index + 1}. </span>
                {link.label}
              </a>
  ))

  export {navLinks};