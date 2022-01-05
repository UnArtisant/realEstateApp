import {useState} from "react";
import {useRouter} from "next/router";
import DefaultLayout from "../container/layout/defaultLayout";
import {BsFilter} from "react-icons/bs";
import SearchFilter from "../components/SearchFilter";
import {fetchApi} from "../hook/api/fetch";
import Property from "../components/Property";

import noresult from "../assets/noResult.svg"

function Search({properties}) {
    console.log(properties)
    const [searchFilter, setSearchFilter] = useState(false)
    const router = useRouter()
    return <DefaultLayout>
        <div className="pt-24">
            <div onClick={() => setSearchFilter(s => !s)}
                 className="flex p-2 cursor-pointer bg-gray-100 border-b border-gray-300 text-lg justify-center items-center">
                <p>Search Property By Filters</p>
                <span className="w-7 pl-2">
                    <BsFilter/>
                </span>
            </div>
            {searchFilter && <SearchFilter/>}
            <p className="text-2xl p-4 font-bold">
                Properties {router.query.purpose}
            </p>
            <div className="flex flex-wrap justify-center">
                {properties.map((property, i) => (
                    <Property key={i} property={property}/>
                ))}
            </div>
            {properties.length === 0 && (
                <div className="justify-center items-center flex-col my-5">
                    <img src={noresult} />
                    <p className="text-xl mt-3" >No Result Found.</p>
                </div>
            )}
        </div>
    </DefaultLayout>
}

export async function getServerSideProps({query}) {
    const purpose = query.purpose || 'for-rent';
    const rentFrequency = query.rentFrequency || 'yearly';
    const minPrice = query.minPrice || '0';
    const maxPrice = query.maxPrice || '1000000';
    const roomsMin = query.roomsMin || '0';
    const bathsMin = query.bathsMin || '0';
    const sort = query.sort || 'price-desc';
    const areaMax = query.areaMax || '35000';
    const locationExternalIDs = query.locationExternalIDs || '5002';
    const categoryExternalID = query.categoryExternalID || '4';

    const {data} = await fetchApi(`properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);

    return {
        props: {
            properties: data?.hits,
        },
    };
}

export default Search