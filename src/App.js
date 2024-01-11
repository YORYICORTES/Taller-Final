import {BrowserRouter,Routes,Route} from 'react-router-dom';
import MascotasgpComponent from './Components/MascotasgpComponent';

import Perros from './Paginas/Perros';
import Gatos from './Paginas/Gatos';


import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MascotasgpComponent></MascotasgpComponent>}></Route>
        <Route path='/Perros' element={<Perros></Perros>}></Route>
        <Route path='/Gatos' element={<Gatos/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
