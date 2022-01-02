import {Banner} from "../components/index";
import {dehydrate, QueryClient, useQuery} from "react-query";
import {fetchProporties} from "../data/api/proporties";

export default function Home() {

    const { isLoading, isError, isSuccess, data } = useQuery("getProperties", fetchProporties)
    console.log(isSuccess, isLoading, isError, data)
  return (
      <div>
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
      </div>
  )
}

export async function getStaticProps() {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery("getProperties", fetchProporties)

    return {
     props : {
         dehydratedState: dehydrate(queryClient)
     }
 }
}

