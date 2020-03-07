import React, { useState } from "react";
import { connect } from "react-redux";
import { postSmurf } from "../actions/postSmurf";
import styled from "styled-components";

const SmurfForm = props => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");

  const nameChangeHandler = event => {
    event.preventDefault();
    setName(event.target.value);
  };
  const ageChangeHandler = event => {
    event.preventDefault();
    setAge(event.target.value);
  };
  const heightChangeHandler = event => {
    event.preventDefault();
    setHeight(event.target.value);
  };
  const submitHandler = event => {
    let newSmurf = {
      name: name,
      age: age,
      height: height + "cm"
    };
    props.postSmurf(newSmurf);
    setName("");
    setAge("");
    setHeight("");
  };

  return (
    <FormDiv>
      <form>
        <Input
          onChange={nameChangeHandler}
          type="text"
          name="name"
          placeholder="Name"
        />
        <Input
          onChange={ageChangeHandler}
          type="number"
          name="age"
          placeholder="Age"
        />
        <Input
          onChange={heightChangeHandler}
          type="number"
          name="height"
          placeholder="Height"
        />
        <StyledButton onClick={submitHandler}>Add New Smurf</StyledButton>
      </form>
    </FormDiv>
  );
};

export default connect(null, { postSmurf })(SmurfForm);

const FormDiv = styled.div`
  border-radius: 20px;
  background-color: #62cdfd;
  padding: 20px;
  width: 20%;
  margin: 5% auto 0%;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;

const Input = styled.input`
  width: 56%;
  padding: 10px 20px;
  margin: 10px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const StyledButton = styled.button`
  background: #f5f08e;
  font-size: 1.1em;
  margin: 0.5em;
  padding: 0.6em 0.6em;
  border-radius: 6px;
  border: none;
`;