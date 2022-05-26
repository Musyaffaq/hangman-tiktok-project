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
    };

    // to reset the gamesWon and gamesPlayed
    // localStorage.gamesWon = 0;
    // localStorage.gamesPlayed = 0;


    // store the gamesWon and gamesPlayed
    if (localStorage.gamesWon) {
    } else {
        localStorage.gamesWon = 0;
    };

    if (localStorage.gamesPlayed) {
    } else {
        localStorage.gamesPlayed = 0;
    };

    // increase gamesWon and gamesPlayed accordingly
    if (ans_letters.size !== 0 && right.size >= ans_letters.size) {
        localStorage.gamesPlayed = parseInt(localStorage.gamesPlayed) + 1;
        localStorage.gamesWon = parseInt(localStorage.gamesWon) + 1;
    } else if (mistake >= maxWrong) {
        localStorage.gamesPlayed = parseInt(localStorage.gamesPlayed) + 1;
    };

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
                <div>
                    <h1>You Win! Good job 👏🏻</h1>
                    <h2>Games Played: {localStorage.gamesPlayed}</h2>
                    <h2>Win Percentage: {localStorage.gamesPlayed !== '0' ? Math.round((localStorage.gamesWon)/localStorage.gamesPlayed*100) : 0}%</h2>
                </div>
            ) : mistake >= maxWrong ? (
                <div>
                    <h1>Aww, you can do better! 💪🏻</h1>
                    <h2>Games Played: {localStorage.gamesPlayed}</h2>
                    <h2>Win Percentage: {localStorage.gamesPlayed !== '0' ? Math.round((localStorage.gamesWon)/localStorage.gamesPlayed*100) : 0}%</h2>
                </div>
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
