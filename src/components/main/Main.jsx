import React, {useState} from "react";
import Artical from "../artical/Artical";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Main = () => {

    const [dog, setDogPic]=useState([]);
    const dogHandler = (e) => {
        setDogPic(e.target.value)
        console.log(e.target.value);
    }

    const seachDogHandler = (e) => {
        e.preventDefault();
        fetch( `https://dog.ceo/api/breed/${dog}/images/random/3`)
            .then(res => res.json())
            .then(data => console.log(data))
            .then(data => setDogPic(data))
    }

    const dogImige = <Artical src={dog.message[0]} src1={dog.message[1]} src2={dog.message[2]}  />

    return (
        <main >
            <Header />
            <form>
                <input type="text" placeholder="Dog breed" onChange={dogHandler}/>
                <button onClick={seachDogHandler} >Get Imige</button>
            </form>
            <div>
                {dog.status = "success" ? {dogImige} : <h1> Tokios Šuns veislės nėra </h1>}
            </div>
            <Footer />
        </main>
    )
}

export default Main;