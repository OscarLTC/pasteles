import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { pastelesSelector } from "../../storage/canasta.selector";

export const ListaPasteles = () => {

    const router = useRouter();

    const pasteles = useRecoilValue(pastelesSelector)

    const onDetalleClick = (pastel:any) => () => {
        router.push('pasteles/detalles/'+ pastel.id);
    }

    return (<>
                
                <div className="col-lg-10 col-sm-9">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2">
                            {pasteles.map((pastel: any) => (
                                <div className="col" key={pastel.id}>
                                <div className="card shadow-sm">
                                    <img src={pastel.url} alt="" className="img-fluid card-img-top" />
                                    <div className="card-body">
                                        <h3>{pastel.nombre}</h3>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <small className="text-muted"><span>{pastel.precio}</span> Soles</small>
                                            <div className="btn-group">
                                                <button type="button"
                                                    className="btn btn-sm btn-outline-dark" onClick={onDetalleClick(pastel)}>Ver Detalle</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
                </>

    );
}