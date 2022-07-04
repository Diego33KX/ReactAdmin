import { Component } from "react"
import axios from 'axios';
import {Sidebar} from '../components/Sidebar';
import Navbar from '../components/Navbar';
const url = "http://127.0.0.1:8000/ventas/"
const url2 = "http://127.0.0.1:8000/cantidadproductos/"
class Sales extends Component{
    state = {
        data:[],
        
        data3:{
            suma:''
        }
    }

    peticionGet=()=>{
        axios.get(url).then(response=>{
          this.setState({data: response.data});
        }).catch(error=>{
          console.log(error.message);
        })
      }
    peticionGet2=()=>{
    axios.get(url2).then(response=>{
        this.setState({data3: response.data});
    }).catch(error=>{
        console.log(error.message);
    })
    }
    gananciaTotal = () =>{
        
        this.state.data.map(ven => {
            this.state.suma += ven.subtotal
            console.log("cantidad")
            console.log(ven.subtotal)
        })
        this.setState({suma:this.state.suma})
    }
    componentDidMount(){
        this.peticionGet();
        this.gananciaTotal();
        this.peticionGet2();
    }

    
    render(){
        return(
            <div className='flex'>
        <Sidebar></Sidebar>

        <div className='content w-100'>
        <Navbar></Navbar>
            <div className="container py-3">        
                <table className="table">
                    <thead className="table-primary text-center">
                        <tr>
                            <td>ID</td>
                            <td>Cliente</td>
                            <td>Producto</td>
                            <td>Precio</td>
                            <td>Cantidad</td>
                            <td>Subtotal</td>
                            <td>IGV</td>
                            <td>Total</td>
                            <td>Fecha</td>
                        </tr>
                    </thead>
                    <tbody className="bg-white text-center">
                        {this.state.data.map(venta =>{
                            return(
                                <tr key={venta.id}>
                                   <td>{venta.id}</td>
                                   <td>{venta.cliente}</td>
                                   <td>{venta.producto}</td>
                                   <td>{venta.precio}</td>
                                   <td>{venta.cantidad}</td>
                                   <td>{venta.subtotal}</td>
                                   <td>{venta.igv}</td>
                                   <td>{venta.total}</td>
                                   <td>{venta.fecha}</td>
                                </tr>
                            )
                        })}

                        
                    </tbody>
                </table>
            </div>
            </div>
            </div>
        )
    }
}
export default Sales