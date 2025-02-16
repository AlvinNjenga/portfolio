const Header = () => {
  return (
    <nav className="flex h-[10vh] bg-bgColor text-primaryColor justify-between">
        <h1>My Portfolio</h1>
        <div className="text-textColor" >
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
    </nav>
  )
}

export default Header;