import Drawer from "../Drawer";
import Link from "next/link";
import {useState} from "react";
import {IoMdClose, IoMdMenu} from "react-icons/io";
import {navbarData} from "../../data/navbar.data";
import {BsSearch} from "react-icons/bs";

function MobilDrawer () {
    const [isDrawerOpen, setDrawerOpen] = useState(false)
    return <Drawer
        width="320px"
        open={isDrawerOpen}
        toggleHandler={() => setDrawerOpen(o => !o)}
        drawerHandler={
            <div className="flex justify-center mr-4 items-center w-10 lg:hidden" >
                <IoMdMenu size="26px"/>
            </div>
        }
        closeButton={
            <div>
                <IoMdClose color="#000000" size="26px"/>
            </div>
        }
        closeBtnStyle={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: '25px',
            right: '30px',
            zIndex: '1',
            cursor: 'pointer',
        }}
        drawerStyle={{
            width: '100%',
            height: '100%',
            backgroundColor: 'dark',
        }}
    >
        <div style={{
            paddingTop: '100px',
            paddingBottom: '40px',
            paddingLeft: '30px',
            paddingRight: '30px',
        }} className="w-full h-full flex flex-col ">
            <div className="w-full mt-8 flex flex-col">
                {navbarData.map((item, i) => (
                    <Link key={i} href={item.href}>
                        <div className="flex items-center">
                            {item.icon}
                            <a className="font-medium text-xl my-3 px-5 cursor-pointer leading-medium hover:text-red-300">{item.label}</a>
                        </div>
                    </Link>
                ))}
                <Link href="/search">
                    <div className="flex items-center justify-center rounded-full px-4 py-2 bg-red-400">
                        {<BsSearch />}
                        <a className="font-medium px-5 text-white cursor-pointer leading-medium hover:text-red-500">search</a>
                    </div>
                </Link>
            </div>
        </div>
        </Drawer>

}

export default MobilDrawer