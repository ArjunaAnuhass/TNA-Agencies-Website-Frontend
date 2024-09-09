import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme } from './Theme/LightTheme';
import Home from './components/Home/Home';
import AllAdvertisements from './components/Advertisements/AllAdvertisements';
import AdvertisementDetails from './components/Advertisements/AdvertisementDetails';
import Profile from './components/Profile/Profile';
import { CustomerRouters } from './Routers/CustomerRouters';

function App() {
  return (

    <ThemeProvider theme={lightTheme}>
      <CssBaseline/>
        <CustomerRouters/>
    </ThemeProvider>
      

  );
}

export default App;
