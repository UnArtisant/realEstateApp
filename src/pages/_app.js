import "../styles/globals.css"
import 'rc-drawer/assets/index.css';
import {useState} from "react";
import { QueryClient, QueryClientProvider } from 'react-query'
import {ReactQueryDevtools} from "react-query/devtools";

export default function CustomApp({Component, pageProps}) {
    const [queryClient] = useState(() => new QueryClient());
    return <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
}
