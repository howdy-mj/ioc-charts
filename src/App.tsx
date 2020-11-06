import React, { FC } from 'react';
import { Charts } from './pages';
import { FlexMiddle, Title } from './components/ui';

const App: FC = () => {
  console.log('hh');
  return (
    <div>
      <FlexMiddle>
        <Title>ioCrops 과제</Title>
        <Charts />
      </FlexMiddle>
    </div>
  );
};

export default App;
