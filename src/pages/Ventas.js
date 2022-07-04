import axios from 'axios';
import React ,{useEffect,useState } from "react"
import {Sidebar} from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
const url = "http://127.0.0.1:8000/ventas/"



const Ventas = () =>{
    const [productos,setProductos]=useState([])

    const GetVentaDia = () =>{
        axios.get(url).then(response =>{
            const respuesta = response.data
            setProductos(respuesta)
        }).catch(error=>{
            console.log(error.message);
        })
    }

    useEffect(()=>{
        GetVentaDia();
    },[])
    return(
        <div className='flex'>
        <Sidebar></Sidebar>

        <div className='content w-100'>
        <Navbar></Navbar>
        <div className='container'>
        <br></br>
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 750 }}>
                <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                    
                        <TableCell>
                        Cliente
                        </TableCell>
                        <TableCell>
                        Producto
                        </TableCell>
                        <TableCell>
                        Precio
                        </TableCell>
                        <TableCell>
                        Cantidad
                        </TableCell>
                        <TableCell>
                        Total
                        </TableCell>
                    
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        productos
                        .map((elementos) => {
                            return(
                                <TableRow hover role="checkbox" tabIndex={-1} key={elementos.code}>
                                    <TableCell key={elementos.id} align={elementos.align} style={{minWidth: 170 }}>
                                        {elementos.cliente}
                                    </TableCell>
                                    <TableCell align={elementos.align} style={{ minWidth: 170 }}>
                                        {elementos.producto}
                                    </TableCell>
                                    <TableCell align={elementos.align} style={{ minWidth: 170 }}>
                                        {elementos.precio}
                                    </TableCell>
                                    <TableCell align={elementos.align} style={{ minWidth: 170 }}>
                                        {elementos.cantidad}
                                    </TableCell>
                                    <TableCell align={elementos.align} style={{ minWidth: 170 }}>
                                        {elementos.total}
                                    </TableCell>
                            </TableRow>  
                            
                            )})
                    }
                    
                </TableBody>
                </Table>
            </TableContainer>
            </Paper>
        </div>
        </div>
        </div>
    )
}

export default Ventas