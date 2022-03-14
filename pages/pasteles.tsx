import { NextPage } from "next"
import { Suspense, useEffect } from "react"
import { ListaCategorias } from "./components/lista-categorias"
import { ListaPasteles } from "./components/lista-pasteles"

const Pasteles: NextPage = () =>{
    return (
        <div className="row my-3 mx-0">
            <ListaCategorias/>
            <Suspense fallback={<div>Cargando...</div>}>
                <ListaPasteles/>
            </Suspense>
        </div>
    )
}
export default Pasteles