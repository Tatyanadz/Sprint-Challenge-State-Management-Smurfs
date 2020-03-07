import React from "react";
import styled from "styled-components";

const SmurfDiv = styled.div`
  width: 35%;
  background-color: #f0f7f4
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  margin: 10% auto 0%;
  p {
    font-size: 1.2em;
    padding: 7px 20px 10px 20px;
  }
`;

const NameH2 = styled.h2`
  font-size: 30px;
  background: #62cdfd
  padding: 10px;
`;

const Smurf = props => {
  return (
    <SmurfDiv>
      <NameH2>{`Name: ${props.name}`}</NameH2>
      <p>{`Age: ${props.age}`}</p>
      <p>{`Height: ${props.height}`}</p>
    </SmurfDiv>
  );
};

export default Smurf;