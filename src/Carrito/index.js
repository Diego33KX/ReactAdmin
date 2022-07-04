import React, {useContext} from "react"
import logo from '../components/Logo3.PNG'
import * as BiIcons from "react-icons/bi";
import { DataContext } from "../context/Dataprovider";

export const Carrito = () =>{
    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [carrito, setCarrito] = value.carrito
    const tooglefalse = () => {
        setMenu(false);
    };
    const show1 = menu ? "carritos show" : "carrito";
	const show2 = menu ? "carrito show" : "carrito";
    console.log(show1)
    return (
        <div className={show1}>
            <div className={show2}>
                <div className="carrito__close" onClick={tooglefalse}>
                    <BiIcons.BiX className="icon1"/>
                </div>
                <h2>Su carrito</h2>
                <div className="carrito__center">
                    <div className="carrito_item">
                        <img src={logo} alt=""></img>
                        <div>
                            <h3>title</h3>
                            <p className="price">$345</p>
                        </div>
                        <div>
                            <BiIcons.BiUpArrow className="icon2"/>
                            
                            <p className="cantidad">1</p>
                            <BiIcons.BiDownArrow className="icon2"/>
                            
                        </div>
                        <div className="remove__item">
                            <BiIcons.BiEraser className="icon4"/>
                        </div>
                    </div>
                </div>
                <div className="carrito__center">
                    <div className="carrito_item">
                        <img src={logo} alt=""></img>
                        <div>
                            <h3>title</h3>
                            <p className="price">$345</p>
                        </div>
                        <div>
                            <BiIcons.BiUpArrow className="icon2"/>
                            
                            <p className="cantidad">1</p>
                            <BiIcons.BiDownArrow className="icon2"/>
                            
                        </div>
                        <div className="remove__item">
                            <BiIcons.BiEraser className="icon4"/>
                        </div>
                    </div>
                </div>
                <div className="carrito__center">
                    <div className="carrito_item">
                        <img src={logo} alt=""></img>
                        <div>
                            <h3>title</h3>
                            <p className="price">$345</p>
                        </div>
                        <div>
                            <BiIcons.BiUpArrow className="icon2"/>
                            
                            <p className="cantidad">1</p>
                            <BiIcons.BiDownArrow className="icon2"/>
                            
                        </div>
                        <div className="remove__item">
                            <BiIcons.BiEraser className="icon4"/>
                        </div>
                    </div>
                </div>
                <div className="carrito__footer">
                    <h3>Total: $2334</h3>
                    <button className="btn">Payment</button>
                </div>
            </div>
            
        </div>
    )
}