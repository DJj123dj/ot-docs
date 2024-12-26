import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import "../css/output.css"

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title="Open Ticket Documentation" description="The official documentation for the most advanced open-source discord ticket bot ever!">
        <main className='flex justify-center items-center flex-col'>
            <div className='flex justify-center items-center h-[80vh] flex-col'>
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
                <div className='flex gap-2 mt-0 items-center justify-center'>
                    <a href='https://www.github.com/DJj123dj/open-ticket/releases/latest' target='_blank' className='text-lg text-center'>Download (Latest)</a> -
                    <a href='https://github.com/sponsors/DJj123dj' target='_blank' className='text-lg text-center'>Sponsors</a> - 
                    <a href='/contributing' className='text-lg text-center'>Contributing</a> - 
                    <a href='https://discord.dj-dj.be' target='_blank' className='text-lg text-center'>Support Server</a>
                </div>
            </div>
            <ul>
                <h2 className='text-4xl -ml-4'>Open Ticket Features</h2>
                <li><b>💩 no bloat/credits</b> - Your Open Ticket bot doesn't contain any form of bloat or credits!</li>
                <li><b>📈 scalable</b> - Open Ticket is made to handle huge servers! Even if your server contains more than 100k members!</li>
                <li><b>📄 html transcripts</b> - Make use of the most customisable, beautiful and easy-to-use HTML Transcripts!</li>
                <li><b>✅ ticket actions</b> - Close, Reopen, Delete, Rename & Move all your tickets!</li>
                <li><b>🇬🇧 translation</b> - Open Ticket has been translated in more than 16 languages by our community!</li>
                <li><b>🎨 customisation</b> - Open Ticket has been created around customisation, everything can be customised!</li>
                <li><b>🖥️ interactions</b> - The bot has full support for Buttons, Dropdowns, Slash Commands and Modals!</li>
                <li><b>∞ unlimited everywhere</b> - Create an infinite amount of tickets & panels!</li>
                <li><b>📝 advanced plugins</b> - Create the most advanced plugins that you want or use premade ones by our community!</li>
                <li><b>👥 user management</b> - Add & Remove users from all tickets!</li>
                <li><b>📊 detailed stats</b> - Open Ticket has ticket, user & global staticstics available for everyone!</li>
                <li><b>🚫 blacklist</b> - Blacklist users to prevent them from creating a ticket!</li>
                <li><b>❓ questions</b> - Let users answer questions in a modal before the ticket is created!</li>
                <li><b>📦 commands</b> - Open Ticket supports both slash & text commands!</li>
                <li><b>📥 extra types</b> - The bot also supports Reaction Roles & Url Buttons, because why not ¯\(ツ)/¯</li>
                <li><b>🎛️ dependencies</b> - We try to use as little external dependencies as needed!</li>
                <li><b>📢 commands</b> - The bot contains more than 25 commands! And it's expandable with plugins!</li>
            </ul>
            <div className='flex gap-5 w-1/2 mt-7'>
                <div className='flex flex-col gap-5 w-1/2'>
                    <img className='rounded-md' alt="Ticket Message" src="https://apis.dj-dj.be/cdn/openticket/preview-v4/ticket.png"></img>
                    <img className='rounded-md' alt="Ticket Stats Message" src="https://apis.dj-dj.be/cdn/openticket/preview-v4/stats.png"></img>
                    <img className='rounded-md' alt="Example Panel 2" src="https://apis.dj-dj.be/cdn/openticket/preview-v4/panel-2.png"></img>
                </div>
                <div className='flex flex-col gap-5 w-1/2'>
                    <img className='rounded-md' alt="Example Panel 1" src="https://apis.dj-dj.be/cdn/openticket/preview-v4/panel-1.png"></img>
                </div>
            </div>
            <div className='h-32'></div>
        </main>
    </Layout>
  );
}