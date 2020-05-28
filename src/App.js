import React from 'react';
import SearchBox from '/SearchBox.js';
import  Cardlist from './CardList';
import {robots} from './robots.js';


const App = ()=>{
    return (
        <div>
            <h1>RoboFriends</h1>
            <SearchBox/>
            <Cardlist robots={robots}/>
        </div>
        
    )
}

export default App;