import React from "react";

const Artical = (props) => {
    return (
        <artical>
            <img src={props.src} alt="dog" />
            <img src={props.src1} alt="dog" />
            <img src={props.src2} alt="dog" />
        </artical>
    )
}

export default Artical;