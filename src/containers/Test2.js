import React, { useState } from "react";
import styled from "styled-components";

export const Test2 = () => {
  let [count, setCount] = useState(0);

  const handleButtonClick = (event) => {
    setCount(count + 1);
  };

  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;

  const Button = styled.button`
    font-size: 14px;
    padding-bottom: 10px;
    color: #999;
  `;

  const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
  `;

  return (
    <Wrapper>
      <Title>Test {count}</Title>
      <Button onClick={() => handleButtonClick()}> increase </Button>
    </Wrapper>
  );
};
