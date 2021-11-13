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
                <h1> Tokio šuns veislės nėra </h1>
            </div>
        )
    }

}

export default Artical;
