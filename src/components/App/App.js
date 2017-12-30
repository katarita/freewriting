import React, { Component } from 'react';
import AddNote from './../AddNote/AddNote';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      notes: JSON.parse(localStorage.getItem("notes"))
    }
  }
  // componentDidMount() {
  //   let savedNotes = JSON.parse(localStorage.getItem("notes"));
  //   console.log('savedNotes', savedNotes);
  //   this.setState = {
  //     notes: savedNotes
  //   }
  // }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.notes !== this.state.notes) {
      localStorage.setItem("notes", JSON.stringify(nextState.notes));
    }
  }


  addNote (note, symbols, words) {
    let date = new Date();
    let id = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

    this.setState({
      notes: {
        ...this.state.notes,
        [id]: {
          note: note,
          symbols: symbols,
          words: words
        }
      }
    });
  }

  render () {
    return (
      <div className="App">
        <div className="container">
          <h1>Clear your mind. Write down your thoughts.</h1>
          <AddNote notes={this.state.notes} addNote={this.addNote.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;
