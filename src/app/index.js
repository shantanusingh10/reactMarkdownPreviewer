import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
var marked = require('marked');

class App extends Component {
	
	constructor(){
		super();

		this.state = {
			input: '# Heading\n\n## Sub-heading\n\n### Another deeper heading\n\nText attributes _italic_, *italic*, __bold__, **bold**, `monospace`.\n\nHorizontal rule:\n\n---\n\nBullet list:\n* apples\n* oranges\n* pears\n\nNumbered list:\n1. apples\n2. oranges\n3. pears\n\nA [link](http://example.com).'
		}
	}

	onInputChange(event){
		let currinput = event.target.value;
		this.setState({input: currinput})
	}

	MarkIt(){
		return  {__html:marked(this.state.input, {sanitize: true})};
	}

	render(){
	return (
			<div className="row" id="container">
				<h1 id="heading1">Markdown Previewer</h1>
				<div id="inputcontainer">
					<span id="input">Input</span>
					<textarea 
						value = {this.state.input}
						onChange = {this.onInputChange.bind(this)}
						>
					</textarea>
				</div>
				<div id="outputcontainer">
					<span id="output">Output</span>
					<div id="display" dangerouslySetInnerHTML={this.MarkIt()}>
					
					</div>
				</div>
		</div>);
	}
}

ReactDOM.render(<App />,document.querySelector("#container"));