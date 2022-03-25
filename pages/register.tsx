import { NextPage } from "next"
import router from "next/router"
import { useEffect, useState } from "react"
import { RecoilValueReadOnly, useRecoilState } from "recoil"
import { userState } from "../storage/auth.atom"

const Register: NextPage = () => {
    
    const [usuario, setUsuario] = useState('')
    const [telefono, setTelefono] = useState('')
    const [direccion, setDireccion] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [auth, setAuth] = useRecoilState(userState)



    const onUsuarioChange = (event:any) => {
        setUsuario(event.target.value)
    }

    const onTelefonoChange = (event:any) => {
        setTelefono(event.target.value)
    }

    const onDireccionChange = (event:any) => {
        setDireccion(event.target.value)
    }

    const onEmailChange = (event:any) => {
        setEmail(event.target.value)
    }

    const onPassChange = (event:any) => {
        setPassword(event.target.value)
    }

    const onRegistrarClick = () => {
        fetch('http://localhost:3906/api/usuario/registrar', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombre: usuario,
                telefono: telefono,
                direcicon: direccion,
                email: email,
                pass: password,

            })
           }
        )
        .then((response) => {
            if(response.status === 200){
                return response.json()
            }
            else{
                return null
            }
        })
        .then((user) => {
            console.log(user)
            setAuth(user)
            router.push("/carrito")
            
        })
    }

    return (
        <div className="text-center form mx-2">
            <main className="form-signin">
                <form>
                    <img className="mb-5 img-form" src="../images/logoForm.png" alt="" width="150" height="150"/>

                        <div className="form-floating">
                            <input type="text" className="form-control name-user" required autoComplete="off" 
                            id="NombreID" placeholder="Usuario" onChange={onUsuarioChange}/>
                                <label htmlFor="floatingInput" >Nombre de Usuario</label>
                        </div>
                        <div className="form-floating">
                            <input type="text" className="form-control mid" required autoComplete="off" 
                            id="TelefonoID" placeholder="Telefono" onChange={onTelefonoChange}/>
                                <label htmlFor="floatingInput" >Telefono</label>
                        </div>
                        <div className="form-floating">
                            <input type="text" className="form-control mid" required autoComplete="off" 
                            id="DireccionID" placeholder="Direccion" onChange={onDireccionChange}/>
                                <label htmlFor="floatingInput" >Direccion</label>
                        </div>
                        <div className="form-floating">
                            <input type="email" className="form-control mid" required autoComplete="off" 
                            id="EmailID" placeholder="Email" onChange={onEmailChange}/>
                                <label htmlFor="floatingInput" >Email</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" required placeholder="Contraseña" 
                            onChange={onPassChange}/>
                                <label htmlFor="floatingPassword" >Contraseña</label>
                        </div>

                        <div className="form-check form-switch mb-3">
                            <input className="form-check-input bg-warning" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Recordar Contraseña</label>
                        </div>
                        <button className="w-100 btn btn-lg btn-outline-dark" type="button" onClick={onRegistrarClick}>Registrarse</button>
                        <p className="mt-5 mb-3 text-muted">@PasteleriaMilagros</p>
                </form>
            </main>
        </div>
    )
}
export default Register