import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import "../css/output.css"

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title="Open Ticket Documentation" description="The official documentation for the most advanced open-source discord ticket bot ever!">
    <main className='flex justify-center items-center h-screen flex-col'>
        <p className='m-0 text-3xl font-bold max-md:text-2xl'>Welcome to the official</p>
        <img src="/img/logo_docs_dark.png" draggable="false" className='h-72 opacity-90 hidden dark:block max-md:h-32'></img>
        <img src="/img/logo_docs_light.png" draggable="false" className='h-72 opacity-90 dark:hidden max-md:h-32'></img>
        <hr className='w-2/3 bg-neutral-700 h-1 mt-3'></hr>
        <div className='flex gap-6 mt-1 items-center justify-center max-md:flex-col max-md:gap-4 max-md:mb-4'>
            <a href='/docs/guides/get-started' className='bg-[#f8ba00] text-white text-lg font-bold py-2 px-8 rounded-lg hover:bg-white hover:text-black hover:no-underline'>Get Started!</a>
            <a href='/docs/framework/get-started' className='bg-neutral-700 text-white text-lg font-bold py-2 px-8 rounded-lg hover:bg-white hover:text-black hover:no-underline'>Plugin Development</a>
            <a href='/docs/reference/get-started' className='bg-neutral-700 text-white text-lg font-bold py-2 px-8 rounded-lg hover:bg-white hover:text-black hover:no-underline'>API Reference</a>
            <a href='/blog' className='bg-neutral-700 text-white text-lg font-bold py-2 px-8 rounded-lg hover:bg-white hover:text-black hover:no-underline'>Blog</a>
        </div>
        <p className='my-2 text-lg font-bold'>OR</p>
        <div className='flex flex-col gap-0.5 mt-0 items-center justify-center'>
            <a href='https://www.github.com/DJj123dj/open-ticket' target='_blank' className='text-lg text-center'>Downloads</a>
            <a href='https://openticket.dj-dj.be' target='_blank' className='text-lg text-center'>Official Website</a>
            <a href='https://discord.dj-dj.be' target='_blank' className='text-lg text-center'>Support Server</a>
        </div>
        <div className='h-32'></div>
    </main>
    </Layout>
  );
}