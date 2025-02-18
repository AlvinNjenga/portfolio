import { IconHexagonLetterA } from "@tabler/icons-react";
import Sidebar from "./Sidebar";

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contant' },
]

const Header = () => {
  return (
    <nav className="flex h-[100px] bg-bgColor font-dm-mono-regular px-10 text-textColor justify-between items-center">
        <IconHexagonLetterA size={48} color="#64FFDA" stroke={1} />
        <div className="md:flex gap-8 text-sm hidden">
          {links.map((link, index) => (
            <a key={index} href={link.href} className="hover:text-primaryColor">{link.label}</a>
          ))}
        </div>
        <Sidebar />
    </nav>
  )
}

export default Header;