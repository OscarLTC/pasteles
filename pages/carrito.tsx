import { NextPage } from "next"
import { useState } from "react"
import { useRecoilValue } from "recoil"
import { carritoState } from "../storage/carrito.atom"

const Carrito: NextPage = () =>{
    const carrito = useRecoilValue(carritoState);

    return (
        <div className="mt-4">
        {
                carrito.map(pastel => <div key={pastel.id}>
                            <main>
                <div className="container">
                    <div className="card mb-3 ">
                        <div className="row align-items-center">
                            <div className="col-4 border-end text-center">
                                <img src={pastel.url} className="card-img-top rounded" />
                            </div>
                            <div className="col-8 tet center">
                                <div className="card-body">
                                    <h5 className="card-title">{pastel.nombre}</h5>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><b>Precio: </b>{pastel.precio} soles</li>
                                    <li className="list-group-item"><b>Categoria: </b> {pastel.categoria}</li>
                                    <li className="list-group-item"><b>Cantidad: </b> {pastel.cantidad}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
                        </div>
                    )
            }
        </div>
    )
}
export default Carrito