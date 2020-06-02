import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonPad from './Components/ButtonPad';
import PropTypes from 'prop-types';

class App extends Component {
	static defaultProps = {
		count: 0
	};

	static propTypes = {
		count: PropTypes.any
	};
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h2>Adam's Counter App</h2>
				</header>
				<div id="wrapper">
					<div id="main">
						<Counter />
						<div>
							<br></br>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
