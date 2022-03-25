import { NextPage } from "next"
import { useRouter } from "next/router"
import { useState } from "react"
import { useRecoilState } from "recoil"
import { userState } from "../storage/auth.atom"


const Login: NextPage = () =>{

    const router = useRouter();
    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')
    const [auth, setAuth] = useRecoilState(userState)

    const onUsuarioChange = (event:any) => {
        setUsuario(event.target.value);
    }

    const onPasswordChange = (event:any) => {
        setPassword(event.target.value);
    }

    const onIniciarClick = () => {
        fetch('http://localhost:3906/api/usuario/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: usuario,
                pass: password
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
        <div className="text-center form mx-2 mt-1">
            <main className= "form-signin">
                <form>
            <img className="mb-5 img-form" src="../images/logoForm.png" alt="" width="150" height="150"/>

            <div className="form-floating">
                <input type="text" className="form-control name-user" required autoComplete="off" 
                id="UserID" placeholder="User" onChange={onUsuarioChange}/>
                <label htmlFor="floatingInput">Usuario</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" required  
                id="PassID" placeholder="Password" onChange={onPasswordChange}/>
                <label htmlFor="floatingPassword" >Contraseña</label>
            </div>

            <div className="form-check form-switch mb-3">
                <input className="form-check-input bg-warning" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Recordar Contraseña</label>
            </div>
            <input className="w-100 btn btn-lg btn-outline-dark"  type="button" value="Iniciar Sesion"
            onClick={onIniciarClick}/>
            <p className="mt-4 text-muted">@PasteleriaMilagros</p>
            </form>
        </main>
        </div>
    )
}
export default Login