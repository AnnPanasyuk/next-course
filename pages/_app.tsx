import NextNProgress from "nextjs-progressbar";
import '../styles/main.scss';
import React from "react";

export default function MySpp({ Component, pageProps }) {
    return (
        <>
            <NextNProgress
                color="#290"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
            />
            <Component {...pageProps} />
        </>
    )
}