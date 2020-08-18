import React from "react";
import Task from "./Task";
import "../styles/TaskList.css";

const TaskList = (props) => {
  const done = props.tasks.filter((task) => task.done);
  const undone = props.tasks.filter((task) => !task.done);

  undone.sort((a, b) => {
    if (a.doByDate < b.doByDate) {
      return -1;
    }
    if (a.doByDate > b.doByDate) {
      return 1;
    }
    return 0;
  });
  const tasksDone = done.map((task) => {
    return (
      <Task
        key={task.id}
        text={task.text}
        id={task.id}
        finishedAtDate={task.finishedAtDate}
        done={task.done}
        important={task.important}
        do={props.do}
        delete={props.delete}
        switchPreview={props.switchPreview}
        preview={task.preview}
      />
    );
  });

  const tasksUndone = undone.map((task) => {
    if (!task.done) {
      return (
        <Task
          key={task.id}
          text={task.text}
          id={task.id}
          doByDate={task.doByDate}
          done={task.done}
          important={task.important}
          delete={props.delete}
          do={props.do}
          switchPreview={props.switchPreview}
          preview={task.preview}
        />
      );
    } else return null;
  });
  return (
    <div className="tasks">
      <section className="undone">
        {"Brak Elementów na liście" && tasksUndone}
      </section>
      <section className="done">
        {"Brak Elementów na liście" && tasksDone}
      </section>
    </div>
  );
};

export default TaskList;
