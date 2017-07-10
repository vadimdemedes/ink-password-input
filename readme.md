# ink-password-input [![Build Status](https://travis-ci.org/vadimdemedes/ink-password-input.svg?branch=master)](https://travis-ci.org/vadimdemedes/ink-password-input)

> Password input component for [Ink](https://github.com/vadimdemedes/ink).


## Install

```
$ npm install ink-password-input
```


## Usage

```jsx
const {h, Component} = require('ink');
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
			<PasswordInput
				value={state.password}
				placeholder="Enter password"
				onChange={this.handleChange}
				onSubmit={this.handleSubmit}
			/>
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

mount(<Auth/>);
```

**Note**: For `<PasswordInput>` to be able to receive `keypress` events, `process.stdin` must be in [raw mode](https://nodejs.org/api/tty.html#tty_readstream_setrawmode_mode). As a result, default behavior like Ctrl+C is disabled, so you must handle that manually.

Use this snippet to enable `keypress` events:

```js
const readline = require('readline');

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
```


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
