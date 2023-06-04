import { useEffect, useState } from "react";
import { Movie } from "./Movie";
import {v4 as uuidv4} from 'uuid';

export function Get2() {
    const id = uuidv4();
    const url = "https://api.b7web.com.br/cinema/"
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        loadMovies();
    },[])

    const loadMovies = () => {
        fetch(url)
            .then((response) => {
                return response.json()
            }) 
            .then((json) => {
                setMovies(json)
            })
    }
    return (
        <div>
            <h1>Get 2</h1>

            <button onClick={loadMovies}>Carregar Filmes</button>
            
            <p>Total de Filmes: {movies.length} </p>
            <div className="box-movies">
                {movies.map((item) => (
                    <div key={item.titulo+id} >
                        <img src={item.avatar} width={100} className="avatar" />
                        {item.titulo}
                    </div>
                ))}
            </div>
        </div>
    )
}