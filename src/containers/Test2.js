import React, { useState } from "react";
import styled from "styled-components";

export const Test2 = () => {
  let [count, setCount] = useState(0);

  const handleButtonClick = (event) => {
    setCount(count + 1);
  };

  const Title = styled.h1`
    font-size: 2em;
    text-align: center;
    color: palevioletred;
  `;

  const Button = styled.button`
    font-size: 14px;
    padding-bottom: 10px;
    margin: 0 auto;
    display: block;
    color: palevioletred;
    padding: 0.25em 1em;
    border: 2px palevioletred;
    border-radius: 3px;
  `;

  const Wrapper = styled.section`
    padding: 3em;
    width: 20em;
    margin: 0 auto;
    display: block;
    border: 2px solid palevioletred;
    border-radius: 3px;
  `;

  return (
    <Wrapper>
      <Title>Test {count}</Title>
      <Button onClick={() => handleButtonClick()}> increase </Button>
    </Wrapper>
  );
};
