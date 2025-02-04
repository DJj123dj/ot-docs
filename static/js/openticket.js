document.addEventListener("DOMContentLoaded",() => {
    setInterval(() => {
        //parse twemoji and set interval for pushstate page loads
        twemoji.parse(document.body,{
            folder: 'svg',
            ext: '.svg',
            base: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/'
        })

        //handle sidebar width in reference
        const expandPaths = [
            "/docs/category/api-events",
            "/docs/category/api-classes",
            "/docs/category/api-interfaces",
            "/docs/category/api-types",
            "/docs/category/api-enums",
            "/docs/category/api-utilities",

            "/docs/reference/events/",
            "/docs/reference/classes/",
            "/docs/reference/interfaces/",
            "/docs/reference/types/",
            "/docs/reference/enums/",
            "/docs/reference/utilities/"
        ]
        if (expandPaths.some((path) => document.location.pathname.startsWith(path))){
            document.documentElement.style.setProperty("--doc-sidebar-width","350px","important")
        }else{
            document.documentElement.style.setProperty("--doc-sidebar-width",null)
        }

        //change color of detail & summary elements
        document.querySelectorAll("details").forEach((el) => {
            el.classList.remove("alert--info")
            el.classList.add("alert--neutral")
        })
    },100)
})

/** SIDEBAR BADGES:
 * - REQUIRED => otdocs-badge-(page/category)
 * - METADATA => otdocs-meta-(color)-(text)
 */

const handleReferenceTextSize = (element,text) => {
    if (["inter","class"].includes(text)){
        element.style.fontSize = "10px"
        element.style.fontWeight = "300"
    }
}

const addPageBadge = (element,color,text) => {
    handleReferenceTextSize(element,text)
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
    spanElement.style.marginRight = "4px"

    textElement.innerHTML = spanElement.outerHTML+textElement.innerHTML
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
})