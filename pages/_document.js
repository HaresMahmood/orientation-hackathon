import { Head, Html, Main, NextScript } from 'next/document';

import React from 'react';

const Document = () => {
    return (
        <Html>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="preconnect"
                    href="https://fonts.googleapis.com"
                    crossOrigin="true"
                />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@200;300;400;500;600;700;800;900&display=swap"
                    as="font"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default Document;
