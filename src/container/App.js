import React, { Component } from 'react';
import SearchBox from '../components/SearchBox.js';
import Cardlist from '../components/CardList.js';
import Scroll from '../components/Scroll.js'
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: ''
        };
		this.onSearchChange = this.onSearchChange.bind(this);
		console.log("constrcutor");
	}


	componentDidMount(){
		fetch("https://jsonplaceholder.typicode.com/users")
		.then( res => {
			return res.json()})
		.then(users => 
			
			this.setState({robots: users}))
		
		console.log("did mount")
	}
	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
		console.log(event);

	};

	render() {
		
        const filteredRobots = this.state.robots.filter((robot) => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});
		return !this.state.robots.length 
			?<h1>Loanding...!!</h1>
		 	:(
				<div className="tc">
					<h1 className="f1">RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange} />
					<Scroll>
						<Cardlist robots={filteredRobots} />
					</Scroll>
					
				</div>
			);
		
		
	}
}

export default App;
