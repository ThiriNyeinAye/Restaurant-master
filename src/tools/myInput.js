import React from 'react'
import { fsc } from '../helper/fontControlHelper'
import withMedia from 'react-media-query-hoc/dist/with-media'

const MyInput = props => {
    const { media } = props;
    const { style, className, value, type, id, height, width} = props;
    const defaultStyle = {
        width: width === undefined? "100%" : width,
        padding: 20,
        fontSize: 15,
        fontWeight:"bold",
        height: `${height}`,
        backgroundColor: "rgba(252, 252, 252, 0.4)",
        border:"none",
        color:"black"
    };
    const userStyle = style === undefined ? {} : style;

    return(
        <input
            id={id}
            style={{
                ...defaultStyle,
                ...userStyle,
                boxShadow: "none",
                borderRadius: 20,
            }}
            className={`form-control form-rounded ${className}`}
            type={type === undefined ? "text" : `${type}`}
            value={value}
         />
    )
}

export default withMedia(MyInput)