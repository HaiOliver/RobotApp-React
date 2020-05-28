import React, { Component } from 'react';
import SearchBox from './SearchBox.js';
import Cardlist from './CardList';
import { robots } from './robots.js';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			robots: robots,
			searchfield: ''
		};
	}

	onSearchChange = (event) => {
		this.setState({ searchChange: event.target.value });
		console.log(event.target.value);

	};

	render() {
        const filteredRobots = this.state.robots.filter((robot) => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});
		return (
			<div>
				<h1>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Cardlist robots={filteredRobots} />
			</div>
		);
	}
}

export default App;
