///<reference path="../structure.d.ts"/>

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
        const lines = text.split("\n")
        if (lines[0].startsWith("## ")) lines.shift()    
        return lines.join("\n")
    }
}

/**==== TODO ====
 * - parse JSDoc description (when starting with ## SomeClass `class`)
 * - create...() for all types of properties, enumerables, constructors, methods & more!
 * - create...Summary() => create the summary shown in the top of the page of all methods, properties, etc (different for different types)
 */