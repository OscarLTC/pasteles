import { useEffect, useState } from "react";

export const ListaCategorias= () => {

    const onCategoryClick = (categoria:any) => () => {
        console.log(categoria)
    }

    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        fetch('http://localhost:3906/api/categorias')
        .then((response) => (response.json()))
        .then( (data) => (setCategorias(data)))
    }, []);

    return(<div className="col-lg-2 col-sm-3" >
    <div className="card-body mx-2">
        <ul className="list-group list-group-flush">
            {categorias.map((categoria:any) => (
                <li className="list-group-item my-1 pb-3 text-center" key={categoria.id}>
                    <button className="btn btn-link text-secondary text-decoration-none" onClick={onCategoryClick(categoria)}>
                        {categoria.nombre}
                    </button>
                </li>
            ))}
        </ul>
    </div>
</div>
    );
}