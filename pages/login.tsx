import { NextPage } from "next"

const Login: NextPage = () =>{
    return (
        <div className="text-center form">
            <main className= "form-signin">
                <form>
            <img className="mb-5" src="../images/logoForm.png" alt="" width="150" height="150"/>

            <div className="form-floating">
                <input type="text" className="form-control name-user" required autoComplete="off" id="UserID" placeholder="User"/>
                <label htmlFor="floatingInput">Usuario</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" required  id="PassID" placeholder="Password"/>
                <label htmlFor="floatingPassword" >Contraseña</label>
            </div>

            <div className="form-check form-switch mb-4">
                <input className="form-check-input bg-warning" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Recordar Contraseña</label>
            </div>
            <input src="../index.html" className="w-100 btn btn-lg btn-outline-dark"  type="submit" value="Iniciar Sesion"/>
            <p className="mt-4 text-muted">@PasteleriaMilagros</p>
            </form>
        </main>
        </div>
    )
}
export default Login