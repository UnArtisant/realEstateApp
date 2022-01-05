import {FaBed, FaBath} from 'react-icons/fa';
import {BsGridFill} from 'react-icons/bs';
import {GoVerified} from 'react-icons/go';
import millify from 'millify';
import {fetchApi} from "../../hook/api/fetch";
import Carousel from "react-multi-carousel";
import {sliderParams} from "../../constant/slide";
import Image from "next/image";
import DefaultLayout from "../../container/layout/defaultLayout";


function Property({
                      property: {
                          price,
                          rentFrequency,
                          rooms,
                          title,
                          baths,
                          area,
                          agency,
                          isVerified,
                          description,
                          type,
                          purpose,
                          furnishingStatus,
                          amenities,
                          photos
                      }
                  }) {

    return (
        <DefaultLayout>
            <div className="container mx-auto py-24">
                <div className="max-w-5xl my-5 mx-auto">
                    {photos && <Carousel {...sliderParams}>
                        {photos.map((item, k) => {
                            return <div key={k} className="max-w-xl p-1">
                                <img src={item.url}/>
                            </div>
                        })}
                    </Carousel>}
                </div>
                <div className="w-full p-6">
                    <div className="pt-2 flex items-center">
                        <div className="pr-3 text-green-400">{isVerified && <GoVerified/>}</div>
                        <p className="font-bold px-3 text-lg">
                            AED {price} {rentFrequency && `/${rentFrequency}`}
                        </p>
                        <hr/>
                        <span className="h-14 rounded-full pl-3 w-14">
                         <img src={agency?.logo?.url} alt=""/>
                     </span>
                    </div>
                    <div className="flex max-w-xs items-center p-1 justify-between text-blue-400">
                        {rooms}<FaBed/> | {baths} <FaBath/> | {millify(area)} sqft <BsGridFill/>
                    </div>
                    <div className="mt-2">
                        <p className="text-lg mb-2 text-bold">{title}</p>
                        <p className="leading-loose text-gray-600" dangerouslySetInnerHTML={{__html: description}} />
                    </div>
                    <div className="flex flex-wrap uppercase justify-between">
                        <div className="flex justify-between max-w-md border-b border-gray-100 p-3">
                            <p>Type :</p>
                            <p className="font-bold">{type}</p>
                        </div>
                        <div className="flex justify-between max-w-md border-b border-gray-100 p-3">
                            <p>Purpose : </p>
                            <p className="font-bold">{purpose}</p>
                        </div>
                        {furnishingStatus && (
                            <div className="flex justify-between max-w-md border-b border-gray-100 p-3">
                                <p>Furnishing Status : </p>
                                <p className="font-bold">{furnishingStatus}</p>
                            </div>
                        )}
                    </div>
                </div>
                <div>
                    {amenities.length && <p className="text-2xl mt-5">Facilites:</p>}
                    <div className="flex flex-wrap">
                        {amenities?.map((item) => (
                            item?.amenities?.map((amenity) => (
                                <p key={amenity.text} className="text-blue-400 m-2 p-2 bg-gray-200 rounded font-bold">
                                    {amenity.text}
                                </p>
                            ))
                        ))}
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}

export async function getServerSideProps({params: {id}}) {
    const {data} = await fetchApi(`properties/detail?externalID=${id}`)
    return {
        props: {
            property: data
        }
    }
}

export default Property