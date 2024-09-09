import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme } from './Theme/LightTheme';
import Home from './components/Home/Home';

function App() {
  return (

    <ThemeProvider theme={lightTheme}>
      <CssBaseline/>
      <Navbar/>
      <Home/>
    </ThemeProvider>
      

  );
}

export default App;
