
import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme } from './Theme/LightTheme';
import { CustomerRouters } from './Routers/CustomerRouters';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './components/State/Authentication/Action';
import { store } from './components/State/store';
import AdvertisementDetails from './components/Advertisements/AdvertisementDetails';
import Routers from './Routers/Routers';
import { getAdvertisementByUserId } from './components/State/Advertisement/Action';
import UpdateAdvertisement from './AdminComponents/Dashboard/UpdateAdvertisement';

function App() {
  const dispatch = useDispatch();

  const jwt = localStorage.getItem("jwt");
  const {auth} = useSelector((store) => store)

  useEffect(()=>{
    dispatch(getUser(auth.jwt || jwt));
  }, [auth.jwt])

  useEffect(()=> {
    getAdvertisementByUserId(auth,jwt || jwt)
  }, [auth.user])

  return (

    <ThemeProvider theme={lightTheme}>
      <CssBaseline/>
        <Routers/>
    </ThemeProvider>
      

  );
}

export default App;
