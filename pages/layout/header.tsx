import Link from "next/link";
import { useRouter } from "next/router";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { userState } from "../../storage/auth.atom";
import { buscarState } from "../../storage/bucar.atom";
import { carritoState } from "../../storage/carrito.atom";


export const Header = () => {
    
    const router = useRouter();
    const [user, setUser] = useRecoilState(userState);
    const carrito = useRecoilValue(carritoState);
    const setBuscar = useSetRecoilState(buscarState);

    const onSalirClick = () => {
        setUser(null)
    }

    const onBuscarKeyUp = (event: any) => {
        if(event.key == "Enter"){
            setBuscar(event.target.value)
            router.push("/pasteles")
            event.target.value = ''
        }
    };

    const onBuscarKeyPress = (event: any) => {
        if(event.key == "Enter"){
            event.preventDefault();
        }
    }

    return (
        <header className="bg-light text-dark">
            <div className="container-fluid">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <Link href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        <img src="/images/logo.png" alt="" width="150" className="img-fluid mt-3 pb-4" />
                    </Link>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-2">
                        <li>
                            <Link href="/">
                                <a className="nav-link px-xl-5 px-3 border-1 border-end text-dark">Inicio</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/pasteles">
                                <a className="nav-link px-xl-5 px-3 border-1 border-end text-dark">Pasteles</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/carrito">
                            <a className="nav-link px-xl-5 px-3 text-dark"><span className="pe-1">Carrito</span>
                                <span className="badge rounded-pill bg-danger">
                                {carrito.length}
                                </span>
                            </a>
                            </Link>
                        </li>
                    </ul>

                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-5">
                        <input type="text" className="form-control form-control-dark " placeholder="Buscar..."  
                        onKeyUp={onBuscarKeyUp} aria-label="Search" onKeyPress={onBuscarKeyPress}/>
                    </form>
                    {
                        user ? <div>
                            <div>
                                <img src="/images/user.png" className="mt-4"/>
                                {user.nombre}
                                <button className="btn btn-sm btn-outline-danger mx-3" onClick={onSalirClick}>Cerrar Sesion</button>
                            </div>
                        </div> : <div className="text-xxl-end text-lg-center">
                            <Link href='/login'>
                                <a type="button" className="btn btn-outline-dark me-2">Iniciar Sesión</a>
                            </Link>
                            <Link href="/register">
                                <a type="button" className="btn btn-warning" >Registrarse</a>
                            </Link>
                        </div>
                    }
                </div>
            </div>
        </header>
    )
}