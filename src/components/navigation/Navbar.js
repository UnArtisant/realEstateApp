import Link from "next/link"
import MobilDrawer from "./MobilDrawer";
import {navbarData} from "../../data/navbar.data";
import {BsSearch} from "react-icons/bs";

function Navbar ({className}) {
    return  <header className={`${className === "sticky" ? "bg-white fixed" : "bg-transparent absolute"} border-b border-gray-300 w-full py-7 top-0 left-0`} >
            <div className="container bg-white flex justify-between items-center mx-auto">
                <Link href='/' >
                    <a className="text-3xl ml-4 md:ml-0 text-blue-400 font-bold">
                        Realtor
                    </a>
                </Link>
                <nav className=" mx-auto hidden lg:flex">
                    {navbarData.map((item, i) => (
                        <Link key={i} href={item.href}>
                            <div className="flex items-center">
                                {item.icon}
                                <a className="font-medium px-5 cursor-pointer leading-medium hover:text-red-300">{item.label}</a>
                            </div>
                        </Link>
                    ))}
                </nav>
                <Link href="/search">
                    <div className="flex hidden lg:flex items-center rounded-full px-4 py-2 bg-red-400">
                        {<BsSearch />}
                        <a className="font-medium px-5 text-white cursor-pointer leading-medium hover:text-red-500">search</a>
                    </div>
                </Link>
                <MobilDrawer />
            </div>
    </header>
}

export default Navbar