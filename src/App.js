import React from 'react';
import './App.css';
import Editor from './Editor.js'
import Preview from './Preview.js'


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      input: ''
    }

    this.inputHandler = this.inputHandler.bind(this)
  }

  inputHandler = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  render() {
    return (
      <div className="App" >
        <Editor inputHandler={this.inputHandler} currentValue={this.state.input} />
        <Preview currentValue={this.state.input} />
      </div>
    )
  }
}

export default App;
