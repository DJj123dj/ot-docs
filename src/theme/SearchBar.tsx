import React from 'react';

class DocsSearchManager {
    openSearch(){
        const dialog = document.querySelector("#OTDocs_SearchDialog") as HTMLDialogElement
        dialog.showModal()
    }
}

const docSearch: DocsSearchManager = new DocsSearchManager()

export default function SearchBar(){
    return (<button onClick={() => {docSearch.openSearch()}} className='bg-[#333] appearance-none flex gap-1 px-2 py-1 rounded-lg w-64 items-center max-[1200px]:w-7 max-[1200px]:p-0 max-[1200px]:bg-transparent border-none outline-2 outline-neutral-700 outline max-[1200px]:outline-none cursor-text'>
        <svg className='size-6 fill-neutral-400 max-[1200px]:size-7 max-[1200px]:fill-[#e3e3e3]' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>
        </svg>
        <span className='text-neutral-400 max-[1200px]:hidden'>Search...</span>
        <span className='grow text-right max-[1200px]:hidden'><kbd>⌘</kbd> <kbd>K</kbd></span>
    </button>)
}

export function SearchDialog(){
    return (<dialog id="OTDocs_SearchDialog">
        Hi there!
    </dialog>)
}

document.addEventListener("keydown",(event) => {
    if (event.key == "k" && (event.metaKey || event.ctrlKey)){
        docSearch.openSearch()
        event.preventDefault()
    }
})