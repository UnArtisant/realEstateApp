import Head from "next/head"
import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/Footer";
import Sticky from "react-stickynode";
import {useState} from "react";

function DefaultLayout({children}) {
    const [isSticky, setIsSticky] = useState(false);

    const handleStateChange = (status) => {
        if (status.status === Sticky.STATUS_FIXED) {
            setIsSticky(true);
        } else if (status.status === Sticky.STATUS_ORIGINAL) {
            setIsSticky(false);
        }
    };

    return <>
     <Head>
         <title>Real Estade</title>
     </Head>
        <Sticky innerZ={1001} top={0} onStateChange={handleStateChange}>
            <Navbar className={`${isSticky ? 'sticky' : 'unSticky'}`} />
        </Sticky>
        <main  >
            {children}
        </main>
        <Footer />
    </>
}

export default DefaultLayout