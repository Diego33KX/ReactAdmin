
import './App.scss';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Sales from './pages/Sales';
import Clients from './pages/Clients';
import Paises from './pages/Paises';
import Categorias from './pages/Categorias';
import Producto from './pages/Productos';
import Home from './pages/Home';
import VentasDia from './pages/VentasDia'
import Ventas from './pages/Ventas'
class App extends Component {
  render(){
    return(      
      <Router>
          <Routes>
          
              <Route path='/' exact element={<Home/>}/>
              <Route path="/productos" exact element={<Producto/>} />
              <Route path="/clients" exact element={<Clients />} />
              <Route path="/paises" exact element={<Paises/>} />
              <Route path="/categorias" exact element={<Categorias/>} />
              <Route path='/ventas' exact element={<VentasDia/>}/>
              <Route path='/venta' exact element={<Ventas/>}/>
            </Routes>     
      </Router>
      
    );
  };
  
}

export default App;
