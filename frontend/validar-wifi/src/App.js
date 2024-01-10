import './App.css';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TermsComponent from './ui/components/TermsComponent';

function App() {
  return (
    <div className="App">

      <ToastContainer/>

      <BrowserRouter>
        <Routes>
          <Route path='*' element= {<Error404/>}/>
          <Route path='/' element= {<Home/>}/>
          <Route path='/termo' element= {<TermsComponent/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
