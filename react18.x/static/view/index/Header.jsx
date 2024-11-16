const { useState } = React;

function Header() {
	let [state, setState] = useState({
		key: "",
		list: []
	})

	return (
		<header id="header">
			header
		</header>
	);
}