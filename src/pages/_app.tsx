import type { AppProps } from "next/app";
import { Provider } from 'react-redux';
import { store } from "@/store";
import "@/assets/style.css";
import DefaultLayout from "@/layouts/default";
export default function App({ Component, pageProps }: AppProps) {
    // @ts-ignore
    const Layout = Component.layout || DefaultLayout;
    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}
