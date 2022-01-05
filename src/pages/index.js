import {Banner} from "../components/index";
import Properties from "../container/Properties";
import {fetchApi} from "../hook/api/fetch";
import {PROPERTY_LIST_PATH} from "../constant/api";
import DefaultLayout from "../container/layout/defaultLayout";


export default function Home({propertiesForRent, propertiesForSale}) {

    return (
        <DefaultLayout>
            <div  className="py-20 container mx-auto ">
                <Banner
                    purpose='RENT A HOME'
                    title1='Rental Homes for'
                    title2='Everyone'
                    desc1=' Explore from Apartments, builder floors, villas'
                    desc2='and more'
                    buttonText='Explore Renting'
                    linkName='/search?purpose=for-rent'
                    imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
                />
            </div>
            <Properties properties={propertiesForRent} />
            <Banner
                purpose='BUY A HOME'
                title1=' Find, Buy & Own Your'
                title2='Dream Home'
                desc1=' Explore from Apartments, land, builder floors,'
                desc2=' villas and more'
                buttonText='Explore Buying'
                linkName='/search?purpose=for-sale'
                imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
            />
            <Properties properties={propertiesForSale} />
        </DefaultLayout>
    )
}

export async function getStaticProps() {
    const {data: propertiesForRent} = await fetchApi(`${PROPERTY_LIST_PATH}?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
    const {data: propertiesForSale} = await fetchApi(`${PROPERTY_LIST_PATH}?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)
    return {
        props: {
            propertiesForRent: propertiesForRent?.hits,
            propertiesForSale : propertiesForSale?.hits
        }
    }
}

