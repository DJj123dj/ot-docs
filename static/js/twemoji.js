var localDocsPath = ""
setInterval(() => {
    //parse twemoji
    twemoji.parse(document.body,{
        folder: 'svg',
        ext: '.svg'
    })

    //manage LinkBlocks
    if (document.documentElement.classList.contains("docs-version-current")){
        document.documentElement.setAttribute("docs-path","current")
    }else if (document.documentElement.classList.contains("docs-version-3.4.4")){
        document.documentElement.setAttribute("docs-path","3.4.4")
    }

    if (localDocsPath != document.documentElement.getAttribute("docs-path")){
        const linkblocks = Array.from(document.getElementsByClassName("otdocs-linkblock"))
        linkblocks.forEach((el) => {
            if (!el.getAttribute("url").startsWith("http://") && !el.getAttribute("url").startsWith("https://")){
                el.setAttribute("href","/docs/"+document.documentElement.getAttribute("docs-path")+"/"+el.getAttribute("url"))
            }
        })

        const versionDropdown = Array.from(document.getElementsByClassName("navbar__item"))[4]
        if (versionDropdown){
            const activeVersion = versionDropdown.getElementsByClassName("dropdown__link--active")[0]
            versionDropdown.firstElementChild.innerHTML = activeVersion.innerHTML
        }
    }
    //reset localDocsPath
    localDocsPath = document.documentElement.getAttribute("docs-path")
},100)