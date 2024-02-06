import React from "react";
import style from "./style.module.css";
import hangmanImage_0 from "../../images/hangman-0.svg";
import hangmanImage_1 from "../../images/hangman-1.svg";
import hangmanImage_2 from "../../images/hangman-2.svg";
import hangmanImage_3 from "../../images/hangman-3.svg";
import hangmanImage_4 from "../../images/hangman-4.svg";
import hangmanImage_5 from "../../images/hangman-5.svg";
import hangmanImage_6 from "../../images/hangman-6.svg";
const HangmanBox = ({wrongGuesses}) => {
  let a = {
    0: hangmanImage_0,
    1: hangmanImage_1,
    2: hangmanImage_2,
    3: hangmanImage_3,
    4: hangmanImage_4,
    5: hangmanImage_5,
    6: hangmanImage_6,
  };
  return (
    <div className={style["hang-man"]}>
      <img src={a[wrongGuesses]} alt="#" />
      <h4 className={style["text"]}>Hangman</h4>
    </div>
  );
};

export default HangmanBox;
