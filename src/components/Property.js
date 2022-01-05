import Link from "next/link"
import Image from "next/image"
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';

import noImg from "../assets/no_picture.jpg"
import millify from "millify";

export function Property({
                             property: {
                                 coverPhoto,
                                 price,
                                 rentFrequency,
                                 rooms,
                                 title,
                                 baths,
                                 area,
                                 agency,
                                 isVerified,
                                 externalID
                             }
                         }) {
    return <Link href={`/property/${externalID}`} passHref>
         <div className="flex flex-col items-center m-2 bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100">

             <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                  src={coverPhoto ?coverPhoto.url : noImg} alt="" />
                 <div className="flex flex-col justify-between p-4 leading-normal">
                     <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Noteworthy
                         technology acquisitions 2021</h5>
                     <div className="flex items-center">
                         <span className="mr-3 text-green-600">{isVerified && <GoVerified />}</span>
                         <p className="font-bold text-lg">AED {price}{rentFrequency && `/${rentFrequency}`}</p>
                     </div>
                     <div className="flex space-x-3 items-center p-1 space-between text-blue-400">
                         {rooms}
                         <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
                     </div>
                     <p className='text-lg'>
                         {title.length > 30 ? title.substring(0, 30) + '...' : title}
                     </p>
                 </div>



         </div>
    </Link>
}

export default Property