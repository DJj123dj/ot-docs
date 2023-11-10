import React from 'react';

export function Label(params){
    //color selector
    if (params.color == "red"){
        var color = "#ff4545"
    }else if (params.color == "orange"){
        var color = "#ff9f45"
    }else if (params.color == "yellow"){
        var color = "#e0bd0b"
    }else if (params.color == "green"){
        var color = "#35c43a"
    }else if (params.color == "cyan"){
        var color = "#3dd5e0"
    }else if (params.color == "blue"){
        var color = "#3d84e0"
    }else if (params.color == "purple"){
        var color = "#7b3de0"
    }else if (params.color == "pink"){
        var color = "#e03dd0"
    }else if (params.color == "black"){
        var color = "#111111"
    }else if (params.color == "gray"){
        var color = "#999999"
    }else if (params.color == "brown"){
        var color = "#7d5831"
    }else{
        var color = "transparent"
    }

    //return span
    return (
        <span style={{
            backgroundColor:color,
            color:"#e5e5e5",
            paddingLeft:"0.3em",
            paddingRight:"0.3em",
            borderRadius:"0.3em",
            fontWeight:"bold"
        }}>
            {params.children}
        </span>
    )
}