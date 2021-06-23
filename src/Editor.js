import React from 'react'

export default class Editor extends React.Component{

    render() {

        return (
            <div className="Editor">
                <h2 className="text-header">Editor</h2>
                <textarea id="editor" onChange={this.props.inputHandler} value={this.props.currentValue}
                    className="text-area" type='text-area' />
            </div>
        )
    }
}