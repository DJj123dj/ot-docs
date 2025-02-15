///<reference path="../structure.d.ts"/>
import * as helpers from "./helpers.js"

/**
 * @param {ODTypeStructure} data 
 * @returns {string}
 */
export function createType(data){

    return (`---
title: ${data.name}
description: "${helpers.parseJSDoc(data.comment,"meta")}"
keywords: [open-ticket, open ticket, api reference, discord ticket bot, type]
sidebar_class_name: otdocs-badge-page otdocs-meta-brown-type
---
<head>
    <link rel="apple-touch-icon" href="/img/logo_vertical.png"/>
</head>
import {C,M,ScaleImage,LinkBlock,InlineLink,FlexHorizontal,Divider,Hex,ApiUrl,ApiBlock} from "@site/src/components/openticket.jsx"
import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"

# ${data.name} <M color="brown">type</M>

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
<div style={{width:"50%"}}>
    #### References \\{#overview-references}
    <ul>
        {/*
        //TODO
        <li>**<code><ApiUrl url="class:ODId" label="api.ODId"/></code> <M color="purple">class</M>**</li>
        <li>**<code><ApiUrl url="interface:ODExampleInterface" label="api.ODExampleInterface"/></code> <M color="gray">interface</M>**</li>
        */}
    </ul>
</div>
</FlexHorizontal>

## Definition
#### ${helpers.getMarkdownApiBlock(data.children[0])} \{#definition-code}
`)
}