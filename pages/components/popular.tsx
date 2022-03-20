import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export const Popular = () =>{

    const router = useRouter();
    const [pasteles, setPasteles] = useState([])

    const onDetalleClick = (pastel:any) => () => {
        router.push('pasteles/detalles/'+ pastel.id);
    }
    useEffect(() => {
        fetch('http://localhost:3906/api/pasteles/ranking')
        .then((response) => (response.json()))
        .then( (data) => (setPasteles(data)))
    }, []);

    return(
        <div className="container-fluid popular" id="productos" >
            <p className="fs-1 text-center pt-4">Pasteles Más Comprados</p>
            <div className="row py-4">
                <div className="col-xl-12">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            {pasteles.map((pastel: any) => (
                                <div className="col" key={pastel.id}>
                                <div className="card shadow-sm">
                                    <img src={pastel.url} alt="" className="img-fluid card-img-top" />
                                    <div className="card-body">
                                        <h3>{pastel.nombre}</h3>
                                        <p className="card-text parrafo">{pastel.descripcion}</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button"
                                                    className="btn btn-sm btn-outline-dark"
                                                    onClick={onDetalleClick(pastel)}>Ver Detalle</button>
                                            </div>
                                            <small className="text-muted"><span>{pastel.precio}</span> Soles</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}