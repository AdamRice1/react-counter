import React, { Component } from 'react';
import button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import AnimatedNumber from 'react-animated-number';
import PropTypes from 'prop-types';

class ButtonPad extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
			values: [],
			crazy: Math.floor(Math.random() * 500 + 1)
		};
	}
	Upper = () => {
		this.setState({ count: this.state.count + 1 });
		this.setState({ values: this.state.values.concat(this.state.count) });
		this.props.value = this.state.count;
	};
	Downer = () => {
		this.setState({ count: this.state.count - 1 });
		this.setState({ values: this.state.values.concat(this.state.count) });
		console.log(this.state.count);
	};
	Reset = () => {
		this.setState({ count: (this.state.count = 0) });
		this.setState({ values: this.state.values.concat(this.state.count) });
	};
	Custom = () => {
		this.setState({ count: this.state.count + this.state.crazy });
		this.setState({ values: this.state.values.concat(this.state.count) });
	};
	render() {
		return (
			<div style={{ display: 'flex', flexDirection: 'column' }} id="pad">
				<div>
					<h1>
						<AnimatedNumber
							style={{
								transition: '0.8s ease-out',
								transitionProperty: 'background-color, color'
							}}
							frameStyle={perc =>
								perc === 100
									? {}
									: { backgroundColor: '#85dcb8' }
							}
							stepPrecision={0}
							value={this.state.count}
						/>
					</h1>
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
					<button
						style={{ margin: '5px' }}
						type="button"
						className="btn-secondary btn"
						onClick={this.Reset}
					>
						Zero Button
					</button>
					<button
						style={{ margin: '5px' }}
						type="button"
						className="btn-secondary btn"
						onClick={this.Custom}
					>
						Random Button
					</button>
				</div>
				<div>
					<h3>Previous Values</h3>
					<p>{this.state.values + ','}</p>
				</div>
				<h1>{this.props.value}</h1>
				<button
					style={{ margin: '5px' }}
					type="button"
					className="btn-primary btn"
					onClick={this.props.increment}
				>
					Increment Button
				</button>
				<button
					style={{ margin: '5px' }}
					type="button"
					className="btn-danger btn"
					onClick={this.props.decrement}
				>
					Decrement Button
				</button>
				<button
					style={{ margin: '5px' }}
					type="button"
					className="btn-secondary btn"
					onClick={this.props.reset}
				>
					Reset Button
				</button>
				<button
					style={{ margin: '5px' }}
					type="button"
					className="btn-success btn"
					onClick={this.props.switch}
				>
					Switch It Up Button
				</button>
			</div>
		);
	}
}
export default ButtonPad;
