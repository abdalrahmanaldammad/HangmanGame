import React, { useEffect, useRef, useState } from "react";
import style from "./style.module.css";
import HangmanBox from "../HangmanBox/HangmanBox";
import GameBox from "../GameBox/GameBox";
import { wordList } from "./../../word";
import Portal from "../Portal/Portal";
const HangmanGame = () => {
  let [currword, setCurrword] = useState(function () {
    return wordList[Math.floor(Math.random() * wordList.length)];
  });
  let [wrongGuesse, setWronGuesse] = useState(0);
  let [letter, setLetter] = useState(new Set());
  let [model, setModel] = useState({ flag: false, state: "" });
  let [keyboard, setKeyboard] = useState({
    buttons: [...Array(26).keys()],
    key: true,
  });
  useEffect(() => {
    if (wrongGuesse === 6) {
      setModel({ flag: true, state: "loozer" });
    }
  }, [wrongGuesse]);

  return (
    <>
      <Portal
        setLetter={setLetter}
        model={model}
        setModel={setModel}
        setCurrword={setCurrword}
        currword={currword}
        res
        setWronGuesse={setWronGuesse}
        setKeyboard={setKeyboard}
        keyboard
      />
      <div className={style["container"]}>
        <HangmanBox wrongGuesses={wrongGuesse} />
        <GameBox
          setModel={setModel}
          wrongGuesse={wrongGuesse}
          setWronGuesse={setWronGuesse}
          currword={currword}
          letter={letter}
          setLetter={setLetter}
          keyboard={keyboard}
        />
      </div>
    </>
  );
};

export default HangmanGame;
