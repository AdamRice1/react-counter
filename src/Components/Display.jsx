import React, { useState, Component } from 'react';
import '../App.css';
import ButtonPad from './ButtonPad';
import PropTypes from 'prop-types';

//import count from 'ButtonPad';
// function Display(props) {
//     // const [display,setDisplay] = useState(0);
// }

export class Display extends Component {
	static defaultProps = {
		count: 0
	};

	static propTypes = {
		count: PropTypes.any
	};
	render() {
		return (
			<section className="display">
				<h4>The Current Count is</h4> <br></br>
			</section>
		);
	}
}

export default Display;
