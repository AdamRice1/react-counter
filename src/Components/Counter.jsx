import React, { Component } from 'react';
import Display from './Display';
import ButtonPad from './ButtonPad';
import '../App.css';

function Counter() {
	return (
		<div className="counter">
			<Display />
			<ButtonPad />
		</div>
	);
}

export default Counter;
