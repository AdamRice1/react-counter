import React, { Component } from 'react';
import Display from './Display';
import ButtonPad from './ButtonPad';
import '../App.css';
import App from '../App';

function Counter() {
	return (
		<div className="counter">
			<Display />
			<ButtonPad />
		</div>
	);
}

export default Counter;
