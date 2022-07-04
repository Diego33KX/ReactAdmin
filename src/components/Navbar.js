import { Component } from "react"
import { NavDropdown } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import * as FaIcons from 'react-icons/fa'
import DropdownContext from "react-bootstrap/esm/DropdownContext";
import { NavLink } from "react-router-dom"
class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="#" >Welcome Admin</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
                        <li className="nav-item">
                        <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                        </li>
                    </ul>
                    <Dropdown>
                        <Dropdown.Toggle>
                            Diego Flores
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        <Dropdown.Item value="1">Option 1</Dropdown.Item>
                        <Dropdown.Item value="2">Option 2</Dropdown.Item>
                        <Dropdown.Item value="3">Option 3</Dropdown.Item>
                        <Dropdown.Item value="4">Option 4</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <NavDropdown
                    id="nav-dropdown-dark-example"
                    title="Diego Flores"
                    menuVariant="dark"
                    >
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item><NavLink to="/sales" className="text-white rounded py-2 w-100 d-inline-block px-3" exact activeClassName="active"> <FaIcons.FaUserAlt className="me-3"/>Ventas</NavLink></NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </div>
                    
                </div>
            </nav>
        )
    }
}
export default Navbar