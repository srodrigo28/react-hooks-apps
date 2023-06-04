import { useState } from "react";

export function Get() {
    const url = "https://api.b7web.com.br/cinema/"

    const [movies, setMovies] = useState([]);

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
            <h1>Get</h1>

            <button onClick={loadMovies}>Carregar Filmes</button>
            
            <p>Total de Filmes: { movies.length} </p>
        </div>
    )

    // https://api.b7web.com.br/cinema/
}