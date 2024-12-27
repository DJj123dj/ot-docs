/**@type {import("prism-react-renderer").PrismTheme} */
const openticketTheme = {
    plain: {
        backgroundColor: "#222",
        color: "#ddd",
        fontStyle: "normal",
        fontWeight: "normal",
        opacity: 100
    },
    styles: [
        {
            types: ["prolog"],
            style: {
                color: "#ddd"
            }
        },
        {
            types: ["comment"],
            style: {
                color: "#5ea340"
            }
        },
        {
            types: ["changed", "keyword", "interpolation-punctuation"],
            style: {
                color: "#3d84e0"
            }
        },
        {
            types: ["number","inserted"],
            style: {
                color: "#35c43a"
            }
        },
        {
            types: ["constant"],
            style: {
                color: "#3d84e0"
            }
        },
        {
            types: ["attr-name", "variable","property"],
            style: {
                color: "#ddd"
            }
        },
        {
            types: ["string", "attr-value", "template-punctuation"],
            style: {
                color: "#f8ba00"
            }
        },
        {
            types: ["tag"],
            style: {
                color: "#3dd5e0"
            }
        },
        {
            types: ["punctuation", "operator"],
            style: {
                color: "#eee"
            }
        },
        {
            types: ["class-name","builtin"],
            style: {
                color: "#3dd5e0"
            }
        },
        {
            types: ["function"],
            style: {
                color: "#ded77a"
            }
        },
        {
            types:["important","deleted","boolean"],
            style: {
                color: "#ff4545"
            }
        },
        {
            types:["regex"],
            style:{
                color:"#7b3de0"
            }
        }
    ]
}

module.exports = openticketTheme