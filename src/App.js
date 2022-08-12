import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from  './Providers/UserContext'
import Router from './routes';
import Reset from './style/reset';
import 'react-toastify/dist/ReactToastify.css'
import './App.css';


function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <ToastContainer/>
        <Reset/>
        <Router />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
