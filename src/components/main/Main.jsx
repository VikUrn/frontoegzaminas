import React, {useState} from "react";
import Artical from "../artical/Artical";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Main = () => {

    const [dog, setDogPic] = useState( {});
    const clearInput = () => {
        setDogPic(()=> '');
    }

    const [dogBreed, setBreed] = useState();
    const dogHandler = (e) => {
        setBreed(e.target.value)
        console.log(e.target.value);
    }

    const seachDogHandler = (e) => {
        e.preventDefault();
        clearInput ();
        fetch( `https://dog.ceo/api/breed/${dogBreed}/images/random`)
            .then(res => res.json())
            .then(data => setDogPic(data))
    }
    console.log(dog)

    const dogImiges = <Artical mess={dog.message} klaida={dog.status} />

    // const dogImiges = <Artical mess0={dog.message[0]} mess1={dog.message[1]} mess2={dog.message[2]} mess3={dog.message[3]} />

    return (
        <main >
            <Header />
            <form>
                <input type="text" placeholder="Dog breed" onChange={dogHandler}/>
                <button onClick={seachDogHandler} >Get Imige</button>
            </form>
            <div>
                {dogImiges}
            </div>
            <Footer />
        </main>
    )
}

export default Main;
