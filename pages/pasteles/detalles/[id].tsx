import { timeEnd } from "console";
import { NextPage } from "next"
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { pathToFileURL } from "url";
import { carritoState } from "../../../storage/carrito.atom";
import { Canasta } from "../../../storage/canasta.model";

const Detalle: NextPage = () => {

    const router = useRouter();
    const [carrito, setCarrito] = useRecoilState(carritoState)
    const idPastel = router.query.id;
    const [pastel, setPastel] = useState<any>()
    const [cantidad, setCantidad] = useState<number>(1)

    //route
    useEffect(() => {
        fetch('http://localhost:3906/api/pasteles/' + idPastel)
            .then((response) => (response.json()))
            .then((data) => (setPastel(data)))
    }, [])

    //Revisar
    const onAñadirCarritoClick = (pastel: any) => () => {
        const pastelEncontrado = carrito.find((item:Canasta) => (item.id === pastel.id)) 
        
        if(pastelEncontrado){
            const nuevoCarrito = carrito.map(item => {
                const nuevoItem = Object.assign({}, item);
                if(item.id == pastelEncontrado.id){
                    nuevoItem.cantidad += cantidad
                }
                return nuevoItem;
            })
            setCarrito([...nuevoCarrito])
        }else{
            const itemPastel : Canasta = {
                id: pastel.id,
                nombre: pastel.nombre,
                url: pastel.url,
                categoria: pastel.categoria.nombre,
                precio: pastel.precio,
                cantidad: cantidad
            }
            setCarrito([...carrito, itemPastel])
        }

        router.push('/carrito')
    }

    const onCantidadChange = (event: any) => {
        setCantidad(event.target.valueAsNumber)
    }
    return (
        <div className="container">
            <div className="card mt-5">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-center">
                        <img src={pastel?.url} className=" mx-lg-1 card-img-top rounded" alt="..." />
                    </div>
                    <div className="col-lg-8 borde-detalle">
                        <div className="card-body">
                            <h5 className="card-title display-6">{pastel?.nombre}</h5>
                            <p className="card-text"><strong>Descripcion: </strong>{pastel?.descripcion}</p>
                            <p className="card-text"><strong>Categoria: </strong>{pastel?.categoria ? pastel.categoria.nombre : ''}</p>
                            <p className="card-text"><strong>Precio: </strong>{pastel?.precio} soles</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="mb-3">
                                    <label htmlFor="cantidad" className="form-label fw-bold">Cantidad: </label>
                                    <input type="number" className="form-control" id="cantidad" min="1" defaultValue={cantidad} onChange={onCantidadChange} />
                                </div>
                                <div className="btn-group me-2">
                                    <button type="button" className="btn btn-sm btn-outline-dark" onClick={onAñadirCarritoClick(pastel)}>Añadir al Carrito</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detalle;