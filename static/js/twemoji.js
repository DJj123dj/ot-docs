var localDocsPath = ""
setInterval(() => {
    //parse twemoji
    twemoji.parse(document.body,{
        folder: 'svg',
        ext: '.svg',
        base: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/'
    })

    //manage LinkBlocks
    if (document.documentElement.classList.contains("docs-version-current")){
        document.documentElement.setAttribute("docs-path","dev")
    }else if (document.documentElement.classList.contains("docs-version-3.4.4")){
        document.documentElement.setAttribute("docs-path","3.4.4")
    }

    if (localDocsPath != document.documentElement.getAttribute("docs-path")){
        const linkblocks = Array.from(document.getElementsByClassName("require-url-update"))
        linkblocks.forEach((el) => {
            el.setAttribute("href","/docs/"+document.documentElement.getAttribute("docs-path")+"/"+el.getAttribute("url"))
        })

        const versionDropdown = Array.from(document.getElementsByClassName("navbar__item"))[4]
        if (versionDropdown){
            const activeVersion = versionDropdown.getElementsByClassName("dropdown__link--active")[0]
            if (activeVersion) versionDropdown.firstElementChild.innerHTML = activeVersion.innerHTML
        }
    }
    //reset localDocsPath
    localDocsPath = document.documentElement.getAttribute("docs-path")
},100)

setTimeout(() => {
    const linkblocks = Array.from(document.getElementsByClassName("require-url-update"))
    linkblocks.forEach((el) => {
        el.setAttribute("href","/docs/"+document.documentElement.getAttribute("docs-path")+"/"+el.getAttribute("url"))
    })
},1000)