import React, { useEffect } from "react";
import style from "./style.module.css";
const GameBox = ({
  currword,
  setWronGuesse,
  wrongGuesse,
  setModel,
  letter,
  setLetter,
  keyboard,
}) => {
  let { word, hint } = currword;
  let currwordLen = new Set(word).size;
  const handelClick = (e, l) => {
    if (!word.includes(l.toLowerCase())) {
      setWronGuesse((c) => c + 1);
    } else {
      setLetter(new Set([...letter, l]));
    }
    e.target.disabled = true;
  };
  useEffect(() => {
    if (currwordLen === letter.size) {
      setModel({ flag: true, state: "succuss" });
    }
  }, [letter, setLetter]);
  console.log(word);
  return (
    <div className={style["game-box"]}>
      <ul className={style["word-display"]}>
        {word?.split("").map((e, i) => {
          if (letter.has(e.toUpperCase())) {
            return (
              <li
                key={`${e} ${i}`}
                className={`${style["letter"]} ${style["guessed"]}`}
              >
                {e}
              </li>
            );
          } else {
            return <li key={`${e} ${i}`} className={style["letter"]}></li>;
          }
        })}
      </ul>
      <div className={style["hint"]}>
        <p>{hint}</p>
      </div>
      <div className={style["guesses"]}>
        <p>
          the number of wrong answer is <b> {wrongGuesse}/6</b>
        </p>
      </div>
      <div className={style["keyboard"]} key={keyboard.key}>
        {keyboard.buttons.map((i, j) => {
          return (
            <button
              onClick={(e) => handelClick(e, String.fromCharCode(i + 65))}
              key={`${i} ${j}`}
            >
              {String.fromCharCode(i + 65)}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default GameBox;
