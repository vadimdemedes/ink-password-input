'use strict';

const {h, Color, Component} = require('ink');
const PropTypes = require('prop-types');
const hasAnsi = require('has-ansi');

const noop = () => {};

class PasswordInput extends Component {
	constructor(props) {
		super(props);

		this.handleKeyPress = this.handleKeyPress.bind(this);
	}

	render({value, mask, placeholder}) {
		const hasValue = value.length > 0;
		const maskedValue = mask.repeat(value.length);

		return (
			<Color dim={!hasValue}>
				{hasValue ? maskedValue : placeholder}
			</Color>
		);
	}

	componentDidMount() {
		process.stdin.on('keypress', this.handleKeyPress);
	}

	componentWillUnmount() {
		process.stdin.removeListener('keypress', this.handleKeyPress);
	}

	handleKeyPress(ch, key) {
		if (hasAnsi(key.sequence)) {
			return;
		}

		const {value, onChange, onSubmit} = this.props;

		if (key.name === 'return') {
			onSubmit(value);
			return;
		}

		if (key.name === 'backspace') {
			onChange(value.slice(0, -1));
			return;
		}

		if (key.name === 'space' || (key.sequence === ch && /^.*$/.test(ch) && !key.ctrl)) {
			onChange(value + ch);
		}
	}
}

PasswordInput.propTypes = {
	value: PropTypes.string,
	mask: PropTypes.string,
	placeholder: PropTypes.string,
	onChange: PropTypes.func,
	onSubmit: PropTypes.func
};

PasswordInput.defaultProps = {
	value: '',
	mask: '*',
	placeholder: '',
	onChange: noop,
	onSubmit: noop
};

module.exports = PasswordInput;
