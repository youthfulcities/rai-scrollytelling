import { ThemeProvider } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
// import styled from "styled-components"; <- gives an error
import Footer from './components/Footer';
import Header from './components/Header';
import Chap1 from './sections/Chap1';
import Chap2 from './sections/Chap2';
import Chap3 from './sections/Chap3';
import Chap4 from './sections/Chap4';
import Chap5 from './sections/Chap5';
import Conclusion from './sections/Conclusion';
import HomeSection from './sections/HomeSection';
import muiTheme from './ui/muiTheme';

// import { Box, Container, FadeInUpBox, Flex, ScaleBox, StaggerWrap } from './ui';
// import { picsList } from '../PicsList.js';
// Removed Framer Motion Code to focus on these^

const theme = muiTheme();

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <div className="flexWrapper">
        <div className="flexGrow">
          <Header />
          <HomeSection />
          <Chap1 />
          <Chap2 />
          <Chap3 />
          <Chap4 />
          <Chap5 />
          <Conclusion />
        </div>
        <Footer />
      </div>
    </Router>
  </ThemeProvider>
);

export default App;
