import { Component } from "react"
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap'
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
const url = "http://127.0.0.1:8000/usuarios/"
class Clients extends Component{
    state = {
        data:[]
    }
    peticionGet=()=>{
        axios.get(url).then(response=>{
          this.setState({data: response.data});
        }).catch(error=>{
          console.log(error.message);
        })
      }
    componentDidMount(){
        this.peticionGet();
    }
    render(){
        return(
            <div className='flex'>
        <Sidebar></Sidebar>

        <div className='content w-100'>
        <Navbar></Navbar>
            <div className="container">
                <br></br>
            <Paper sx={{ overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 700 }}>
                <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                    
                        <TableCell>
                        ID
                        </TableCell>
                        <TableCell>
                        Nombre de usuario
                        </TableCell>
                        <TableCell>
                        Email
                        </TableCell>
                        
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        this.state.data
                        .map((elementos) => {
                            return(
                                <TableRow hover role="checkbox" tabIndex={-1} key={elementos.code}>
                                    <TableCell key={elementos.id} align={elementos.align}>
                                        {elementos.id}
                                    </TableCell>
                                    <TableCell  align={elementos.align} >
                                        {elementos.username}
                                    </TableCell>
                                    <TableCell  align={elementos.align} >
                                        {elementos.email}
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
}
export default Clients