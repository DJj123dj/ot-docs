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
    return (`<li>**[\`${name}\`](#${prefix}-${name.replaceAll(":","-")})**</li>`)
}

/**@param {ODPropertyStructure} prop  */
export function createPropertySection(prop){
    const markdownData = getMarkdownDetailsFromType(prop.details)
    const staticText = prop.static ? `<C color="${markdownData.color}">static</C> ` : ""
    const optionalText = prop.optional ? `<C color="${markdownData.color}">optional</C> ` : ""
    const readonlyText = prop.readonly ? `<C color="${markdownData.color}">readonly</C> ` : ""
    const protectedText = prop.protected ? `<C color="${markdownData.color}">protected</C> ` : ""
    const inheritedText = prop.inherited ? `<C color="${markdownData.color}">inherited</C> ` : ""
    const prefixTexts = inheritedText+staticText+readonlyText+optionalText+protectedText

    return (`#### ${prefixTexts}\`${prop.name}\` <M color="${markdownData.color}">${markdownData.type}</M> ${getMarkdownApiBlock(prop.details)} \\{#prop-${prop.name.replaceAll(":","-")}}
${parseJSDoc(prop.comment,"markdown")}

> [**View Source**](${getMarkdownSourceUrl(prop.source)})
`)
}

/**
 * @param {string} name 
 * @param {ODValidElementStructure} prop  */
export function createMethodParamSection(name,prop){
    const markdownData = getMarkdownDetailsFromType(prop)
    return (`- **\`${name}\`:** <M color="${markdownData.color}">${markdownData.type}</M> ${getMarkdownApiBlock(prop)} - Parameter Description Lorem Ipsum.`)
}

/**@param {ODMethodStructure|ODConstructorStructure} prop  */
export function createMethodSection(prop){
    const staticText = prop.static ? `<C color="orange">static</C> ` : ""
    const optionalText = prop.optional ? `<C color="orange">optional</C> ` : ""
    const readonlyText = prop.readonly ? `<C color="orange">readonly</C> ` : ""
    const protectedText = prop.protected ? `<C color="orange">protected</C> ` : ""
    const inheritedText = prop.inherited ? `<C color="orange">inherited</C> ` : ""
    const prefixTexts = inheritedText+staticText+readonlyText+optionalText+protectedText

    return (`#### ${prefixTexts}\`${prop.name}()\` <M color="orange">function</M> ${getMarkdownApiBlock(prop.details.returns)} \\{#method-${prop.name.replaceAll(":","-")}}
${parseJSDoc(prop.comment,"markdown")}

${(prop.details.parameters.length > 0) ? `<details>
<summary>**View Parameters (${prop.details.parameters.length})**</summary>
${prop.details.parameters.map((p) => createMethodParamSection(p.name,p.details)).join("\n")}
</details>` : ""}

> [**View Source**](${getMarkdownSourceUrl(prop.source)})
`)
}

/**@param {ODEnumerableStructure} prop  */
export function createEnumerableSection(prop){
    return `- **[\`${prop.name}\`](${getMarkdownSourceUrl(prop.source)}):** ${parseJSDoc(prop.comment,"markdown")}`
}

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
    if (prop.type == "primitive" || prop.type == "internal" || prop.type == "literal" || prop.type == "reference" || prop.type == "typeParam" || prop.type == "index" || prop.type == "external" || prop.type == "template" || prop.type == "object") return getMarkdownApiUrl(prop)
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

    }else if (prop.type == "object"){
        const paramsString = prop.children.map((p) => p.name+":"+(p.details ? getMarkdownApiUrl(p.details) : "unknown")).join(", ")
        return `\\{${paramsString}\\}`

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

    }else if (prop.type == "keyof"){
        return "keyof "+encapsulateNonPrimitives(prop.child)

    }else if (prop.type == "readonly"){
        return "readonly "+encapsulateNonPrimitives(prop.child)

    }else if (prop.type == "unique"){
        return "unique "+encapsulateNonPrimitives(prop.child)

    }else if (prop.type == "rest"){
        return "..."+encapsulateNonPrimitives(prop.child)

    }else if (prop.type == "tuple"){
        return "["+prop.children.map((ch) => encapsulateNonPrimitives(ch)).join(", ")+"]"

    }else if (prop.type == "optional"){
        return encapsulateNonPrimitives(prop.child)+"?"

    }else if (prop.type == "conditional"){
        return encapsulateNonPrimitives(prop.checker)+" extends "+encapsulateNonPrimitives(prop.extends)+" ? "+encapsulateNonPrimitives(prop.trueValue)+" : "+encapsulateNonPrimitives(prop.falseValue)

    }else if (prop.type == "query"){
        return "typeof "+encapsulateNonPrimitives(prop.target)

    }else if (prop.type == "mapped"){
        return "["+prop.parameterName+" in "+encapsulateNonPrimitives(prop.parameter)+"]: "+encapsulateNonPrimitives(prop.template)

    }else if (prop.type == "predicate"){
        return prop.name+" is "+encapsulateNonPrimitives(prop.target)

    }else if (prop.type == "template"){
        return '"'+prop.head+prop.tails.map((p) => "${"+encapsulateNonPrimitives(p.element)+"}"+p.text).join("")+'"'

    }else return "(OTDOCS:unknown)"
    //TODO TYPE ARGUMENTS!!!
    //TODO TYPE ARGUMENTS!!!
    //TODO TYPE ARGUMENTS!!!
    //TODO TYPE ARGUMENTS!!!
}

/**@param {string|null} source  */
export function getMarkdownSourceUrl(source){
    if (!source) return "https://otgithub.dj-dj.be"
    const splittedSource = source.split(":")
    const newSource = splittedSource[0]+"#L"+splittedSource[1]
    return `https://otgithub.dj-dj.be/tree/main/${newSource}`
}

/**==== TODO ====
 * - parse JSDoc description (when starting with ## SomeClass `class`)
 * - create...() for all types of properties, enumerables, constructors, methods & more!
 * - create...Summary() => create the summary shown in the top of the page of all methods, properties, etc (different for different types)
 */