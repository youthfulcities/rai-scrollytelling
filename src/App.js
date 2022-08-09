import { ThemeProvider } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
// import styled from "styled-components"; <- gives an error
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';
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

const App = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [homeRef, homeInView, homeEntry] = useInView({ threshold: 0.5 });
  const [chap1Ref, chap1InView, chap1Entry] = useInView({ threshold: 0.5 });
  const [chap2Ref, chap2InView, chap2Entry] = useInView({ threshold: 0.5 });
  const [chap3Ref, chap3InView, chap3Entry] = useInView({ threshold: 0.5 });
  const [chap4Ref, chap4InView, chap4Entry] = useInView({ threshold: 0.5 });
  const [chap5Ref, chap5InView, chap5Entry] = useInView({ threshold: 0.5 });
  const [conclusionRef, conclusionInView, conclusionEntry] = useInView({
    threshold: 0.5,
  });

  const sections = [
    {
      title: 'Home',
      description: '',
      element: homeEntry.target,
    },
    {
      title: 'Chapter 1',
      description: '',
      element: chap1Entry.target,
    },
    {
      title: 'Chapter 2',
      description: '',
      element: chap2Entry.target,
    },
    {
      title: 'Chapter 3',
      description: '',
      element: chap3Entry.target,
    },
    {
      title: 'Chapter 4',
      description: '',
      element: chap4Entry.target,
    },
    {
      title: 'Chapter 5',
      description: '',
      element: chap5Entry.target,
    },
    {
      title: 'Conclusion',
      description: '',
      element: conclusionEntry.target,
    },
  ];

  useEffect(() => {
    if (homeInView) {
      setCurrentSection(0);
    }
    if (chap1InView) {
      setCurrentSection(1);
    }
    if (chap2InView) {
      setCurrentSection(2);
    }
    if (chap3InView) {
      setCurrentSection(3);
    }
    if (chap4InView) {
      setCurrentSection(4);
    }
    if (chap5InView) {
      setCurrentSection(5);
    }
    if (conclusionInView) {
      setCurrentSection(6);
    }
  }, [
    homeInView,
    chap1InView,
    chap2InView,
    chap3InView,
    chap4InView,
    chap5InView,
    conclusionInView,
  ]);

  const handleScroll = (element) => {
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="flexWrapper">
          <div className="flexGrow">
            <Header />
            <Navigation
              currentSection={currentSection}
              setCurrentSection={setCurrentSection}
              handleScroll={handleScroll}
              homeEl={homeEntry && homeEntry.target}
              chap1El={chap1Entry && chap1Entry.target}
              chap2El={chap2Entry && chap2Entry.target}
              chap3El={chap3Entry && chap3Entry.target}
              chap4El={chap4Entry && chap4Entry.target}
              chap5El={chap5Entry && chap5Entry.target}
              conclusionEl={conclusionEntry && conclusionEntry.target}
            />
            <HomeSection
              ref={homeRef}
              chap1El={chap1Entry && chap1Entry.target}
              handleScroll={handleScroll}
            />
            <Chap1 ref={chap1Ref} />
            <Chap2 ref={chap2Ref} />
            <Chap3 ref={chap3Ref} />
            <Chap4 ref={chap4Ref} />
            <Chap5 ref={chap5Ref} />
            <Conclusion ref={conclusionRef} />
          </div>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
