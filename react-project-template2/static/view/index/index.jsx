let query = getQuery();

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			query,
			categories: null,
			books: null
		}
	}

	render() {
		return (
			<React.Fragment>
				<Header/>
				<section>
					<Aside/>
					<Main/>
				</section>
				<Footer/>
			</React.Fragment>
		);
	}
}

ReactDOM.render(<App/>, document.getElementById("root"));