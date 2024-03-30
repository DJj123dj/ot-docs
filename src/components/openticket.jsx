import React from 'react';
import Link from '@docusaurus/Link';
import BrowserOnly from '@docusaurus/BrowserOnly';

export function LabelText(params){
    //color selector
    if (params.color == "red"){
        var color = "#ff4545"
    }else if (params.color == "orange"){
        var color = "#ff9f45"
    }else if (params.color == "yellow"){
        var color = "#e0bd0b"
    }else if (params.color == "green"){
        var color = "#35c43a"
    }else if (params.color == "cyan"){
        var color = "#3dd5e0"
    }else if (params.color == "blue"){
        var color = "#3d84e0"
    }else if (params.color == "purple"){
        var color = "#7b3de0"
    }else if (params.color == "pink"){
        var color = "#e03dd0"
    }else if (params.color == "black"){
        var color = "#111111"
    }else if (params.color == "gray"){
        var color = "#999999"
    }else if (params.color == "brown"){
        var color = "#7d5831"
    }else{
        var color = "transparent"
    }

    //return span
    return (
        <span style={{
            backgroundColor:color,
            color:"#e5e5e5",
            paddingLeft:"0.3em",
            paddingRight:"0.3em",
            paddingBottom:"0.1em",
            borderRadius:"0.3em",
            fontWeight:"bold"
        }}>
            {params.children}
        </span>
    )
}

export function ColorText(params){
    //color selector
    if (params.color == "red"){
        var color = "#ff4545"
    }else if (params.color == "orange"){
        var color = "#ff9f45"
    }else if (params.color == "yellow"){
        var color = "#e0bd0b"
    }else if (params.color == "green"){
        var color = "#35c43a"
    }else if (params.color == "cyan"){
        var color = "#3dd5e0"
    }else if (params.color == "blue"){
        var color = "#3d84e0"
    }else if (params.color == "purple"){
        var color = "#7b3de0"
    }else if (params.color == "pink"){
        var color = "#e03dd0"
    }else if (params.color == "black"){
        var color = "#111111"
    }else if (params.color == "gray"){
        var color = "#999999"
    }else if (params.color == "brown"){
        var color = "#7d5831"
    }else{
        var color = "transparent"
    }

    //return span
    return (
        <span style={{
            color:color,
        }}>
            {params.children}
        </span>
    )
}

export function LinkBlock(params){
    return <BrowserOnly>{() => {
        if (params.url){
            var linkClasses = "bg-[#222] w-full h-20 max-lg:h-28 my-3 border-[#606770] border-[1px] border-solid rounded-lg flex items-center hover:no-underline hover:scale-[102%] hover:border-[--ifm-color-primary] hover:border-2 transition-all duration-200"
        }else{
            var linkClasses = "bg-[#222] w-full h-20 max-lg:h-28 my-3 border-[#606770] border-[1px] border-solid rounded-lg flex items-center hover:no-underline"
        }

        if (params.url &&  params.isdoc == "true"){
            var linkUrl = "/docs/"+document.documentElement.getAttribute("docs-path")+"/"+params.url
            linkClasses = linkClasses + " require-url-update"
        }else{
            var linkUrl = params.url
        }

        const target = (params.url) ? ((params.url.startsWith("/") || params.url.startsWith("https://")) ? "_blank" : "_self") : "_self"

        if (params.mode == "image" && params.image){
            return (
                <a url={params.url} href={linkUrl} target={target} className={linkClasses}>
                    <img className="w-12 h-12 m-0 mx-2 max-lg:mr-4" src={params.image}/>
                    <div className='flex flex-col justify-center max-lg:mr-4'>
                        <p className="m-0 text-white font-bold text-xl">{params.name}</p>
                        <p className="m-0 text-neutral-400">{params.description}</p>
                    </div>
                </a>
            )
        }else if (params.mode == "emoji" && params.emoji){
            return (
                <a url={params.url} href={linkUrl} target={target} className={linkClasses}>
                    <p className="text-5xl m-0 mx-2 max-lg:mr-4">{params.emoji}</p>
                    <div className='flex flex-col justify-center max-lg:mr-4'>
                        <p className="m-0 text-white font-bold text-xl">{params.name}</p>
                        <p className="m-0 text-neutral-400">{params.description}</p>
                    </div>
                </a>
            )
        }else{
            return (<p className='text-red-500'>[INVALID LinkBlock Element!]</p>)
        }
    }}</BrowserOnly>
}

export function InlineLink(params){
    return <BrowserOnly>{() => {
        if (params.url && params.isdoc == "true"){
            var linkUrl = "/docs/"+document.documentElement.getAttribute("docs-path")+"/"+params.url
            var extraClass = "require-url-update"
        }else{
            var linkUrl = params.url
            var extraClass = ""
        }

        return (<Link to={linkUrl} className={extraClass}>{params.children}</Link>)
    }}</BrowserOnly>
}

export function GoodImage(params){
    if (!params.src) return (<p className='text-red-500'>[INVALID GoodImage Element!]</p>)
    const size = (params.size) ? params.size : "100%"
    const src = params.src

    if (size == "100%"){
        var classes = `w-full`
    }else if (size == "90%"){
        var classes = `max-lg:w-full w-[90%]`
    }else if (size == "80%"){
        var classes = `max-lg:w-full w-[80%]`
    }else if (size == "70%"){
        var classes = `max-lg:w-full w-[70%]`
    }else if (size == "60%"){
        var classes = `max-lg:w-full w-[60%]`
    }else if (size == "50%"){
        var classes = `max-lg:w-full w-[50%]`
    }else if (size == "40%"){
        var classes = `max-lg:w-full w-[40%]`
    }else if (size == "30%"){
        var classes = `max-lg:w-full w-[30%]`
    }else if (size == "20%"){
        var classes = `max-lg:w-full w-[20%]`
    }else if (size == "10%"){
        var classes = `max-lg:w-full w-[10%]`
    }else if (size == "75%"){
        var classes = `max-lg:w-full w-[75%]`
    }else if (size == "25%"){
        var classes = `max-lg:w-full w-[25%]`
    }else{
        var classes = `w-full`
    }

    return (<img src={src} className={classes} style={{height:"100%"}}></img>)
}

export function FlexHorizontal(params){
    /**@type {"center"|"left"|"right"} */
    const mode = (params.mode == "center" || params.mode == "left" || params.mode == "right") ? params.mode : "center"
    
    if (mode == "center"){
        return (<div className="flex gap-4 w-full justify-center max-lg:flex-col">{params.children}</div>)
    }else if (mode == "left"){
        return (<div className="flex gap-4 w-full justify-start max-lg:flex-col">{params.children}</div>)
    }else if (mode == "right"){
        return (<div className="flex gap-4 w-full justify-end max-lg:flex-col">{params.children}</div>)
    }
}