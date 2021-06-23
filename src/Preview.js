import React from 'react'
import marked from 'marked'
import parse from 'html-react-parser'

const inLineStyle = {
    overflow: 'hidden',
    overflowY: 'scroll'
}

export default class Preview extends React.Component {


    render() {
        const markdown = parse(marked(this.props.currentValue))

        return (
            <div className="Preview">
                <h2 className="text-header">Previewer</h2>
                <div style={inLineStyle} id="preview" className="text-area" type='text-area'>{markdown}</div>
            </div>
        )
    }
}