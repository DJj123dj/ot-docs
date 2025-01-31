///<reference path="structure.d.ts"/>
const fs = require("fs")
const { createInterface } = require("./generators/interface")

/**@type {ODValidDeclarationStructure[]} */
const data = JSON.parse(fs.readFileSync("./api-generator/result.json").toString())
fs.rmSync("./api-generator/export/",{recursive:true,force:true})

data.forEach((declaration) => {
    if (declaration.type == "interface"){
        const markdown = createInterface(declaration)
        fs.writeFileSync("./api-generator/export/interfaces/"+declaration.name+".mdx",markdown)
    }
})