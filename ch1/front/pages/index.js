import React from 'react'; // next에선 원래 안써도 됨
import Link from 'next/link';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const Home = () => {
    // hooks 문법
    return (
        <>
            <Head>
                <title>Node bird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.js" />
            </Head>
            <AppLayout>
                <div>Hello, Next!</div>
            </AppLayout>
        </>
    );
};

export default Home;
