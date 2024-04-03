var localDocsPath = ""
setInterval(() => {
    //parse twemoji
    twemoji.parse(document.body,{
        folder: 'svg',
        ext: '.svg',
        base: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/'
    })

    //manage LinkBlocks (UPDATE THIS EVERY TIME THERE IS A NEW RELEASE!!!!!)
    if (document.documentElement.classList.contains("docs-version-current")){
        document.documentElement.setAttribute("docs-path","dev")
    }else if (document.documentElement.classList.contains("docs-version-3.5.x")){
        document.documentElement.setAttribute("docs-path","3.5.x")
    }

    if (localDocsPath != document.documentElement.getAttribute("docs-path")){
        const linkblocks = Array.from(document.getElementsByClassName("require-url-update"))
        linkblocks.forEach((el) => {
            el.setAttribute("href","/docs/"+document.documentElement.getAttribute("docs-path")+"/"+el.getAttribute("url"))
        })

        //UPDATE WHEN EXTRA DROPDOWN ADDED
        const versionDropdown = document.querySelector("div.navbar__item.dropdown.dropdown--hoverable.dropdown--right")
        if (versionDropdown){
            const activeVersion = versionDropdown.querySelector(".dropdown__link--active")
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