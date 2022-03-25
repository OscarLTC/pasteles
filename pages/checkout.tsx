import { NextPage } from "next";
import Link from "next/link";
import router from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { userState } from "../storage/auth.atom";
import { carritoState } from "../storage/carrito.atom";

const Checkout: NextPage = () => {
    
    const [subtotal, setSubtotal] = useState(0)
    const [envio, setEnvio] = useState('recojo')
    const user = useRecoilValue(userState);
    const [carrito, setCarrito] = useRecoilState(carritoState);


    useEffect(() => {
        setSubtotal(
            carrito.flatMap(pastel => pastel.cantidad * pastel.precio).reduce((sum, current) => sum + current, 0)    
        )
    }, [])

    const onEnvioClick = (event:any) => {
        setEnvio(event.target.value)
    }

    const onFinalizarCompraClick = () => {
    const compra = {
                idusuario : user.id,
                detalle : carrito.map(pastel => ({
                idpastel : pastel.id,
                cantidad : pastel.cantidad,
                subtotal : pastel.cantidad * pastel.precio
            }))
        }

        console.log(compra)

        fetch('http://localhost:3906/api/carrito/compra', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(compra)
           }
        )
        .then(() => {
            alert("Venta realizada")
            setCarrito([])
            router.push('/')
        })

    }
    return (<div className="container-fluid">
        <div className="row pt-0 g-5 m-0">
            <div className="col-4">
                <label htmlFor="basic-url" className="form-label mb-4 display-5 fs-2">Información Personal</label>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Usuario</span>
                    <input type="text" className="form-control bg-light" placeholder="Usuario" readOnly
                        aria-describedby="basic-addon1" value={user?.nombre}/>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Email</span>
                    <input type="text" className="form-control bg-light" placeholder="Email" readOnly
                        aria-describedby="basic-addon1" value={user?.email}/>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Dirección</span>
                    <input type="text" className="form-control bg-light" placeholder="Direccion" readOnly
                        aria-describedby="basic-addon1" value={user?.direcicon}/>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Telefono</span>
                    <input type="text" className="form-control bg-light" placeholder="Telefono" readOnly
                        aria-describedby="basic-addon1" value={user?.telefono}/>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Telefono fijo (*)</span>
                    <input type="text" className="form-control bg-light" placeholder="Telefono Fijo"
                        aria-describedby="basic-addon1" />
                </div>
            </div>
            <div className="col-4">
                <label htmlFor="basic-url" className="form-label mb-4 display-5 fs-2">Métodos de Envio</label>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="envio" value="delivery" id="flexRadioDefault1" 
                    onClick={onEnvioClick}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Delivery - <b>S/. 10.00</b>
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="envio" value="recojo" id="flexRadioDefault2" checked 
                    onClick={onEnvioClick}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Recojo a Tienda
                    </label>
                </div>


                <label htmlFor="basic-url" className="mt-5 form-label mb-4 display-5 fs-2">Métodos de Pago</label>
                <div className="input-group mb-3">
                    <label className="input-group-text" htmlFor="inputGroupSelect01">Métodos</label>
                    <select className="form-select" id="inputGroupSelect01">
                        <option selected>Efectivo</option>
                        <option value="1">Tarjeta de Credito</option>
                        <option value="2">Tarjeta de Debito</option>
                    </select>
                </div>
            </div>
            <div className="col-4">
                <label htmlFor="basic-url" className="form-label mb-4 display-5 fs-2">Información de Venta</label>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Pastel</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            carrito.map(pastel => 
                                <tr key={pastel.id}>
                            <th>{pastel.nombre}</th>
                            <td>S/. {(pastel.precio).toFixed(2)}</td>
                            <td>{pastel.cantidad}</td>
                            <td>S/. {(pastel.precio * pastel.cantidad).toFixed(2)}</td>
                                </tr>)
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Subtotal</th>
                            <th>S/. {(subtotal).toFixed(2)}</th>
                        </tr>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>IGV</th>
                            <th>S/. {(subtotal * 0.18).toFixed(2)}</th>
                        </tr>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Delivery</th>
                            <th>{
                                envio === 'recojo'? 'S/. 0.00' : 'S/. 10.00'
                            }</th>
                        </tr>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>S/. {(subtotal * 1.18 + (envio === 'recojo'? 0 : 10)).toFixed(2)}</th>
                        </tr>
                    </tfoot>
                </table>
                <div className="text-end mt-4">
                <Link href={'carrito'}>
                    <button className="btn btn-md btn-danger me-2">Volver</button>
                </Link>
                <button className="btn btn-lg btn-warning" onClick={onFinalizarCompraClick}>Finalizar Compra</button>
                </div>
            </div>
        </div>
    </div>

    )
}

export default Checkout;