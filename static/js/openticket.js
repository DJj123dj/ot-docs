//BADGES FRONT MATTER:
//sidebar_class_name: otdocs-new-(page/category)
//sidebar_class_name: otdocs-beta-(page/category)
//sidebar_class_name: otdocs-official-(page/category)
//sidebar_class_name: otdocs-verified-(page/category)


const addPageBadge = (element,color,text) => {
    const textElement = element.firstElementChild

    const spanElement = document.createElement("span")
    spanElement.innerHTML = text
    spanElement.id = "otdocs-badge"
    
    spanElement.style.fontSize = "0.8em"
    spanElement.style.fontWeight = "700"
    spanElement.style.backgroundColor = color
    spanElement.style.color = "white"

    spanElement.style.paddingTop = "2px"
    spanElement.style.paddingBottom = "2px"
    spanElement.style.paddingLeft = "5px"
    spanElement.style.paddingRight = "5px"

    spanElement.style.borderRadius = "10px"
    spanElement.style.marginLeft = "4px"

    textElement.innerHTML = textElement.innerHTML+spanElement.outerHTML
}

const addCategoryBadge = (element,color,text) => {
    const textElement = element.firstElementChild.firstElementChild

    const spanElement = document.createElement("span")
    spanElement.innerHTML = text
    spanElement.id = "otdocs-badge"
    
    spanElement.style.fontSize = "0.8em"
    spanElement.style.fontWeight = "700"
    spanElement.style.backgroundColor = color
    spanElement.style.color = "white"

    spanElement.style.paddingTop = "2px"
    spanElement.style.paddingBottom = "2px"
    spanElement.style.paddingLeft = "5px"
    spanElement.style.paddingRight = "5px"

    spanElement.style.borderRadius = "10px"
    spanElement.style.marginLeft = "4px"

    textElement.innerHTML = textElement.innerHTML+spanElement.outerHTML
}


document.addEventListener("DOMContentLoaded",() => {
    const newPageItems = Array.from(document.getElementsByClassName("otdocs-new-page"))
    const newCategoryItems = Array.from(document.getElementsByClassName("otdocs-new-category"))
    const betaPageItems = Array.from(document.getElementsByClassName("otdocs-beta-page"))
    const betaCategoryItems = Array.from(document.getElementsByClassName("otdocs-beta-category"))
    const officialPageItems = Array.from(document.getElementsByClassName("otdocs-official-page"))
    const officialCategoryItems = Array.from(document.getElementsByClassName("otdocs-official-category"))
    const verifiedPageItems = Array.from(document.getElementsByClassName("otdocs-verified-page"))
    const verifiedCategoryItems = Array.from(document.getElementsByClassName("otdocs-verified-category"))
    
    //render newPageItems
    newPageItems.forEach((item) => {
        addPageBadge(item,"#ff4545","NEW!")
    })

    //render newCategoryItems
    newCategoryItems.forEach((item) => {
        addCategoryBadge(item,"#ff4545","NEW!")
    })

    //render betaPageItems
    betaPageItems.forEach((item) => {
        addPageBadge(item,"#3d84e0","BETA!")
    })

    //render betaCategoryItems
    betaCategoryItems.forEach((item) => {
        addCategoryBadge(item,"#3d84e0","BETA!")
    })

    //render officialPageItems
    officialPageItems.forEach((item) => {
        addPageBadge(item,"#3d84e0","OFFICIAL")
    })

    //render officialCategoryItems
    officialCategoryItems.forEach((item) => {
        addCategoryBadge(item,"#3d84e0","OFFICIAL")
    })

    //render verifiedPageItems
    verifiedPageItems.forEach((item) => {
        addPageBadge(item,"#35c43a","VERIFIED")
    })

    //render verifiedCategoryItems
    verifiedCategoryItems.forEach((item) => {
        addCategoryBadge(item,"#35c43a","VERIFIED")
    })


    //INTERVAL
    setInterval(() => {
        const newPageItems = Array.from(document.getElementsByClassName("otdocs-new-page"))
        const newCategoryItems = Array.from(document.getElementsByClassName("otdocs-new-category"))
        const betaPageItems = Array.from(document.getElementsByClassName("otdocs-beta-page"))
        const betaCategoryItems = Array.from(document.getElementsByClassName("otdocs-beta-category"))
        const officialPageItems = Array.from(document.getElementsByClassName("otdocs-official-page"))
        const officialCategoryItems = Array.from(document.getElementsByClassName("otdocs-official-category"))
        const verifiedPageItems = Array.from(document.getElementsByClassName("otdocs-verified-page"))
        const verifiedCategoryItems = Array.from(document.getElementsByClassName("otdocs-verified-category"))

        //render newPageItems
        newPageItems.forEach((item) => {
            if (!item.firstElementChild.querySelector("#otdocs-badge")){
                addPageBadge(item,"#ff4545","NEW!")
            }
        })
    
        //render newCategoryItems
        newCategoryItems.forEach((item) => {
            if (!item.firstElementChild.firstElementChild.querySelector("#otdocs-badge")){
                addCategoryBadge(item,"#ff4545","NEW!")
            }
        })
    
        //render betaPageItems
        betaPageItems.forEach((item) => {
            if (!item.firstElementChild.querySelector("#otdocs-badge")){
                addPageBadge(item,"#3d84e0","BETA!")
            }
        })
    
        //render betaCategoryItems
        betaCategoryItems.forEach((item) => {
            if (!item.firstElementChild.firstElementChild.querySelector("#otdocs-badge")){
                addCategoryBadge(item,"#3d84e0","BETA!")
            }
        })

        //render officialPageItems
        officialPageItems.forEach((item) => {
            if (!item.firstElementChild.querySelector("#otdocs-badge")){
                addPageBadge(item,"#3d84e0","OFFICIAL")
            }
        })
    
        //render officialCategoryItems
        officialCategoryItems.forEach((item) => {
            if (!item.firstElementChild.firstElementChild.querySelector("#otdocs-badge")){
                addCategoryBadge(item,"#3d84e0","OFFICIAL")
            }
        })

        //render verifiedPageItems
        verifiedPageItems.forEach((item) => {
            if (!item.firstElementChild.querySelector("#otdocs-badge")){
                addPageBadge(item,"#35c43a","VERIFIED")
            }
        })
    
        //render verifiedCategoryItems
        verifiedCategoryItems.forEach((item) => {
            if (!item.firstElementChild.firstElementChild.querySelector("#otdocs-badge")){
                addCategoryBadge(item,"#35c43a","VERIFIED")
            }
        })
    },100)
})

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
        document.documentElement.setAttribute("docs-path","current")
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