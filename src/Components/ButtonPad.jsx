import React, { Component } from 'react';
import button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

class ButtonPad extends Component {
	state = {
		count: 0
	};
	Upper = () => {
		this.setState({ count: this.state.count + 1 });
		console.log(this.state.count);
	};
	Downer = () => {
		this.setState({ count: this.state.count - 1 });
		console.log(this.state.count);
	};
	render() {
		return (
			<div style={{ display: 'flex', flexDirection: 'column' }} id="pad">
				<div>
					<h1>{this.state.count}</h1>
				</div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row'
						//justifyContent: 'spaceBetween'
					}}
				>
					<button
						style={{ margin: '5px' }}
						type="button"
						className="btn-primary btn"
						onClick={this.Upper}
					>
						Up Button
					</button>
					<button
						style={{ margin: '5px' }}
						onClick={this.Downer}
						type="button"
						className="btn-danger btn"
					>
						Down Button
					</button>
				</div>
			</div>
		);
	}
}
export default ButtonPad;
