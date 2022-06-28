import { createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Home from './pages/Home';

const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        dark: '#1e316d',
        main: '#253D88',
        light: '#5164a0',
      },
      secondary: {
        light: '#fcdf94',
        main: '#FBD166',
        dark: '#c9a752',
      },
      error: {
        dark: '#c2544a',
        main: '#F2695D',
        light: '#f5877d',
      },
      warning: {
        light: '#fae8e7',
        main: '#F6D9D7',
        dark: '#ddc3c2',
      },
      success: {
        light: '#cde4af',
        main: '#B8D98D',
        dark: '#93ae71',
      },
      info: {
        main: '#FFFFFF',
      },
    },
    typography: {
      fontFamily: 'Gotham Narrow Book',
      fontSize: 14,
      h1: {
        fontFamily: 'Gotham Narrow Black',
      },
      h2: {
        fontFamily: 'Gotham Narrow Medium',
      },
      h3: {
        fontFamily: 'Gotham Narrow Medium',
      },
      h4: {
        fontFamily: 'Gotham Narrow Light',
      },
      h5: {
        fontFamily: 'Gotham Narrow Medium',
      },
      body1: {
        fontFamily: 'Gotham Narrow Book',
        fontSize: 14,
      },
      body2: {
        fontFamily: 'Gotham Narrow Book',
        fontSize: 10,
      },
    },
    shape: {
      borderRadius: 35,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            minWidth: '200px',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          icon: {
            color: 'inherit',
            marginLeft: '8px',
            marginRight: '8px',
          },
        },
      },
      MuiAccordion: {
        styleOverrides: {
          root: {
            paddingLeft: 0,
            paddingTop: 5,
            paddingRight: 0,
            paddingBottom: 0,
            borderBottomRightRadius: 'inherit',
            borderBottomLeftRadius: 'inherit',
            background: '#FAFAFA',
            color: '#000',
            '&.Mui-expanded': {
              background: '#F6D9D7',
              color: '#000',
            },
          },
        },
      },
      MuiCollapse: {
        styleOverrides: {
          root: {
            background: '#FAFAFA',
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 'inherit',
            borderBottomLeftRadius: 'inherit',
          },
        },
      },
      MuiAccordionSummary: {
        styleOverrides: {
          root: {
            marginLeft: 10,
            marginTop: 10,
            marginRight: 10,
            marginBottom: 10,
          },
        },
      },
      MuiAccordionDetails: {
        styleOverrides: {
          root: {
            paddingLeft: 0,
            paddingTop: 0,
            paddingRight: 0,
            paddingBottom: 0,
          },
        },
      },
      MuiFab: {
        styleOverrides: {
          root: {
            position: 'fixed',
          },
        },
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            position: 'relative',
          },
        },
      },
      MuiFormLabel: {
        styleOverrides: {
          root: {
            fontSize: '1.75rem',
            '&.MuiInputLabel-root': {
              whiteSpace: 'normal',
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          input: {
            paddingLeft: 20,
          },
          root: {
            background: '#fff',
            fontFamily: 'Gotham Narrow Book',
            fontSize: '1.75rem',
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          input: {
            padding: 10,
            backgroundColor: '#fff',
            borderRadius: 35,
            border: '2px',
            borderStyle: 'solid',
            borderColor: '#253D88',
            minHeight: 28,
            boxSizing: 'border-box',
            position: 'relative',
          },
          root: {
            backgroundColor: 'transparent',
            '&.Mui-focused': {
              backgroundColor: 'transparent',
            },
            '&:hover': {
              backgroundColor: 'transparent',
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="flexWrapper">
          <div className="flexGrow">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
