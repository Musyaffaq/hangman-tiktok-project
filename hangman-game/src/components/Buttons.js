function Buttons({
    right,
    updateRight,
    wrong,
    updateWrong,
    answer,
    mistake,
    updateMistake,
}) {
    const letters = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");

    const handleGuess = (e) => {
        if (!answer.split("").includes(e.target.value)) {
            updateMistake(mistake + 1);
            updateWrong(new Set(wrong).add(e.target.value));
        } else {
            updateRight(new Set(right).add(e.target.value));
        }
    };

    return letters.map((letter) => (
        <button
            type="button"
            value={letter}
            disabled={right.has(letter) || wrong.has(letter)}
            onClick={handleGuess}
            className={
                wrong.has(letter)
                    ? "btn btn-danger"
                    : right.has(letter)
                    ? "btn btn-success"
                    : "btn btn-outline-dark"
            }
            style={{ height: "50px", width: "50px" }}
        >
            {letter}
        </button>
    ));
}

export default Buttons;
