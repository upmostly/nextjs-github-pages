import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className="dark flex h-screen w-screen  items-center justify-center bg-stone-900">
            <Head>
                <title>Hello World!</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="prose flex h-full w-screen flex-col items-center justify-start dark:bg-stone-900 dark:prose-invert">
                <div className="flex w-full flex-row items-center justify-between p-5">
                    <h1>My Blog</h1>
                </div>
                <Component {...pageProps} />
            </main>
        </div>
    );
}
