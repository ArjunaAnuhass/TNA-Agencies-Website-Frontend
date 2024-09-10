
import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme } from './Theme/LightTheme';
import { CustomerRouters } from './Routers/CustomerRouters';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './components/State/Authentication/Action';
import { store } from './components/State/store';

function App() {
  const dispatch = useDispatch();

  const jwt = localStorage.getItem("jwt");
  const {auth} = useSelector((store) => store)

  useEffect(()=>{
    dispatch(getUser(auth.jwt || jwt));
  }, [auth.jwt])


  return (

    <ThemeProvider theme={lightTheme}>
      <CssBaseline/>
        <CustomerRouters/>
    </ThemeProvider>
      

  );
}

export default App;
