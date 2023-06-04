import { useEffect, useState } from "react";
import { Movie } from "./Movie";
import {v4 as uuidv4} from 'uuid';

export function Get4() {
    const id = uuidv4();
    const url = "https://api.b7web.com.br/cinema/"
    
    const [loading, setLoading] = useState(false)
    const [movies, setMovies] = useState<Movie[]>([])

    useEffect(() => {
        loadMovies();
    },[])
    const loadMovies = async () => {
        try {
            setLoading(true);
                let response = await fetch(url)
                let json = await response.json()
            setLoading(false);
            setMovies(json)
        } catch (e) {
            setLoading(false);
            console.error(e);
        }
    }
    return (
        <div>
            <h1>Get 4</h1>
            {loading &&
                <div>Carregando ...</div>
            }
            {!loading && 
                <>
                    <p>Total de Filmes: {movies.length} </p>
                    <div className="box-movies">
                        {movies.map((item) => (
                            <div key={item.titulo+id} >
                                <img src={item.avatar} width={100} className="avatar" />
                                {item.titulo}
                            </div>
                        ))}
                    </div>
                </>
            }
            {!loading && movies.length === 0 &&
                <div>Servidor sem serviço :( </div>
            }
        </div>
    )
}