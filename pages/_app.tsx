import { AppProps } from "next/app";
import '@/styles/globals.css';
import wrapper from "@/modules/store"
import { NextPage } from "next";

const MyApp: NextPage<AppProps> = ({Component, pageProps}: AppProps) => {
    return <Component {...pageProps} />;
}
export default wrapper.withRedux(MyApp)