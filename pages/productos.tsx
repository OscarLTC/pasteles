import { NextPage } from "next"
import Image from "next/image"
import { useEffect, useState } from "react"

const Products: NextPage = () =>{
    const [productos, setProductos] = useState([])
    useEffect(() => {
        fetch('http://localhost:3906/api/pasteles')
        .then((response) => (response.json()))
        .then( (data) => (setProductos(data)))
    }, [])
    return (
        <div className="container-fluid popular" id="productos" >
            <p className="fs-1 text-center pt-4">Pasteles Más Comprados</p>
            <div className="row py-4">
                <div className="col-xl-12">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            {productos.map((producto: any) => (
                                <div className="col" key={producto.id}>
                                    <div className="card shadow-sm">
                                        <img src={producto.url}alt="" className="img-fluid" />
                                        <div className="card-body ">
                                            <h3>{producto.nombre}</h3>
                                            <p className="card-text parrafo">{producto.descripcion}</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                    <button type="button"
                                                        className="btn btn-sm btn-outline-dark">Comprar</button>
                                                </div>
                                                <small className="text-muted"><span>{producto.precio}</span> Soles</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Products