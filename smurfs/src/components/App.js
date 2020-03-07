import React from "react";
import SmurfList from "./SmurfList";
import SmurfForm from "./SmurfForm";
import styled from "styled-components";

const AppDiv = styled.div`
  font-family: "Poppins", sans-serif;
  text-align: center;
  background-color: white;
  margin: 0;
  padding-bottom: 5%;
  font-size: 1 em;
  h1 {
    font-size: 4em;
    margin: 0;
    padding-top: 4%;
  }
`;


function App() {
  return (
    <AppDiv>
      <h1>Smurfs</h1>
      <SmurfForm />
      <SmurfList />
    </AppDiv>
  );
}

export default App;

