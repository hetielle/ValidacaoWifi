import './App.css';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">

      <ToastContainer/>

      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Home/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
