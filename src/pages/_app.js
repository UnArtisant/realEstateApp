import "../styles/globals.css"
import 'rc-drawer/assets/index.css';
import 'react-multi-carousel/lib/styles.css';
import {useState} from "react";
import {QueryClient, QueryClientProvider} from 'react-query'
import NProgress from 'nprogress';
import Router from 'next/router';
import {ReactQueryDevtools} from "react-query/devtools";
import {Head} from "next/document";

export default function CustomApp({Component, pageProps}) {
    const [queryClient] = useState(() => new QueryClient());

    NProgress.configure({showSpinner: false});

    Router.events.on('routeChangeStart', () => {
        NProgress.start();
    });

    Router.events.on('routeChangeComplete', () => {
        NProgress.done();
    });

    return <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
}
