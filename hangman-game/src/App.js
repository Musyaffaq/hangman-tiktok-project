import "./App.css";
import { React, useState } from "react";
import Buttons from "./components/Buttons";
import ModalCategory from "./components/CategoriesInModal";
import Blanks from "./components/Hangman";

function App() {
    const [mistake, setMistake] = useState(0);
    const [right, setRight] = useState(new Set());
    const [wrong, setWrong] = useState(new Set());

    const maxWrong = 6;

    let answer = "";
    const ans_letters = new Set();

    if (sessionStorage.getItem("word")) {
        answer = sessionStorage.getItem("word");
        answer.split("").forEach((letter) => {
            ans_letters.add(letter);
        });
        console.log(ans_letters);
    }

    // if user guesses a letter correctly (clicks a button), letter is added into {right} prop
    // else, letter is added into {wrong} prop
    // {mistake} is the count of the number of wrong guesses the user has made. It will increase by 1 whenever the user makes a wrong guess.
    // whoever is making the win/lose functionality can make use of the {mistake} prop

    return (
        <div className="App">
            <div style={{ backgroundColor: "#90ee90", padding: "10px" }}>
                <h1>Hangman Game</h1>
            </div>
            <br></br>
            <ModalCategory></ModalCategory>
            <br></br>
            <br></br>
            {/* add hangman */}
            <Blanks right={right}></Blanks>
            <br></br>
            <br></br>
            {ans_letters.size !== 0 && right.size >= ans_letters.size ? (
                <h1>You Win!</h1>
            ) : mistake >= maxWrong ? (
                <h1>You Lose!</h1>
            ) : answer != "" ? (
                <Buttons
                    right={right}
                    updateRight={setRight}
                    wrong={wrong}
                    updateWrong={setWrong}
                    mistake={mistake}
                    updateMistake={setMistake}
                />
            ) : (
                <p></p>
            )}
            {/* add reset */}
        </div>
    );
}

export default App;
