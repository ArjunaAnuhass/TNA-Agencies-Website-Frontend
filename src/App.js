import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme } from './Theme/LightTheme';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './components/State/Authentication/Action';
import Routers from './Routers/Routers';
import { getAdvertisementByUserId } from './components/State/Advertisement/Action';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        <ToastContainer position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={true}/>
    </ThemeProvider>
      

  );
}

export default App;
