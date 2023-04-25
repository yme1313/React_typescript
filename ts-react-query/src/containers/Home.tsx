import React, { useState } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

export default function Home() {

  return (
    <Wrapper>
      <Title>첫 화면입니다.</Title>
      <Button color="red">
        <Link to="/movie">Movie List</Link>
      </Button>
      <Button color="red">Red Button</Button>
      <Button color="blue">Blue Button</Button>
    </Wrapper>
  )
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Button = styled.button`
  background-color: ${(props) => (props.color === 'red' ? 'red' : 'blue')};
  color: white;
  font-size: 1em;
  padding: 0.5em 1em;
  border-radius: 3px;
  border: none;
  margin : 10px;
  cursor : pointer;

  & > a {
    text-decoration : none;
    color : white;
  }
`;