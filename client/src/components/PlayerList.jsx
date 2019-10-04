import React from "react";
import Player from './Player';
import styled from 'styled-components';
import useInput from '../App';
import axios from 'axios';

const StyledPlayerList = styled.div`
    background-color: rgba(232,235,236, 0.8);
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin: 0 auto;
    margin-top: 2rem;
    border-radius: 10px;
    padding: 2rem;
    justify-content: space-around;
    h1 {
        width: 100%;
        text-align: center;
    }
    button {
        width: 100%;
        text-align: center;
    }
`;

export default class PlayerList extends React.Component {
    constructor() {
        super();
        this.state = {
          playerData: []
        }
      }
    
      componentDidMount() {
        axios.get('http://localhost:5000/api/players')
        .then(res => {
          this.setState({
            playerData: res.data
          })
        })
        .catch(err => console.log(err))
    
      };
  render() {

    return (
      <StyledPlayerList>
        <h1>Women's World Cup PlayerList</h1>
        {
            this.state.playerData.map(player => {
                console.log(player)
                return <Player key={player.name} playerDetails={player} /> 
            })
        }

      </StyledPlayerList>
    );
  }
}
