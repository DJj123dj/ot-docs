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

:::warning under construction
We are still working the **API Reference**! This page might be incomplete or doesn't contain all details!
:::

{/*
:::danger deprecated
This interface has been flagged as deprecated and will be removed in the next version of Open Ticket.

**Use \`SomeOtherInterface\` instead!**
:::

:::info experimental
This interface is flagged as experimental and might not be available in all Open Ticket versions.

**Available for Open Ticket \`v4.0.0\` and above.**
:::

:::warning
This is an example warning for this interface. Explain something here which should require a lot of attention!
:::

:::tip
This is an example tip for this interface. Explain something here which could help when using this interface!
:::
*/}

## Overview
${helpers.parseJSDoc(data.comment,"markdown")}

> [**View Source**](${helpers.getMarkdownSourceUrl(data.source)})

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
${(properties.length > 0) ? "<Divider></Divider>" : ""}
${properties.map((prop) => helpers.createPropertySection(prop)).join("\n<Divider></Divider>\n")}
${(properties.length > 0) ? "<Divider></Divider>" : ""}

## Methods
${(methodsAndConstructor.length > 0) ? "<Divider></Divider>" : ""}
${methodsAndConstructor.map((prop) => helpers.createMethodSection(prop)).join("\n<Divider></Divider>\n")}
${(methodsAndConstructor.length > 0) ? "<Divider></Divider>" : ""}

## Defaults
:::warning under construction
We're still working on this part of the documentation!
:::
{/*
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
*/}

## Examples
:::warning under construction
We're still working on this part of the documentation!
:::
{/*
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
*/}
`)
}