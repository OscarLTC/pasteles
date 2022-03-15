import { NextPage } from "next"
import { useEffect } from "react"

const Register: NextPage = () => {
    
    return (
        <div className="text-center form mx-2">
            <main className="form-signin">
                <form>
                    <img className="mb-5 img-form" src="../images/logoForm.png" alt="" width="150" height="150"/>

                        <div className="form-floating">
                            <input type="text" className="form-control name-user" required autoComplete="off" id="NombreID" placeholder="Usuario"/>
                                <label htmlFor="floatingInput" >Nombre de Usuario</label>
                        </div>
                        <div className="form-floating">
                            <input type="text" className="form-control mid" required autoComplete="off" id="TelefonoID" placeholder="Telefono"/>
                                <label htmlFor="floatingInput" >Telefono</label>
                        </div>
                        <div className="form-floating">
                            <input type="text" className="form-control mid" required autoComplete="off" id="DireccionID" placeholder="Direccion"/>
                                <label htmlFor="floatingInput" >Direccion</label>
                        </div>
                        <div className="form-floating">
                            <input type="email" className="form-control mid" required autoComplete="off" id="EmailID" placeholder="Email"/>
                                <label htmlFor="floatingInput" >Email</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" required placeholder="Contraseña"/>
                                <label htmlFor="floatingPassword" >Contraseña</label>
                        </div>

                        <div className="form-check form-switch mb-3">
                            <input className="form-check-input bg-warning" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Recordar Contraseña</label>
                        </div>
                        <button className="w-100 btn btn-lg btn-outline-dark" type="submit">Registrarse</button>
                        <p className="mt-5 mb-3 text-muted">@PasteleriaMilagros</p>
                </form>
            </main>
        </div>
    )
}
export default Register