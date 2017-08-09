# ink-password-input [![Build Status](https://travis-ci.org/vadimdemedes/ink-password-input.svg?branch=master)](https://travis-ci.org/vadimdemedes/ink-password-input)

> Password input component for [Ink](https://github.com/vadimdemedes/ink).


## Install

```
$ npm install ink-password-input
```


## Usage

```jsx
const {h, render, Component} = require('ink');
const PasswordInput = require('ink-password-input');

class Auth extends Component {
	constructor(props) {
		super(props);

		this.state = {
			password: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	render(props, state) {
		return (
			<span>
				Password:

				<PasswordInput
					value={state.password}
					placeholder="Enter your password"
					onChange={this.handleChange}
					onSubmit={this.handleSubmit}
				/>
			</span>
		);
	}

	handleChange(value) {
		this.setState({
			password: value
		});
	}

	handleSubmit(value) {
		// Password submitted
	}
}

render(<Auth/>);
```

<img src="media/demo.gif" width="544">


## Props

### value

Type: `string`

Value to display in a password input.

### mask

Type: `string`<br>
Default: `*`

Mask char to replace each char of the `value` with.

### placeholder

Type: `string`

Text to display when `value` is empty.

### onChange

Type: `Function`

Function to call when value updates.

### onSubmit

Type: `Function`

Function to call when user press <kbd>Enter</kbd>.


## License

MIT © [Vadim Demedes](https://github.com/vadimdemedes)
