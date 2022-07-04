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
const url = "http://127.0.0.1:8000/paises/"
class Paises extends Component{
    state={
        data:[],
        modalInsertar:false,
        modalEliminar:false,
        form:{
            id:'',
            nombre:'',
            pub_date:'',
            img:'',
            tipoModal:''
        }
    }
    peticionGet=()=>{
        axios.get(url).then(response=>{
            this.setState({data: response.data});
        }).catch(error=>{
            console.log(error.message);
        })
    }
    peticionPost=async()=>{
        delete this.state.form.id;
        await axios.post(url,this.state.form).then(response=>{
            this.modalInsertar();
            this.peticionGet();
        }).catch(error=>{
            console.log(error.message);
        })
    }
    peticionPut=()=>{
        axios.put(url+this.state.form.id+'/', this.state.form).then(response=>{
            this.modalInsertar();
            this.peticionGet();
        }).catch(error=>{
            console.log(error.message);
        })
    }
    peticionDelete=()=>{
        axios.delete(url+this.state.form.id).then(response=>{
            this.setState({modalEliminar:false})
            this.peticionGet();
        }).catch(error=>{
            console.log(error.message);
        })
    }
    seleccionarPais = (pais) =>{
        this.setState({
            tipoModal:'actualizar',
            form:{
                id:pais.id,
                nombre:pais.nombre,
                pub_date:pais.pub_date,
                img:pais.img
            }
        })
    }

    componentDidMount(){
        this.peticionGet();
    }
    modalInsertar=()=>{
        this.setState({modalInsertar:!this.state.modalInsertar});
    }
    handleChange=async e=>{
        e.persist();
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]:e.target.value
            }
        });
        console.log(this.state.form)
    }
    render(){
        const {form} = this.state;
        return(
            <div className='flex'>
                <Sidebar></Sidebar>
                <div className='content w-100'>
                <Navbar></Navbar>
            <div className="container">
                <br></br>
                <button className="btn btn-primary" onClick={()=>{this.setState({form:null,tipoModal:'insertar'});this.modalInsertar()}}>Agregar</button>
                <h1></h1>
                <Paper sx={{ overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 700 }}>
                <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                    
                        <TableCell>
                        ID
                        </TableCell>
                        <TableCell>
                        Nombre
                        </TableCell>
                        <TableCell>
                        Imagen
                        </TableCell>
                        
                        <TableCell>
                        Fecha
                        </TableCell>
                        <TableCell>
                        Acciones
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
                                        {elementos.nombre}
                                    </TableCell>
                                    
                                    <TableCell  align={elementos.align} >
                                        <img src={elementos.img} width="200px"></img>
                                    </TableCell>
                                    <TableCell  align={elementos.align} >
                                        {elementos.pub_date}
                                    </TableCell>
                    
                                    <TableCell  align={elementos.align} >
                                    <button className="btn btn-primary" onClick={()=>{this.seleccionarPais(elementos);this.modalInsertar()}}><FontAwesomeIcon icon={faEdit}/></button>{"  "}
                                        <button className="btn btn-danger" onClick={()=>{this.seleccionarPais(elementos);this.setState({modalEliminar:true})}}><FontAwesomeIcon icon={faTrashAlt}/></button>
                                    </TableCell>
                            </TableRow>  
                            
                            )})
                    }
                    
                </TableBody>
                </Table>
            </TableContainer>
            </Paper>

                <Modal isOpen={this.state.modalInsertar}>
                    <ModalHeader style={{display:'block'}}>
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Agregar Pais</h5>
                            <button type="button" class="btn-close" onClick={()=>this.modalInsertar()}></button>
                        </div>
                    </ModalHeader>
                    <ModalBody>
                        <div className="form-group">
                            <label htmlFor="id">ID</label>
                            <input className="form-control" type="text" name="id" id="id" readOnly onChange={this.handleChange} value={form?form.id:this.state.data.length+1}></input>
                            <br></br>
                            <label htmlFor="nombre">Nombre</label>
                            <input className="form-control" type="text" name="nombre" id="nombre" onChange={this.handleChange} value={form?form.nombre:''}></input>
                            <br></br>
                            
                            <input className="form-control" type="hidden" name="pub_date" id="pub_date" onChange={this.handleChange} value={form?form.pub_date:''}></input>
                            <label htmlFor="img">Imagen</label>
                            <input className="form-control" type="url" name="img" id="img" onChange={this.handleChange} value={form?form.img:''}></input>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        {this.state.tipoModal=='insertar'?
                            <button className="btn btn-success" onClick={()=>this.peticionPost()}>Agregar</button>:
                            <button className="btn btn-primary" onClick={()=>this.peticionPut()}>Actualizar</button>
                        }
                        
                        <button className="btn btn-danger" onClick={()=>this.modalInsertar()}>Cancelar</button>
                    </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.modalEliminar}>
                    <ModalBody>
                        Seguro que desea eliminar el pais {form && form.nombre}
                    </ModalBody>
                    <ModalFooter>
                        <button className="btn btn-danger" onClick={()=>this.peticionDelete()}>Si</button>
                        <button className="btn btn-secundary" onClick={()=>this.setState({modalEliminar:false})}>No</button>
                    </ModalFooter>
                </Modal>
            </div>
            </div>
            </div>
        )
    }
}
export default Paises