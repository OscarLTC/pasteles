import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { categoriaState } from "../../storage/categoria.atom";

export const ListaCategorias= () => {

    const setCategoria = useSetRecoilState(categoriaState);

    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        fetch('http://localhost:3906/api/categorias')
        .then((response) => (response.json()))
        .then( (data) => (setCategorias(data)))
    }, []);

    const onCategoryClick = (categoria:any) => () => {
        setCategoria(categoria.id);
    }

    const onTodosClick = () => {
        setCategoria('');
    }

    return(<div className="col-lg-2 col-sm-3" >
    <div className="card-body mx-2">
        <ul className="list-group list-group-flush">
        <li className="list-group-item my-1 pb-3 text-center">
                    <button className="btn btn-link text-secondary text-decoration-none" onClick={onTodosClick}>
                        Todos
                    </button>
                </li>
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