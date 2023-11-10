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
    spanElement.style.marginRight = "4px"

    textElement.innerHTML = spanElement.outerHTML+textElement.innerHTML
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
    spanElement.style.marginRight = "4px"

    textElement.innerHTML = spanElement.outerHTML+textElement.innerHTML
}


window.addEventListener('load', function () {
    const newPageItems = Array.from(document.getElementsByClassName("otdocs-new-page"))
    const newCategoryItems = Array.from(document.getElementsByClassName("otdocs-new-category"))
    const betaPageItems = Array.from(document.getElementsByClassName("otdocs-beta-page"))
    const betaCategoryItems = Array.from(document.getElementsByClassName("otdocs-beta-category"))
    
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


    //INTERVAL
    setInterval(() => {
        const newPageItems = Array.from(document.getElementsByClassName("otdocs-new-page"))
        const newCategoryItems = Array.from(document.getElementsByClassName("otdocs-new-category"))
        const betaPageItems = Array.from(document.getElementsByClassName("otdocs-beta-page"))
        const betaCategoryItems = Array.from(document.getElementsByClassName("otdocs-beta-category"))
        
        //render newPageItems
        newPageItems.forEach((item) => {
            if (!item.firstElementChild.firstElementChild){
                addPageBadge(item,"#ff4545","NEW!")
            }
        })
    
        //render newCategoryItems
        newCategoryItems.forEach((item) => {
            if (!item.firstElementChild.firstElementChild.firstElementChild){
                addCategoryBadge(item,"#ff4545","NEW!")
            }
        })
    
        //render betaPageItems
        betaPageItems.forEach((item) => {
            if (!item.firstElementChild.firstElementChild){
                addPageBadge(item,"#3d84e0","BETA!")
            }
        })
    
        //render betaCategoryItems
        betaCategoryItems.forEach((item) => {
            if (!item.firstElementChild.firstElementChild.firstElementChild){
                addCategoryBadge(item,"#3d84e0","BETA!")
            }
        })
    },100)
})