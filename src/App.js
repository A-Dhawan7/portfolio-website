import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Theme } from './utils/Theme';
import { MainBody, Container } from './styles/Global.styled';

import Showcase from './components/Showcase';

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={Theme}>
        <MainBody>
          <Container>
            <Showcase />
          </Container>
        </MainBody>
      </ThemeProvider>
    </div>
  );
}

export default App;