import "./Buttons.css";

function Buttons({
    right,
    updateRight,
    wrong,
    updateWrong,
    mistake,
    updateMistake,
}) {
    let answer = "";

    if (sessionStorage.getItem("word")) {
        answer = sessionStorage.getItem("word");
    }
    const handleGuess = (e) => {
        if (!answer.split("").includes(e.target.value)) {
            updateMistake(mistake + 1);
            updateWrong(new Set(wrong).add(e.target.value));
        } else {
            updateRight(new Set(right).add(e.target.value));
        }
    };

    return (
        <div className="container">
            <div className="keyboard_buttons row mt-3">
                {"QWERTYUIOP".split("").map((letter) => (
                    <button
                        type="button"
                        value={letter}
                        disabled={right.has(letter) || wrong.has(letter)}
                        onClick={handleGuess}
                        className={
                            "ms-2 btn btn-lg " +
                            (wrong.has(letter)
                                ? "btn-danger"
                                : right.has(letter)
                                ? "btn-success"
                                : "btn-outline-dark")
                        }
                        style={{
                            height: "8vw",
                            width: "8vw",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        {letter}
                    </button>
                ))}
            </div>
            <div className="keyboard_buttons row mt-3">
                {"ASDFGHJKL".split("").map((letter) => (
                    <button
                        type="button"
                        value={letter}
                        disabled={right.has(letter) || wrong.has(letter)}
                        onClick={handleGuess}
                        className={
                            "ms-2 btn btn-lg " +
                            (wrong.has(letter)
                                ? "btn-danger"
                                : right.has(letter)
                                ? "btn-success"
                                : "btn-outline-dark")
                        }
                        style={{
                            height: "8vw",
                            width: "8vw",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        {letter}
                    </button>
                ))}
            </div>
            <div className="keyboard_buttons row mt-3">
                {"ZXCVBNM".split("").map((letter) => (
                    <button
                        type="button"
                        value={letter}
                        disabled={right.has(letter) || wrong.has(letter)}
                        onClick={handleGuess}
                        className={
                            "ms-2 btn btn-lg " +
                            (wrong.has(letter)
                                ? "btn-danger"
                                : right.has(letter)
                                ? "btn-success"
                                : "btn-outline-dark")
                        }
                        style={{
                            height: "8vw",
                            width: "8vw",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        {letter}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Buttons;
