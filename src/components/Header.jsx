import { IconHexagonLetterA } from "@tabler/icons-react";
import Sidebar from "./Sidebar";
import { navLinks } from "../constants/links";



const Header = () => {
  return (
    <nav className="flex h-[100px] bg-bgColor font-dm-mono-regular px-10 text-textColor justify-between items-center">
      <div className="logo-wrapper relative"> 
        <IconHexagonLetterA className="logo z-[3] hover:-translate-y-1.5" size={48} stroke={1} />
      </div>
        <div className="md:flex gap-8 text-sm hidden">
          {navLinks()}
        </div>
        <Sidebar />
    </nav>
  )
}

export default Header;