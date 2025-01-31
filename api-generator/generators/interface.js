///<reference path="../structure.d.ts"/>

/**
 * @param {ODInterfaceStructure} data 
 * @returns {string}
 */
export function createInterface(data){
    
    return (`---
title: `+data.name+`
description: Example interface!
keywords: [open-ticket, open ticket, api reference, discord ticket bot, interface]
sidebar_class_name: otdocs-badge-page otdocs-meta-gray-inter
---
<head>
    <link rel="apple-touch-icon" href="/img/logo_vertical.png"/>
</head>
import {C,M,ScaleImage,LinkBlock,InlineLink,FlexHorizontal,Divider,Hex,ApiUrl,ApiBlock} from "@site/src/components/openticket.jsx"
import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"

# `+data.name+` <M color="gray">interface</M>

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

## Overview
Interface description

<FlexHorizontal>
<div style={{width:"30%"}}>
    #### Properties \\{#overview-properties}
    <ul>
        <li>**[\`prop1\`](#prop-prop1)**</li>
        <li>**[\`prop2\`](#prop-prop2)**</li>
        <li>**[\`prop3\`](#prop-prop3)**</li>
    </ul>
</div>
<div style={{width:"30%"}}>
    #### References \\{#overview-references}
    <ul>
        <li>**<code><ApiUrl url="class:ODId" label="api.ODId"/></code> <M color="purple">class</M>**</li>
        <li>**<code><ApiUrl url="type:ODExampleType" label="api.ODExampleType"/></code> <M color="brown">type</M>**</li>
    </ul>
</div>
</FlexHorizontal>

## Properties
### \`prop1\` <M color="purple">class</M> <ApiBlock><ApiUrl url="class:ODId" label="api.ODId"/></ApiBlock> \\{#prop-prop1}
Example property 1

### \`prop2\` <M color="blue">string</M> <ApiBlock><ApiUrl url="js:string" label="string"/></ApiBlock> \\{#prop-prop2}
Example property 2

### \`prop3\` <M color="red">boolean</M> <ApiBlock><ApiUrl url="js:boolean" label="boolean"/></ApiBlock> \\{#prop-prop3}
Example property 3
`)
}