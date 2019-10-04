import React from 'react';
import './App.css';
import PlayerList from './components/PlayerList';
  
export default class App extends React.Component{
//constructor w state
  constructor(props) {
    super(props);
    this.state = {

    }
  }

//methods

//render
render() {
  return (
    <div>
      My App
      <PlayerList />
    </div>
  );
}
}

