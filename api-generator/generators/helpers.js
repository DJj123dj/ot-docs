///<reference path="../structure.d.ts"/>
//@ts-check
import * as fs from "fs"

/**@type {ODExternalStructure_DiscordJs[]} */
const externalList_DiscordJs = JSON.parse(fs.readFileSync("./api-generator/discordjs-result.json").toString())

/**
 * @param {string} text 
 * @param {string} [replacement] 
 * @returns {string}
 */
export function createDeprecatedNoti(text,replacement){
    const replaceText = replacement ? `**Use \`${replacement}\` instead!**` : ""

    return (`:::danger deprecated
${text}

${replaceText}
:::`)
}

/**
 * @param {string} text 
 * @param {string} version 
 * @returns {string}
 */
export function createExperimentalNoti(text,version){
    const versionText = version ? `**Available for Open Ticket \`${version}\` and above.**` : ""

    return (`:::info experimental
${text}

${versionText}
:::`)
}

/**
 * @param {string} text 
 * @returns {string}
 */
export function createWarningNoti(text){
    return (`:::warning
${text}
:::`)
}

/**
 * @param {string} text 
 * @returns {string}
 */
export function createTipNoti(text){
    return (`:::tip
${text}
:::`)
}

/**
 * 
 * @param {string|null} text 
 * @param {"meta"|"markdown"} mode 
 * @returns {string}
 */
export function parseJSDoc(text,mode){
    if (!text) return "(no description)"
    if (mode == "meta"){
        //generate description for meta tags
        const lines = text.replaceAll("\n\n","\n").split("\n")
        if (lines[0].startsWith("## ")) lines.shift()    
        return lines.slice(0,2).join(" ").replaceAll('"','\\"')

    }else if (mode == "markdown"){
        //generate description for markdown
        let lines = text.split("\n")
        if (lines[0].startsWith("## ")) lines.shift()
        return lines.filter((l) => !l.startsWith("#")).join("\n")
    }else return text
}

/**
 * @param {string} name 
 * @param {string} prefix 
 * @returns 
 */
export function createTableOfContentsItem(name,prefix){
    return (`<li>**[\`${name}\`](#${prefix}-${name})**</li>`)
}

/**@param {ODPropertyStructure} prop  */
export function createPropertySection(prop){
    const markdownData = getMarkdownDetailsFromType(prop.details)
    return (`#### \`${prop.name}\` <M color="${markdownData.color}">${markdownData.type}</M> ${getMarkdownApiBlock(prop.details)} \\{#prop-${prop.name}}
${parseJSDoc(prop.comment,"markdown")}
`)
}
/*

### \`prop1\` <M color="purple">class</M> <ApiBlock><ApiUrl url="class:ODId" label="api.ODId"/></ApiBlock> \\{#prop-prop1}
Example property 1

### <C color="blue">static</C> \`prop2\` <M color="blue">string</M> <ApiBlock><ApiUrl url="js:string" label="string"/></ApiBlock> \\{#prop-prop2}
Example property 2

### <C color="red">inherited</C> \`prop3\` <M color="red">boolean</M> <ApiBlock><ApiUrl url="js:boolean" label="boolean"/></ApiBlock> \\{#prop-prop3}
Example property 3

*/

/**
 * @param {"boolean"|"number"|"string"|"object"|"array"|"class"|"function"|"type"|"interface"|"enum"} type 
 */
export function getMarkdownApiColor(type){
    if (type == "boolean") return "red"
    if (type == "number") return "green"
    if (type == "string") return "blue"
    if (type == "object") return "cyan"
    if (type == "array") return "pink"
    if (type == "class") return "purple"
    if (type == "function") return "orange"
    if (type == "type") return "brown"     
    if (type == "interface") return "gray" 
    if (type == "enum") return "yellow"    
}

/**
 * @param {ODValidElementStructure} prop 
 */
export function getMarkdownDetailsFromType(prop){
    /**@type {"string"|"number"|"boolean"|"object"|"function"|"array"|"class"|"type"|"interface"|"enum"} */
    let type = "type"
    if (prop.type == "function") type = "function"
    else if (prop.type == "array" || prop.type == "tuple") type = "array"
    else if (prop.type == "primitive"){
        if (prop.name == "boolean") type = "boolean"
        else if (prop.name == "string") type = "string"
        else if (prop.name == "number") type = "number"
        else if (prop.name == "object") type = "object"
    }else if (prop.type == "reference"){
        if (prop.target == "class") type = "class"
        else if (prop.target == "interface") type = "interface"
        else if (prop.target == "type") type = "type"
        else if (prop.target == "enum") type = "enum"
    }

    return {type,color:getMarkdownApiColor(type)}
    //TODO else if (prop.type == "function") type = "function"
    //TODO prop.type == ""
}

/**
 * @param {ODValidElementStructure} prop 
 */
export function getMarkdownApiBlock(prop){
    return `<ApiBlock>${getMarkdownApiUrl(prop)}</ApiBlock>`
}

/**
 * @param {ODValidElementStructure} prop 
 */
export function encapsulateNonPrimitives(prop){
    if (prop.type == "primitive" || prop.type == "internal" || prop.type == "literal" || prop.type == "reference") return getMarkdownApiUrl(prop)
    else return "("+getMarkdownApiUrl(prop)+")"
}

/**
 * @param {ODValidElementStructure} prop 
 * @returns {string}
 */
export function getMarkdownApiUrl(prop){
    const getUrl = (url,label) => `<ApiUrl url="${url}" label="${label}"/>`

    if (prop.type == "primitive" || prop.type == "internal" || prop.type == "literal"){
        if (prop.name.toLowerCase() == "boolean") return getUrl("js:boolean","boolean")
        else if (prop.name.toLowerCase() == "string") return getUrl("js:string","string")
        else if (prop.name.toLowerCase() == "number") return getUrl("js:number","number")
        else if (prop.name.toLowerCase() == "object") return getUrl("js:object","object")
        else if (prop.name.toLowerCase() == "array") return getUrl("js:array","Array")
        else if (prop.name.toLowerCase() == "promise") return getUrl("js:promise","Promise")
        else if (prop.name.toLowerCase() == "undefined") return getUrl("js:undefined","undefined")
        else if (prop.name.toLowerCase() == "date") return getUrl("js:date","Date")
        else if (prop.name.toLowerCase() == "function") return getUrl("js:function","Function")
        else if (prop.name.toLowerCase() == "map") return getUrl("js:map","Map")
        else if (prop.name.toLowerCase() == "nan") return getUrl("js:nan","NaN")
        else if (prop.name.toLowerCase() == "set") return getUrl("js:set","Set")
        else if (prop.name.toLowerCase() == "symbol") return getUrl("js:symbol","Symbol")
        else if (prop.name.toLowerCase() == "null") return getUrl("js:null","null")
        else if (prop.name.toLowerCase() == "void") return getUrl("js:void","void")
        else if (prop.name.toLowerCase() == "regexp") return getUrl("js:regex","RegExp")
        else if (prop.name.toLowerCase() == "buffer") return getUrl("js:buffer","Buffer")
        else return prop.name

    }else if (prop.type == "union"){
        return prop.children.map((ch) => encapsulateNonPrimitives(ch)).join("|")

    }else if (prop.type == "intersection"){
        return prop.children.map((ch) => encapsulateNonPrimitives(ch)).join("&")

    }else if (prop.type == "reference"){
        if (prop.target == "class") return getUrl("class:"+prop.name,"api."+prop.name)
        else if (prop.target == "interface") return getUrl("interface:"+prop.name,"api."+prop.name)
        else if (prop.target == "type") return getUrl("type:"+prop.name,"api."+prop.name)
        else if (prop.target == "enum") return getUrl("enum:"+prop.name,"api."+prop.name)
        else return prop.name
        
    }else if (prop.type == "array"){
        return encapsulateNonPrimitives(prop.child)+"\[\]"
        
    }else if (prop.type == "function"){
        const paramsString = prop.parameters.map((p) => p.name+":"+getMarkdownApiUrl(p.details)).join(", ")
        return `(${paramsString}) => `+getMarkdownApiUrl(prop.returns)

    }else if (prop.type == "index"){
        return encapsulateNonPrimitives(prop.object)+"\["+encapsulateNonPrimitives(prop.index)+"\]"

    }else if (prop.type == "external"){
        if (prop.package == "discord.js" || prop.package.startsWith("@discordjs/")){
            const extProp = externalList_DiscordJs.find((t) => t.name == prop.name)
            if (!extProp) return "discord."+prop.name
            const type = extProp.type == "class" ? "Class" : extProp.type == "interface" ? "Interface" : extProp.type == "type" ? "TypeAlias" : extProp.type == "enum" ? "Enum" : extProp.type == "function" ? "Function" : "Variable"
            const url = `https://discord.js.org/docs/packages/${extProp.package}/main/${extProp.name}:${type}`
            return getUrl(url,"discord."+prop.name)
        }else return prop.package.replaceAll(".","")+"."+prop.name 

    }else if (prop.type == "typeParam"){
        return prop.name

    }else return "(todo)"
    //TODO TYPE ARGUMENTS!!!
    //TODO TYPE ARGUMENTS!!!
    //TODO TYPE ARGUMENTS!!!
    //TODO TYPE ARGUMENTS!!!
}

/**==== TODO ====
 * - parse JSDoc description (when starting with ## SomeClass `class`)
 * - create...() for all types of properties, enumerables, constructors, methods & more!
 * - create...Summary() => create the summary shown in the top of the page of all methods, properties, etc (different for different types)
 */