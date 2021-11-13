import React from "react";

const Artical = (props) => {

    if ( props.klaida === "success" ){
        return (
            <article>
                <img src={props.mess} alt="dog" />
                <img src={props.mess} alt="dog" />
                <img src={props.mess} alt="dog" />
                <img src={props.mess} alt="dog" />
            </article>
        )
    } else {
        return (
            <div>
                <h3> Neįveta šuns veislė arba blogai ivesta </h3>
            </div>
        )
    }

}

export default Artical;
