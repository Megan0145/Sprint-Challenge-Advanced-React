import React from "react";
import Player from './Player';

export default class PlayerList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>PlayerList</h1>
        <Player />
      </div>
    );
  }
}
