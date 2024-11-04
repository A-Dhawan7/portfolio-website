import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Theme } from './utils/Theme';
import { MainBody, Container } from './styles/Global.styled';

import Showcase from './components/Showcase';
import MySkills from './components/MySkills';
import MyProjects from './components/Projects';

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={Theme}>
        <MainBody>
          <Container>
            <Showcase />
            <MySkills />
            <MyProjects />
          </Container>
        </MainBody>
      </ThemeProvider>
    </div>
  );
}

export default App;