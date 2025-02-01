///<reference path="../structure.d.ts"/>
import * as helpers from "./helpers.js"

/**
 * @param {ODEnumStructure} data 
 * @returns {string}
 */
export function createEnum(data){
    
    return (`---
title: ${data.name}
description: "${helpers.parseJSDoc(data.comment,"meta")}"
keywords: [open-ticket, open ticket, api reference, discord ticket bot, enum]
sidebar_class_name: otdocs-badge-page otdocs-meta-yellow-enum
---
<head>
    <link rel="apple-touch-icon" href="/img/logo_vertical.png"/>
</head>
import {C,M,ScaleImage,LinkBlock,InlineLink,FlexHorizontal,Divider,Hex,ApiUrl,ApiBlock} from "@site/src/components/openticket.jsx"
import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"

# ${data.name} <M color="yellow">enum</M>

## Overview
${helpers.parseJSDoc(data.comment,"markdown")}

<FlexHorizontal>
<div style={{width:"50%"}}>
    #### References \\{#overview-references}
    <ul>
        <li>**<code><ApiUrl url="class:ODId" label="api.ODId"/></code> <M color="purple">class</M>**</li>
        <li>**<code><ApiUrl url="type:ODExampleType" label="api.ODExampleType"/></code> <M color="brown">type</M>**</li>
        <li>**<code><ApiUrl url="interface:ODExampleInterface" label="api.ODExampleInterface"/></code> <M color="gray">interface</M>**</li>
    </ul>
</div>
</FlexHorizontal>

## Members
- **\`ExampleMember1\`:** This is example member 1.
- **\`ExampleMember2\`:** This is example member 2.
- **\`ExampleMember3\`:** This is example member 3.
- **\`ExampleMember4\`:** This is example member 4.
`)
}