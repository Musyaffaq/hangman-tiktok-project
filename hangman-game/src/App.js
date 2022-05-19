import "./App.css";
import { useState } from "react";
import Buttons from "./components/Buttons";

function App() {
    const [mistake, setMistake] = useState(0);
    const [right, setRight] = useState(new Set());
    const [wrong, setWrong] = useState(new Set());
    const [answer, setAnswer] = useState("randomWord".toUpperCase());
    // {answer} is the random word chosen
    // replace "randomWord".toUpperCase() with random word function
    // if user guesses a letter correctly (clicks a button), letter is added into {right} prop
    // else, letter is added into {wrong} prop
    // {mistake} is the count of the number of wrong guesses the user has made. It will increase by 1 whenever the user makes a wrong guess.
    // whoever is making the win/lose functionality can make use of the {mistake} prop

    return (
        <div className="App">
            <h1>Hangman Game</h1>
            {/* add hangman */}
            {/* add blanks */}
            <Buttons
                right={right}
                updateRight={setRight}
                wrong={wrong}
                updateWrong={setWrong}
                answer={answer}
                mistake={mistake}
                updateMistake={setMistake}
            />
            {/* add reset */}
        </div>
    );
}

export default App;
