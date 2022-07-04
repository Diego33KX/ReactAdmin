import React,{ useState, useEffect, createContext} from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [productos, setProductos] = useState([])
    const [menu, setMenu] = useState(false)
    const [carrito, setCarrito] = useState([])
    const [data, setData] = useState([])
    const [form,setForm] = useState({
            id:'',
            nombre:'',
            categoria:'',
            pais:'',
            precio:'',
            stock:'',
            marca:'',
            talla:'',
            genero:'',
            img_delante:'',
            img_atras:'',
            img_costado:'',
            descripcion:'',
            pub_date:'',
            tipoModal:''
    })
    console.log(menu);

    useEffect(()=>{
      axios.get('http://127.0.0.1:8000/productos/')
      .then(res=>{
        setProductos({ productos: res.data })
      })
    },[])

    const addCarrito = (id)=>{
      const check = carrito.every(item =>{
        return item.id !== id;
      })
      if(check){
        const data = productos.filter(producto =>{
          return producto.id === id
        })
        setCarrito([...carrito,...data])
      }else{
        alert("El producto ya se encuentra en el carrito")
      }
    }
    
    const value = {
        productos:[productos],
		    menu: [menu, setMenu],
        addCarrito:addCarrito,
        carrito:[carrito,setCarrito]
		
	  }
    


    return(
        <DataContext.Provider value={value}>
			{props.children}
		</DataContext.Provider>
    )
}



