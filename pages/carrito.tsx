import { NextPage } from "next"
import { useRouter } from "next/router"
import { useRecoilState } from "recoil"
import { userState } from "../storage/auth.atom"
import { carritoState } from "../storage/carrito.atom"

const Carrito: NextPage = () => {

    const [carrito, setCarrito] = useRecoilState(carritoState);
    const [user, setUser] = useRecoilState(userState);
    const router = useRouter();

    const onEliminarClick = (pastel:any) => () => {
        const nuevoCarrito = carrito.filter( item => item.id != pastel.id);
        setCarrito([...nuevoCarrito]);
    }

    const onComprarClick = () => {
        if(!user){
            router.push("/login")//CheckOut
            return
        }

        router.push("/checkout")
    }

    

    return (
        <div className="container mt-5">
            {
                carrito.length > 0 ? <div className="table-responsive">
                <table className="table ">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Categoria</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Subtotal</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {carrito.map((pastel) => <tr key={pastel.id}>
                            <td><img src={pastel.url} alt="" className="img-thumbnail" width="100px" /></td>
                            <td className="align-middle">{pastel.nombre}</td>
                            <td className="align-middle">{pastel.categoria}</td>
                            <td className="align-middle">{pastel.precio}</td>
                            <td className="align-middle">{pastel.cantidad}</td>
                            <td className="align-middle">S/.{(pastel.cantidad) * (pastel.precio)}</td>
                            <td className="align-middle">
                                <button className="btn btn-sm btn-danger" onClick={onEliminarClick(pastel)}>Eliminar</button>
                            </td>
                        </tr> )}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="fw-bold">Total </td>
                            <td>S/. {
                                    //Revisar
                                    carrito.flatMap(pastel => pastel.cantidad * pastel.precio).reduce((sum, current) => sum + current, 0)    
                                }
                            </td>
                            <td>
                            </td>
                        </tr>
                    </tfoot>
                </table>
                <div className="text-end">
                    <button className="btn btn-lg btn-dark" onClick={onComprarClick}>Ir a Pagar</button>
                </div>
            </div> : <div className="row">
                <img src="https://pizzeriacasadecampo.com/static/images/cart/empty_cart.png" alt="" className="col-md-5"/>
                <div className="col-md-7">
                    <h1 className="text-center display-4">Carrito Vacio</h1>
                    <p className="text-center text-muted mt-5">Debe agregar por lo menos 1 producto para que se muestre en el carrito</p>
                </div>
            </div>
            }
        </div>
    )
}
export default Carrito;