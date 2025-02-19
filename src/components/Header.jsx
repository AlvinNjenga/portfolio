import { IconHexagonLetterA } from "@tabler/icons-react";
import Sidebar from "./Sidebar";
import { navLinks } from "../constants/links";



const Header = () => {
  return (
    <nav className="flex h-[100px] bg-bgColor font-dm-mono-regular px-10 text-textColor justify-between items-center">
        <IconHexagonLetterA size={48} color="#64FFDA" stroke={1} />
        <div className="md:flex gap-8 text-sm hidden">
          {navLinks()}
        </div>
        <Sidebar />
    </nav>
  )
}

export default Header;