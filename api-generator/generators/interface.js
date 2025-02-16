///<reference path="../structure.d.ts"/>
import * as helpers from "./helpers.js"

/**
 * @param {ODInterfaceStructure} data 
 * @returns {string}
 */
export function createInterface(data){
    const properties = data.children


    return (`---
title: ${data.name}
description: "${helpers.parseJSDoc(data.comment,"meta")}"
keywords: [open-ticket, open ticket, api reference, discord ticket bot, interface]
sidebar_class_name: otdocs-badge-page otdocs-meta-gray-inter
---
<head>
    <link rel="apple-touch-icon" href="/img/logo_vertical.png"/>
</head>
import {C,M,ScaleImage,LinkBlock,InlineLink,FlexHorizontal,Divider,Hex,ApiUrl,ApiBlock} from "@site/src/components/openticket.jsx"
import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"

# ${data.name} <M color="gray">interface</M>

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
<div style={{width:"50%"}} className="otdocs-flex-mobile-width">
    #### Properties \\{#overview-properties}
    <ul>
        ${properties.map((prop) => helpers.createTableOfContentsItem(prop.name,"prop")).join("\n        ")}
    </ul>
</div>
<div style={{width:"50%"}} className="otdocs-flex-mobile-width">
    #### References \\{#overview-references}
    <ul>
        {/*
        //TODO
        <li>**<code><ApiUrl url="class:ODId" label="api.ODId"/></code> <M color="purple">class</M>**</li>
        <li>**<code><ApiUrl url="type:ODExampleType" label="api.ODExampleType"/></code> <M color="brown">type</M>**</li>
        */}
    </ul>
</div>
</FlexHorizontal>

## Properties
${(properties.length > 0) ? "<Divider></Divider>" : ""}
${properties.map((prop) => helpers.createPropertySection(prop)).join("\n<Divider></Divider>\n")}
${(properties.length > 0) ? "<Divider></Divider>" : ""}
`)
}