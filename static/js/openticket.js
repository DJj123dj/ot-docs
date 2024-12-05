document.addEventListener("DOMContentLoaded",() => {
    //parse twemoji and set interval for pushstate page loads
    setInterval(() => {
        twemoji.parse(document.body,{
            folder: 'svg',
            ext: '.svg',
            base: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/'
        })
    },100)    
})

/** SIDEBAR BADGES:
 * - REQUIRED => otdocs-badge-(page/category)
 * - METADATA => otdocs-meta-(color)-(text)
 */

const addPageBadge = (element,color,text) => {
    const textElement = element.firstElementChild
    if (textElement.querySelector("span")) return

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
    if (textElement.querySelector("span")) return

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


function otdocsHandleBadges(){
    const pageItems = document.querySelectorAll(".otdocs-badge-page")
    const categoryItems = document.querySelectorAll(".otdocs-badge-category")

    function colorToHex(color){
        if (color == "red"){
            return "#ff4545"
        }else if (color == "orange"){
            return "#ff9f45"
        }else if (color == "yellow"){
            return "#e0bd0b"
        }else if (color == "green"){
            return "#35c43a"
        }else if (color == "cyan"){
            return "#39b4bd"
        }else if (color == "blue"){
            return "#3d84e0"
        }else if (color == "purple"){
            return "#7b3de0"
        }else if (color == "pink"){
            return "#e03dd0"
        }else if (color == "black"){
            return "#111111"
        }else if (color == "gray"){
            return "#999999"
        }else if (color == "brown"){
            return "#7d5831"
        }else{
            return "#ffffff"
        }
    }

    pageItems.forEach((item) => {
        let color = "#ffffff"
        let text = "<unknown>"
        item.classList.forEach((c) => {
            if (c.startsWith("otdocs-meta-")){
                const splitted = c.split("-")
                color = colorToHex(splitted[2])
                text = splitted[3]
            }
        })

        addPageBadge(item,color,text)
    })
    categoryItems.forEach((item) => {
        let color = "#ffffff"
        let text = "<unknown>"
        item.classList.forEach((c) => {
            if (c.startsWith("otdocs-meta-")){
                const splitted = c.split("-")
                color = colorToHex(splitted[2])
                text = splitted[3]
            }
        })

        addCategoryBadge(item,color,text)
    })
}

document.addEventListener("DOMContentLoaded",() => {
    setInterval(() => {
        otdocsHandleBadges()
    },100)

    //INTERVAL
    /*
    setInterval(() => {
        const newPageItems = Array.from(document.getElementsByClassName("otdocs-new-page"))
        const newCategoryItems = Array.from(document.getElementsByClassName("otdocs-new-category"))
        
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
    },100)
    */
})