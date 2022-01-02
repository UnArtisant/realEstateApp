import "../styles/globals.css"
import {useState} from "react";
import {Hydrate, QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";

export default function CustomApp({Component, pageProps}) {
    const [queryClient] = useState(() => new QueryClient());
    return <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
}
