import Head from 'next/head'
import React from 'react'

export default function Layout( {children}: { children: React.ReactNode }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Hello Earth</title>
            </Head>
            <div>
                {children}
             </div>
        </>
)
}