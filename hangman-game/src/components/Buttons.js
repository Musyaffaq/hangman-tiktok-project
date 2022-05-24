import "./Buttons.css";

function Buttons({
    right,
    updateRight,
    wrong,
    updateWrong,
    answer,
    mistake,
    updateMistake,
}) {
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
        <div className="row mt-3">
            <div className="col text-center">
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
                        style={{ height: "50px", width: "50px" }}
                    >
                        {letter}
                    </button>
                ))}
            </div>
        </div>
        <div className="row mt-3">
            <div className="col text-center">
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
                        style={{ height: "50px", width: "50px" }}
                    >
                        {letter}
                    </button>
                ))}
            </div>
        </div>
        <div className="row mt-3">
            <div className="col text-center">
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
                        style={{ height: "50px", width: "50px" }}
                    >
                        {letter}
                    </button>
                ))}
            </div>
        </div>
    </div>
    )
}

export default Buttons;