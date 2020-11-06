import React, { FC } from 'react';
import { Charts } from './pages';
import { FlexMiddle, Title } from './components/ui';
import styled from 'styled-components';

const App: FC = () => {
  return (
    <Body>
      <FlexMiddle>
        <Title>ioCrops 과제</Title>
        <Charts />
      </FlexMiddle>
    </Body>
  );
};

const Body = styled.div`
  background-color: #e1f6ff;
  height: 100%;
`;

export default App;
