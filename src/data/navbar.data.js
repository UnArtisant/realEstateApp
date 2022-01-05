import { FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';

export const navbarData = [
    {
        href: "/",
        label : "Home",
        icon : <FcHome />
    },
    {
        href: "/search?purpose=for-sale",
        label : "Buy Property",
        icon : <FcAbout />
    },
    {
        href: "/search?purpose=for-rent",
        label : "Rent Property",
        icon : <FiKey />
    }
]