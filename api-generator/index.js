///<reference path="structure.d.ts"/>
const fs = require("fs")
const nodepath = require("path")
const { createInterface } = require("./generators/interface")
const { createClass } = require("./generators/class")
const { createType } = require("./generators/type")
const { createEnum } = require("./generators/enum")

//BUILD MARKDOWN
/**@type {ODValidDeclarationStructure[]} */
const data = JSON.parse(fs.readFileSync("./api-generator/result.json").toString())
fs.rmSync("./api-generator/export/",{recursive:true,force:true})

fs.mkdirSync("./api-generator/export/interfaces/",{recursive:true})
fs.mkdirSync("./api-generator/export/classes/",{recursive:true})
fs.mkdirSync("./api-generator/export/types/",{recursive:true})
fs.mkdirSync("./api-generator/export/enums/",{recursive:true})

data.forEach((declaration) => {
    if (declaration.type == "interface"){
        const markdown = createInterface(declaration)
        fs.writeFileSync("./api-generator/export/interfaces/"+declaration.name+".mdx",markdown)

    }else if (declaration.type == "class"){
        const markdown = createClass(declaration)
        fs.writeFileSync("./api-generator/export/classes/"+declaration.name+".mdx",markdown)

    }else if (declaration.type == "type"){
        const markdown = createType(declaration)
        fs.writeFileSync("./api-generator/export/types/"+declaration.name+".mdx",markdown)

    }else if (declaration.type == "enum"){
        const markdown = createEnum(declaration)
        fs.writeFileSync("./api-generator/export/enums/"+declaration.name+".mdx",markdown)

    }
})

//INTERFACES (remove & copy-paste)
fs.readdirSync("./docs/reference/interfaces/").forEach((file) => {
    if (file.endsWith(".mdx")) fs.rmSync(nodepath.join("./docs/reference/interfaces/",file))
})
fs.readdirSync("./api-generator/export/interfaces/").forEach((file) => {
    fs.copyFileSync(nodepath.join("./api-generator/export/interfaces/",file),nodepath.join("./docs/reference/interfaces/",file))
})

//CLASSES (remove & copy-paste)
fs.readdirSync("./docs/reference/classes/").forEach((file) => {
    if (file.endsWith(".mdx")) fs.rmSync(nodepath.join("./docs/reference/classes/",file))
})
fs.readdirSync("./api-generator/export/classes/").forEach((file) => {
    fs.copyFileSync(nodepath.join("./api-generator/export/classes/",file),nodepath.join("./docs/reference/classes/",file))
})

//TYPES (remove & copy-paste)
fs.readdirSync("./docs/reference/types/").forEach((file) => {
    if (file.endsWith(".mdx")) fs.rmSync(nodepath.join("./docs/reference/types/",file))
})
fs.readdirSync("./api-generator/export/types/").forEach((file) => {
    fs.copyFileSync(nodepath.join("./api-generator/export/types/",file),nodepath.join("./docs/reference/types/",file))
})

//ENUMS (remove & copy-paste)
fs.readdirSync("./docs/reference/enums/").forEach((file) => {
    if (file.endsWith(".mdx")) fs.rmSync(nodepath.join("./docs/reference/enums/",file))
})
fs.readdirSync("./api-generator/export/enums/").forEach((file) => {
    fs.copyFileSync(nodepath.join("./api-generator/export/enums/",file),nodepath.join("./docs/reference/enums/",file))
})