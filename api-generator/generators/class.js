///<reference path="../structure.d.ts"/>
import * as helpers from "./helpers.js"

/**
 * @param {ODClassStructure} data 
 * @returns {string}
 */
export function createClass(data){
    const properties = data.children.filter((child) => child.type == "property")
    const methods = data.children.filter((child) => child.type == "method")
    const constructor = data.children.find((child) => child.type == "constructor") ?? null
    const methodsAndConstructor = [...methods]
    if (constructor) methodsAndConstructor.unshift(constructor)


    return (`---
title: ${data.name}
description: "${helpers.parseJSDoc(data.comment,"meta")}"
keywords: [open-ticket, open ticket, api reference, discord ticket bot, class]
sidebar_class_name: otdocs-badge-page otdocs-meta-purple-class
---
<head>
    <link rel="apple-touch-icon" href="/img/logo_vertical.png"/>
</head>
import {C,M,ScaleImage,LinkBlock,InlineLink,FlexHorizontal,Divider,Hex,ApiUrl,ApiBlock} from "@site/src/components/openticket.jsx"
import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"

# ${data.name} <M color="purple">class</M>

## Overview
${helpers.parseJSDoc(data.comment,"markdown")}

<FlexHorizontal>
<div style={{width:"30%"}}>
    #### Properties \\{#overview-properties}
    <ul>
        ${properties.map((prop) => helpers.createTableOfContentsItem(prop.name,"prop")).join("\n        ")}
    </ul>
</div>
<div style={{width:"30%"}}>
    #### Methods \\{#overview-methods}
    <ul>
        ${methodsAndConstructor.map((method) => helpers.createTableOfContentsItem(method.name,"method")).join("\n        ")}
    </ul>
</div>
<div style={{width:"30%"}}>
    #### Other \\{#overview-other}
    <ul>
        <li>**[Open Ticket Defaults](#open-ticket-defaults)**</li>
        <li>**[Plugin Defaults](#plugin-defaults)**</li>
        <li>**[Examples](#examples)**</li>
    </ul>
</div>
</FlexHorizontal>

## Properties
${properties.map((prop) => helpers.createPropertySection(prop)).join("\n")}
## Methods
#### \`constructor()\` <M color="orange">function</M> <ApiBlock><ApiUrl url="class:ODExample" label="api.ODExample"/></ApiBlock> \\{#method-constructor}
Example function 1.

#### Parameters
- **\`param1\`:** <M color="brown">type</M> <ApiBlock><ApiUrl url="type:ODValidId" label="api.ODValidId"/></ApiBlock> - Parameter 1.
- **\`param2\`:** <M color="blue">string</M> <ApiBlock><ApiUrl url="js:string" label="string"/></ApiBlock> - Parameter 2.
- **\`param3?\`:** <M color="blue">string</M> <ApiBlock><ApiUrl url="js:string" label="string"/>|<ApiUrl url="js:undefined" label="undefined"/></ApiBlock> - Parameter 3.

#### <C color="orange">inherited static</C> \`test()\` <M color="orange">function</M> <ApiBlock><ApiUrl url="class:ODExample" label="api.ODExample"/></ApiBlock> \\{#method-test}
Example function 2.

#### Parameters
- **\`param1\`:** <M color="brown">type</M> <ApiBlock><ApiUrl url="type:ODValidId" label="api.ODValidId"/></ApiBlock> - Parameter 1.
- **\`param2\`:** <M color="blue">string</M> <ApiBlock><ApiUrl url="js:string" label="string"/></ApiBlock> - Parameter 2.

## Defaults
:::info defaults
Defaults are manager IDs which are autocompleted by typescript. These are available for both built-in & plugin classes.
- \`ODExample\` has defaults available for the \`ODExampleManager\` (\`ODExampleManagerIds_Default\`).
- You can access them using \`openticket.examples.get(id:ODValidId)\`.
:::

### Open Ticket Defaults
These are defaults defined by Open Ticket itself.
- **\`"openticket:general"\`:** The \`general.json\` config file.
- **\`"openticket:questions"\`:** The \`questions.json\` config file.
- **\`"openticket:options"\`:** The \`options.json\` config file.
- **\`"openticket:panels"\`:** The \`panels.json\` config file.
- **\`"openticket:transcripts"\`:** The \`transcripts.json\` config file.

### Plugin Defaults
These are defaults defined by plugins in the official Open Ticket [**plugin repository**](https://odplugins.dj-dj.be/tree/main/open-ticket).
- <C color="blue">**(OT Example Plugin)**</C> **\`"example-plugin:config"\`:** The \`config.json\` config file.
- <C color="blue">**(OT Example Plugin)**</C> **\`"example-plugin:config"\`:** The \`config.json\` config file.
- <C color="blue">**(OT Example Plugin)**</C> **\`"example-plugin:config"\`:** The \`config.json\` config file.
- <C color="blue">**(OT Example Plugin)**</C> **\`"example-plugin:config"\`:** The \`config.json\` config file.


## Examples

<Tabs>
    <TabItem value="First Example">
    > Test example 1
    > \`\`\`ts title="example.ts" showLineNumbers
    > export class ODJsonConfig extends ODConfig {
    >     //example 1
    > }
    > \`\`\`
    </TabItem>
    <TabItem value="Second Example">
    > Test example 2
    > \`\`\`ts title="example.ts" showLineNumbers
    > export class ODJsonConfig extends ODConfig {
    >     //example 2
    > }
    > \`\`\`
    </TabItem>
</Tabs>
`)
}