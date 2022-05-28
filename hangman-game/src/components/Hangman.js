import React from "react";
import "../App.css";

const Blanks = (props) => {
    console.log(sessionStorage.getItem("word"));
    var word = sessionStorage.getItem("word");

    var string = "";

    if (word !== null) {
        var category_str =
            "The category you have chosen is " +
            sessionStorage.getItem("category") +
            ". Guess the word!";
        string = word
            .split("")
            .map((letter) => (props.right.has(letter) ? letter : " _ "));
    }

    return (
        <div>
            <h4 className="text-center mb-5">{category_str}</h4>
            <h1 className="Hangman-word mt-5"> {string} </h1>
        </div>
    );
};

export default Blanks;
