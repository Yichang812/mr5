import React from 'react';
import ReactDOM from 'react-dom';
import {UnControlled as CodeMirror} from 'react-codemirror2'
require('./global-scss/global.scss');
require('./global-scss/mobile/global.scss');
require('./index.css');
require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('codemirror/mode/htmlmixed/htmlmixed');

const defaults = {
	button: 
	'<button class="btn">Hello</button> \n<button class="btn" disabled>Disabled Button</button>'
};

class App extends React.Component{
	constructor(props) {
		super(props);
		this.state ={
			html: defaults.button,
		}
	}
	render() {
		let options = {
			lineNumbers: true,
			mode: 'htmlmixed',
			theme: 'material'
		};
		return (
			<div className="b-playground">
				<div className="b-playground__preview--wrapper">
					<div className="b-playground__preview" dangerouslySetInnerHTML={{__html: this.state.html}} />
				</div>
				<div className="b-playground__editor--wrapper">
					<CodeMirror 
					className="b-playground__editor" 
					value={defaults.button} 
					  onChange={(editor, data, value) => {
						this.setState({html: value});
					  }}
					options={options} />
				</div>
			</div>        
		);
	}
};

ReactDOM.render(<App />, document.getElementById('app'));