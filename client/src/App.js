import React, { useState, useEffect } from "react";
import "./App.css";
import PlayerList from "./components/PlayerList";
import axios from "axios";
import styled from "styled-components";
import Navbar from "./components/Navbar";

const StyledFootballPage = styled.div``;

//custom hook to fetch data from api
export const useFetchData = initialVal => {
  const [data, setData] = useState(initialVal);
  const getData = url => {
    axios
      .get(url)
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.log(err));
  };
  return [data, setData, getData];
};

export default function App() {
  return (
    <div>
      <Navbar />
      <StyledFootballPage>
        <PlayerList />
      </StyledFootballPage>
    </div>
  );
}
