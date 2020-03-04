import React from 'react';
import styled from 'styled-components';
import { GlobalStyles } from './GlobalStyles';


export function App() {
  return (<AppWrapper><GlobalStyles />hello world</AppWrapper>);
};

const AppWrapper = styled.div`
  position: relative;
  width: 140px;
  height: 140px;
  border: 10px solid red;
`;

