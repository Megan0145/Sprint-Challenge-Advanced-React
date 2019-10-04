import React from "react";
import Player from './Player';

export default class PlayerList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      const { playerData } = this.props;
    return (
      <div>
        <h1>PlayerList</h1>
        {
            playerData.map(player => {
                console.log(player)
            })
        }
        {/* <Player /> */}
      </div>
    );
  }
}
