import './App.css';
import {useEffect, useState} from "react";
import animals from "./animal.js"

function App() {

    const [age, setAge] = useState(0);
    const [animal, setAnimal] = useState(animals[0]);
    const [animalOldMin, setAnimalOldMin] = useState("");
    const [animalOldMax, setAnimalOldMax] = useState("");
    //try a useState to show the bottom label

    // useEffect(() => {
    // }, [animalOldMin]);

    useEffect(() => {
        if (animal !== null) {
            const max = (Math.round((age / animal.maxLifeSpan) * 100) / 100).toLocaleString();
            const min = (Math.round((age / animal.minLifeSpan) * 100) / 100).toLocaleString();
            setAnimalOldMin(`${max}`);
            setAnimalOldMax(`${min}`);
        }
    }, [age, animal]);

    return (
        <div className="App">
            <h1 className={"title"}>Hamster Math</h1>
            <div className={"inputRow"}>
                <input type={"text"} className="ageBox" id={"ageBox"} placeholder={"Age Goes Here!"}/>
                {/*<button className={"goButton"} onClick={() => {*/}
                {/*    setAge(document.getElementById("ageBox").value);*/}
                {/*}}>Get Results!*/}
                {/*</button>*/}
            </div>
            <div className={"buttonBox"}>
                {animals.map(animal => <button className={"animalButton"}
                                               onClick={() => {setAnimal(animal)
                                                   setAge(document.getElementById("ageBox").value)}}>{animal.name}</button>)}
            </div>
            {animalOldMin !== "0" && !isNaN(animal.maxLifeSpan) &&
                <p className={"outputBox"}><b>You are {animalOldMin} - {animalOldMax} {animal.namePlural} old!</b></p>}
            {isNaN(animal.maxLifeSpan) && animalOldMax !== "0" && <p className={"outputBox"}><b>You are {animalOldMax.toLocaleString()} {animal.namePlural} old!</b></p>}
        </div>
    );
}

export default App;
