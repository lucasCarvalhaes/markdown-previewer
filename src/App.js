import React from 'react';
import './App.css';
import Editor from './Editor.js'
import Preview from './Preview.js'
import { placeholder } from './placeholder.js'


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      input: ''
    }

    this.inputHandler = this.inputHandler.bind(this)
  }

  componentDidMount() {
    this.setState({
      input: placeholder.text
    })
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
