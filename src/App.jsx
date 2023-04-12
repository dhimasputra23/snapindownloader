import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Home from './page/Home';
import { Route, Routes } from 'react-router-dom';
import Kontak from './component/Kontak';
import Term from './component/Term';
import Privacy from './component/Privacy'

function App() {
  return (
    <>

      <Header>
      </Header>

      <Routes>



        <Route path='/contact' element={<Kontak></Kontak>}></Route>
        <Route path='/terms-of-service' element={<Term></Term>}></Route>
        <Route path='/privacy-policy' element={<Privacy></Privacy>}></Route>


        <Route path='/' element={<Home></Home>}></Route>



      </Routes>
    </>
  );
}

export default App;
