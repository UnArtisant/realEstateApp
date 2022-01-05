import Image from "next/image";
import Link from "next/link";

function Banner({purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl}) {
    return <div className="flex justify-center items-center m-10">
            <div className="md:flex ">
                <img src={imageUrl} className="w-96 lg:w-auto lg:max-w-3xl" alt=""/>
                <div className="p-5 w-80">
                    <p className="text-gray-500 my-2 text-sm font-medium">{purpose}</p>
                    <div className="my-3">
                        <h1 className="text-3xl font-bold">{title1}</h1>
                        <h1 className="text-3xl font-bold">{title2}</h1>
                    </div>
                    <div className="py-3 my-2">
                        <p className="text-lg text-gray-700">{desc1}</p>
                        <p className="text-lg text-gray-700">{desc2}</p>
                    </div>
                    <Link href={linkName} >
                        <a className="bg-blue-500 px-6 py-3 rounded shadow text-white">
                            {buttonText}
                        </a>
                    </Link>
                </div>
            </div>
    </div>
}

export default Banner