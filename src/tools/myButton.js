import React from 'react'

const MyButton = props => {
    const { text, height, width, style, fontSize, type } = props;
    const defaultStyle = {
        height: `${height === undefined ? "100%" : height}`,
        padding: 8,
        width:  `${width === undefined ? "100%" : width}`,
        backgroundColor: "#c7821c",
        fontSize: "fsc(media, 14)",
        // type: `${type === undefined ? "submit" : `${type}`}`,
        border:"none"
    };
    const userStyle = style === undefined ? {} : style;

    return(
        <button
            style = {{ ...defaultStyle, ...userStyle, borderRadius:20 }}
        >
            {text}
        </button>
    );
}

export default MyButton