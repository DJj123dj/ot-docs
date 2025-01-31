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
                <li><b>💩 no bloat</b> - Your Open Ticket bot doesn't contain any form of bloat or credits!</li>
                <li><b>🔒 tested & secure</b> - Open Ticket has been tested by thousands of servers and is very secure!</li>
                <li><b>📈 scalable</b> - Open Ticket is made to handle huge servers! (Already tested in <b>servers with 100k members</b>)</li>
                <li><b>📄 HTML transcripts</b> - Make use of the most customisable, beautiful and easy-to-use HTML Transcripts!</li>
                <li><b>✅ ticket actions</b> - Close, Reopen, Delete, Rename & Move all your tickets!</li>
                <li><b>🇬🇧 translation</b> - Open Ticket has been translated in more than <b>22 languages</b> by our community!</li>
                <li><b>🎨 customisation</b> - Open Ticket has been created around customisation, everything can be customised!</li>
                <li><b>🖥️ interactions</b> - The bot has full support for Buttons, Dropdowns, Slash Commands and Modals!</li>
                <li><b>∞ unlimited</b> - Create an infinite amount of tickets & panels!</li>
                <li><b>📝 advanced plugins</b> - Create advanced plugins or use pre-made ones by our community!</li>
                <li><b>👥 user management</b> - Add & Remove users from all tickets!</li>
                <li><b>📊 detailed stats</b> - Open Ticket has ticket, user & global staticstics available for everyone!</li>
                <li><b>🚫 blacklist</b> - Blacklist users to prevent them from creating a ticket!</li>
                <li><b>❓ questions</b> - Let users answer questions in a modal before the ticket is created!</li>
                <li><b>📦 slash & text</b> - Open Ticket supports both slash & text commands!</li>
                <li><b>📥 extra buttons</b> - The bot also supports Reaction Roles & Url Buttons, because why not ¯\\_(ツ)_/¯</li>
                <li><b>✨ commands</b> - The bot contains more than 25 commands!</li>
                <br></br>
                <h3>And more using plugins!</h3>
                <li><b>💬 reviews</b> - Create & customise your own review system!</li>
                <li><b>📢 feedback</b> - Collect feedback & create forms for people to answer!</li>
                <li><b>🏷️ tags</b> - Create tags & answer questions automatically using keywords!</li>
                <li><b>📝 forms</b> - Create advanced forms and ask people for additional details!</li>
                <li><b>🔄 rotating status</b> - Create a rotating bot status & use dynamic variables from the bot!</li>
                <li><b>💾 sqlite database</b> - Use an `sqlite` database for increased performances!</li>
                <li><b>🎉 custom embeds</b> - Create your own embeds and use them in your server!</li>
                <li><b>🎨 customisation</b> - Yep, you heard it right! Even more customisation!</li>
                <li><b>😁 And so much more...</b></li>
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