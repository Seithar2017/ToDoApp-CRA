import React, { Component } from "react";
import "./styles/App.css";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";

class App extends Component {
  state = {
    tasks: [
      {
        id: 1,
        text: "Task1",
        done: true,
        doByDate: "",
        finishedAtDate: "2018-05-10",
        important: false,
        preview: "",
      },
      {
        id: 2,
        text: "Task2",
        done: false,
        doByDate: "2019-05-10",
        finishedAtDate: "",
        important: false,
        preview: "",
      },
      {
        id: 3,
        text: "Task3",
        done: false,
        doByDate: "2017-05-10",
        finishedAtDate: "",
        important: false,
        preview: "",
      },
      {
        id: 4,
        text: "Task4",
        done: false,
        doByDate: "2017-12-12",
        finishedAtDate: "",
        important: false,
        preview: "",
      },
      {
        id: 5,
        text: "Task5",
        done: false,
        doByDate: "2034-05-10",
        finishedAtDate: "",
        important: false,
        preview: "",
      },
      {
        id: 6,
        text: "Task6",
        done: false,
        doByDate: "2019-05-10",
        finishedAtDate: "",
        important: false,
        preview: "",
      },
    ],
  };

  switchPreview = (id) => {
    const index = this.state.tasks.findIndex((task) => task.id === id);
    //THIS IF PREVENTS TRIGGERING ON PARENT WHILE CLICK ON DELETE/DOIT BUTTON IN TASK COMPONENT
    if (index !== -1) {
      const tasks = this.state.tasks;
      if (tasks[index].preview === "") {
        tasks[index].preview = "active";
      } else if (tasks[index].preview === "active") {
        tasks[index].preview = "";
      }
      this.setState({
        tasks,
      });
    } else return;
  };
  doTheTask = (e, id) => {
    e.stopPropagation();
    const date = new Date().toISOString().slice(0, 10);
    const index = this.state.tasks.findIndex((task) => task.id === id);
    const tasks = [...this.state.tasks];
    tasks[index].done = true;
    tasks[index].finishedAtDate = date;
    this.setState({
      tasks,
    });
  };
  addNewTask = (task) => {
    const tasks = this.state.tasks;
    tasks.push(task);
    this.setState({
      tasks,
    });
  };

  deleteTask = (id) => {
    const tasks = this.state.tasks;
    const index = tasks.findIndex((task) => task.id === id);
    tasks.splice(index, 1);
    this.setState({
      tasks,
    });
  };
  render() {
    return (
      <>
        <h1 className="title">To do list</h1>
        <AddTask addTask={this.addNewTask} />
        <TaskList
          do={this.doTheTask}
          tasks={this.state.tasks}
          delete={this.deleteTask}
          switchPreview={this.switchPreview}
        />
      </>
    );
  }
}

export default App;
