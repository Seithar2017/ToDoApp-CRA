import React, { Component } from "react";
import "../styles/AddTask.css";

class AddTask extends Component {
  counter = 1000;
  state = {
    id: this.counter,
    text: "",
    done: false,
    doByDate: "",
    finishedAtDate: "",
    important: false,
    preview: "",
  };

  handleChange = (e) => {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value,
    });
  };

  handleCheckBox = (e) => {
    console.log(e.target.checked);
    this.setState({
      important: e.target.checked,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.doByDate === "") {
      alert("Podaj datę, do kiedy chcesz wykonać zadanie");
      return 0;
    }

    if (this.state.text === "") {
      alert("Wpisz treść zadania");
      return 0;
    }
    e.preventDefault();
    this.counter++;
    this.props.addTask(this.state);
    this.setState({
      id: this.counter,
      text: "",
      doByDate: "",
    });
  };
  componentDidUpdate() {}
  render() {
    return (
      <form id="addTaskForm" onSubmit={this.handleSubmit}>
        <label id="newTaskLabel" htmlFor="newTask">
          Dodaj nowe zadanie:
        </label>
        <textarea
          type="textarea"
          id="newTaskText"
          placeholder="Wpisz tutaj treść zadania, które chcesz dodać do listy"
          value={this.state.text}
          onChange={this.handleChange}
          name="text"
        />
        <input
          id="dateInput"
          type="date"
          min="2020-08-17"
          value={this.state.doByDate}
          onChange={this.handleChange}
          name="doByDate"
        />
        <label id="importantText" htmlFor="important">
          Ważne
          <input
            type="checkbox"
            onChange={this.handleCheckBox}
            checked={this.state.important}
          />
        </label>

        <button className="addTask">Dodaj</button>
      </form>
    );
  }
}

export default AddTask;
