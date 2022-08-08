
import './App.css';
import Reset from './style/reset';
import { BrowserRouter } from 'react-router-dom'
import Router from './routes';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


function App() {

  return (
    <>
      <ToastContainer/>
      <BrowserRouter>
          <Reset/>
          <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
