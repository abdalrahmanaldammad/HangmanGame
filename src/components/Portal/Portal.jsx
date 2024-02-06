import React from "react";
import style from "./style.module.css";
import ReactDOM from "react-dom";
import sadImg from "../../images/lost.gif";
import victory from "../../images/victory.gif";
import { wordList } from "../../word";
import { keyboard } from "@testing-library/user-event/dist/keyboard";
const Portal = ({
  model,
  setModel,
  setCurrword,
  setWronGuesse,
  currword,
  setLetter,
  setKeyboard,
  keyboard,
}) => {
  let { flag, state } = model;
  const handlClick = () => {
    setModel({ flag: false, state: "" });
    setLetter(new Set());
    setCurrword(wordList[Math.floor(Math.random() * wordList.length)]);
    setWronGuesse(0);
    setKeyboard({ buttons: [...Array(26).keys()], key: Math.random() });
  };
  console.log(currword);
  return ReactDOM.createPortal(
    <>
      <div className={`${style["portal"]} ${flag ? style["show"] : ""}`}>
        <div className={style["card"]}>
          <img src={state === "loozer" ? sadImg : victory} alt="" />
          <h2 style={state == "loozer" ? { color: "red" } : { color: "blue" }}>
            {state === "loozer" ? "Game over" : "Congratulations"}
          </h2>
          {state === "loozer" && (
            <h3>
              the correct word was{" "}
              <b style={{ fontSize: "22px", color: "blue" }}>{currword.word}</b>
            </h3>
          )}
          <button onClick={handlClick}>
            {state === "loozer" ? "try again" : "play again"}
          </button>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Portal;
