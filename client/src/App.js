import React, {useState, useEffect} from 'react';
import './App.css';
import PlayerList from './components/PlayerList';
import axios from 'axios';


  
function App() {
  //custom hook to fetch data from api
const useFetchData = initialVal => {
  const [data, setData] = useState(initialVal);
  const getData = (url) => {
    axios
      .get(url)
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.log(err));
  } 
  return [data, setData, getData];
};
  const [ playerData, setPlayerData, getPlayerData ] = useFetchData([]);

  useEffect(() => {
    getPlayerData('http://localhost:5000/api/players');
  }, []);

  return (
    <div className="App">
        <PlayerList playerData={playerData} />
    </div>
  );
}

export default App;

