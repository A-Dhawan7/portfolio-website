import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Theme } from './utils/Theme';
import { MainBody, Container } from './styles/Global.styled';

import Showcase from './components/Showcase';
import MySkills from './components/MySkills';
import MyProjects from './components/MyProjects';
import Footer from './components/footer';
import Navbar from './components/Navbar';

function App() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <MainBody>
          <Container>
            <Showcase />
            <MySkills />
            <MyProjects />
            <Footer />
            <Navbar />
          </Container>
        </MainBody>
      </ThemeProvider>
    </div>
  );
}

export default App;
