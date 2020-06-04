import React, { Component } from 'react';
import Display from './Display';
import ButtonPad from './ButtonPad';
import '../App.css';
import App from '../App';

export class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 0
		};
	}
	increment() {
		this.setState({ value: this.state.value + 1 });
	}
	decrement() {
		this.setState({ value: this.state.value - 1 });
	}
	reset() {
		this.setState({ value: (this.state.value = 0) });
	}
	switch() {
		let x = [2, 5, 10];
		let y = Math.floor(Math.random() * Math.floor(3));
		console.log(y);
		this.setState({ value: this.state.value + x[y] });
	}
	render() {
		return (
			<div className="counter">
				<Display />
				<ButtonPad
					value={this.state.value}
					increment={this.increment.bind(this)}
					decrement={this.decrement.bind(this)}
					reset={this.reset.bind(this)}
					switch={this.switch.bind(this)}
				/>
			</div>
		);
	}
}

export default Counter;
