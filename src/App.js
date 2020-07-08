import React from 'react';

import { Container, Center} from './styles';

import GlobalStyle from './styles/global';
import Header from './Components/Header';
import Body from './Components/Body';
import Content from './Components/Content';

function App() {
  return (
    <Container>
        <Header />
        <Center>
          <Body />
          <Content />
        </Center>
        <GlobalStyle />
    </Container>
  );
}

export default App;
