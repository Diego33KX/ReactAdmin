import React ,{ Component,useEffect,useState } from "react"
import logo from "../components/Logo3.PNG"
import  Box  from "@mui/material/Box";
import axios from 'axios';
import { Bar } from 'react-chartjs-2'
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js';
import {Sidebar} from '../components/Sidebar';
import Navbar from '../components/Navbar';
Chart.register(CategoryScale);
const url = "http://127.0.0.1:8000/productos/"
const url2 = "http://127.0.0.1:8000/cantidadproductos/"
const url3 = "http://127.0.0.1:8000/usuarios/"
class Home extends Component{
    
    state = {
        data1:[],
        data2:{
            suma:'',
            cantidad:'',
            numero:[],
            nombres:[]
        },
        data3:[],
    }
    
    peticionGet=()=>{
        axios.get(url).then(response=>{
          this.setState({data1: response.data});
        }).catch(error=>{
          console.log(error.message);
        })
      }
    peticionGet2=()=>{
        axios.get(url2).then(response=>{
            this.setState({data2: response.data});
        }).catch(error=>{
            console.log(error.message);
        })
    }
    peticionGet3=()=>{
        axios.get(url3).then(response=>{
            this.setState({data3: response.data});
        }).catch(error=>{
            console.log(error.message);
        })
    }
    componentDidMount(){
        this.peticionGet();
        this.peticionGet2();
        this.peticionGet3();
    }
    
    render(){
        return(
            <div className='flex'>
                <Sidebar></Sidebar>
            <div className='content w-100'>
                <Navbar></Navbar>
        <div className="container py-5">
            <div class="row align-items-center">
            <div class="col-3">
            <Box
                sx={{
                width: 300,
                height: 180,
                borderRadius: 4,
                padding: 7,
                backgroundColor: 'purple',
                '&:hover': {
                    opacity: [0.9, 0.8, 0.7],
                  },
                textAlign:'center',
                fontSize:20,
                alignItems:'center',
                color:'white',
                }}
                >
                Numero de Productos
                <h4>{this.state.data1.length}</h4> 
            </Box>
            </div>
            <div class="col-3">
            <Box
                sx={{
                width: 300,
                height: 180,
                borderRadius: 4,
                padding: 7,
                backgroundColor: 'green',
                '&:hover': {
                    opacity: [0.9, 0.8, 0.7],
                  },
                textAlign:'center',
                fontSize:20,
                alignItems:'center',
                color:'white',
                }}
                >
                Ganancias del dia
                <h4>S/. {this.state.data2.suma}</h4>    
                 
            </Box>
            </div>
            <div class="col-3">
            <Box
                sx={{
                width: 300,
                height: 180,
                borderRadius: 4,
                padding: 7,
                backgroundColor: 'primary.main',
                '&:hover': {
                    opacity: [0.9, 0.8, 0.7],
                  },
                textAlign:'center',
                fontSize:20,
                alignItems:'center',
                color:'white',
                }}
                >
                Productos vendidos hoy
                
                <h4>{this.state.data2.cantidad}</h4>    
                 
            </Box>
            </div>
            <div class="col-3">
            <Box
                sx={{
                width: 300,
                height: 180,
                borderRadius: 4,
                padding: 7,
                backgroundColor: 'orange',
                '&:hover': {
                    opacity: [0.9, 0.8, 0.7],
                  },
                textAlign:'center',
                fontSize:20,
                alignItems:'center',
                color:'white',
                }}
                >
                Cantidad de Usuarios
                <h4>{this.state.data3.length}</h4>  
            </Box>
            </div>
            <div>
                <Grafica></Grafica>
            </div>
        </div>       
        </div>
        </div>
        </div>
        )
    }
}
export default Home

const Grafica = () =>{
    const [productos, setProductos] = useState([]);
    const [stock, setStock] = useState([])
    const datos = {
        labels:productos,
        datasets:[{
            label:'Productos',
            backgroundColor:'#2437B7',
            borderColor:'black',
            borderWidth:1,
            hoverBackgroundColor:'rgba(232,67,43,0,2)',
            hoverBorderColor:'#24ADB7',
            data:stock
        }]
    }
    const opciones = {
        maintainAspectRatio:false,
        responsive:true,
    }
    const peticionGetProductos=()=>{
        axios.get(url).then(response=>{
          var respuesta = response.data;
          var auxProductos=[],auxStock=[];
          respuesta.map(elemento=>{
            auxProductos.push(elemento.nombre);
            auxStock.push(elemento.stock)
          })
          setProductos(auxProductos);
          setStock(auxStock);
        }).catch(error=>{
          console.log(error.message);
        })
      }
    useEffect(()=>{
        peticionGetProductos();
    },[])
    return (
        <div className="" style={{width:'100%',height:'500px'}}>
                <Bar data={datos} options={opciones}></Bar>
        </div>  
    )
}