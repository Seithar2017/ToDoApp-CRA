import React, { Component } from "react";
import "./styles/App.css";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";

class App extends Component {
  state = {
    tasks: [
      {
        id: 1,
        text:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo laboriosam ut inventore maiores nemo explicabo earum esse, numquam magnam tenetur mollitia provident at, rerum consectetur veritatis labore, sit doloremque quae!1",
        done: true,
        doByDate: "",
        finishedAtDate: "2018-05-10",
        important: false,
        preview: "",
        title: "Task 1",
      },
      {
        id: 2,
        text:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis amet consequuntur, debitis incidunt laboriosam possimus temporibus? Inventore quidem explicabo placeat? Mollitia aut quos nisi. Maiores incidunt eaque officiis beatae dignissimos!2",
        done: false,
        doByDate: "2019-05-10",
        finishedAtDate: "",
        important: false,
        preview: "",
        title: "Task 2",
      },
      {
        id: 3,
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, ullam? At sint, officiis id a, nesciunt praesentium quidem doloremque, consequuntur rerum dolores et voluptas ipsam cupiditate dolore quibusdam fugiat! Quia.3",
        done: false,
        doByDate: "2017-05-10",
        finishedAtDate: "",
        important: false,
        preview: "",
        title: "Task 3",
      },
      {
        id: 4,
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum beatae reiciendis in hic enim voluptatum asperiores ipsum nulla minima. Voluptatum esse dignissimos corporis necessitatibus rerum amet placeat incidunt magni aspernatur!4",
        done: false,
        doByDate: "2017-12-12",
        finishedAtDate: "",
        important: false,
        preview: "",
        title: "Task 4",
      },
    ],
  };

  switchPreview = (id) => {
    const index = this.state.tasks.findIndex((task) => task.id === id);
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
