import React from 'react';
import SiteHeader from './components/SiteHeader';
import AboutMe from './sections/AboutMe';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import ContactMe from './sections/ContactMe';
import Footer from './components/Footer';
import { useDarkMode } from './hooks/useDarkMode';
import {ThemeProvider} from "styled-components";
import { lightTheme, darkTheme } from "./components/Theme";
import styled from 'styled-components'
import './App.css';

const StyledApp = styled.div`
  background-color: ${({ theme }) => theme.mainBG};
  color: ${({ theme }) => theme.mainText};
  font-family: 'Raleway', sans-serif;
  transition: all 0.50s linear;
`

function App() {
  const [theme, themeToggler] = useDarkMode();

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <StyledApp>
        <SiteHeader theme={theme} themeToggler={themeToggler}/>
        <AboutMe />
        <Experience />
        <Projects />
        <ContactMe />
        <Footer />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
