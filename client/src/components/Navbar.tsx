import {Link, NavLink} from "react-router-dom";
import {MenuIcon, SearchIcon, XIcon} from "lucide-react";
import {NavItems} from "../constants";
import type {NavItemInterface} from "../types";
import {useState} from "react";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const navlinkHandler = (): void => {
        scrollTo(0,0);
        setIsOpen(false);
    }

    return (
        <div className="fixed top-0 flex justify-between items-center w-full px-6 py-5 md:px-16 lg:px-36">
            <Link to="/">
                <img src="/assets/images/logo.png" alt="Logo" className="w-32 h-auto" />
            </Link>
            <div className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium max-md:text-lg flex flex-col md:flex-row items-center max-md:justify-center min-md:px-8 gap-8 py-3 max-md:h-screen min-md:rounded-full backdrop-blur bg-black/70 md:bg-white/10 md:border border-gray-300/20 overflow-hidden transition-[width] duration-300 ${isOpen ? 'max-md:w-full' : 'max-md:w-0'}`}>

                <XIcon onClick={() => setIsOpen((prev:boolean): boolean => !prev)} className="md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer" />

                {NavItems.map((item: NavItemInterface)  => (
                    <NavLink className={({isActive}) => isActive ? 'text-primary-dull' : ''} onClick={navlinkHandler} key={item.id} to={item.url}>{item.title}</NavLink>
                ))}

            </div>
            <div className="flex items-center gap-8">
                <SearchIcon className="max-md:hidden w-6 h-6 cursor-pointer" />
                <button className="px-4 py-1 sm:px-7 sm:py-2 bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer">Login</button>
            </div>
            <MenuIcon onClick={() => setIsOpen((prev: boolean): boolean => !prev)} className="max-md:ml-4 md:hidden w-8 h-8 cursor-pointer" />
        </div>
    )
}
export default Navbar
