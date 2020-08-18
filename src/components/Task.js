import React from "react";
import "../styles/Task.css";

const Task = (props) => {
  const style = { fontWeight: "bold" };
  return (
    <>
      <p
        style={props.important ? style : null}
        onClick={() => {
          props.switchPreview(props.id);
        }}
        className={"task " + props.preview}
      >
        {props.preview === "active" ? props.text : props.title} ---
        {props.done
          ? `Wykonano:  ${props.finishedAtDate}`
          : `Wykonać do: ${props.doByDate}`}
        {props.preview === "active" ? null : (
          <button className="delete" onClick={() => props.delete(props.id)}>
            X
          </button>
        )}
        {props.done || props.preview === "active" ? null : (
          <button
            onClick={(e) => {
              props.do(e, props.id);
            }}
            className="do"
          >
            DoIT
          </button>
        )}
      </p>
    </>
  );
};

export default Task;
