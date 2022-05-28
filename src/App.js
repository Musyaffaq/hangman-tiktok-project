import "./App.css";
import { React, useState } from "react";
import Buttons from "./components/Buttons";
import ModalCategory from "./components/CategoriesInModal";
import Blanks from "./components/Hangman";

// images
import body1 from "./body/body-1.png";
import body0 from "./body/body-0.png";
import body2 from "./body/body-2.png";
import body3 from "./body/body-3.png";
import body4 from "./body/body-4.png";
import body5 from "./body/body-5.png";
import body6 from "./body/body-6.png";
import lossGif from "./gifs/loss.gif";
import winGif from "./gifs/win.gif";

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

    // body images
    const body = [body0, body1, body2, body3, body4, body5, body6];

    // to reset the gamesWon and gamesPlayed
    // sessionStorage.gamesWon = 0;
    // sessionStorage.gamesPlayed = 0;

    // store the gamesWon and gamesPlayed
    if (sessionStorage.gamesWon) {
    } else {
        sessionStorage.gamesWon = 0;
    }

    if (sessionStorage.gamesPlayed) {
    } else {
        sessionStorage.gamesPlayed = 0;
    }

    // increase gamesWon and gamesPlayed accordingly
    if (ans_letters.size !== 0 && right.size >= ans_letters.size) {
        sessionStorage.gamesPlayed = parseInt(sessionStorage.gamesPlayed) + 1;
        sessionStorage.gamesWon = parseInt(sessionStorage.gamesWon) + 1;
    } else if (mistake >= maxWrong) {
        sessionStorage.gamesPlayed = parseInt(sessionStorage.gamesPlayed) + 1;
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
            <div className="gameBody">
                <br></br>
                <ModalCategory></ModalCategory>
                <img src={body[mistake]}></img>
                <Blanks right={right}></Blanks>
                <br></br>
                <br></br>
                {ans_letters.size !== 0 && right.size >= ans_letters.size ? (
                    <div>
                        <h1>You Win! Good job 👏🏻</h1>
                        <img src={winGif}></img>
                        <h2>Games Played: {sessionStorage.gamesPlayed}</h2>
                        <h2>
                            Win Percentage:{" "}
                            {sessionStorage.gamesPlayed !== "0"
                                ? Math.round(
                                      (sessionStorage.gamesWon /
                                          sessionStorage.gamesPlayed) *
                                          100
                                  )
                                : 0}
                            %
                        </h2>
                    </div>
                ) : mistake >= maxWrong ? (
                    <div>
                        <h1>Aww, you can do better! 💪🏻</h1>
                        <img src={lossGif}></img>
                        <h2>Games Played: {sessionStorage.gamesPlayed}</h2>
                        <h2>
                            Win Percentage:{" "}
                            {sessionStorage.gamesPlayed !== "0"
                                ? Math.round(
                                      (sessionStorage.gamesWon /
                                          sessionStorage.gamesPlayed) *
                                          100
                                  )
                                : 0}
                            %
                        </h2>
                    </div>
                ) : answer !== "" ? (
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
        </div>
    );
}

export default App;
