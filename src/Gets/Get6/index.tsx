import { ChangeEvent, useEffect, useState } from "react";
import { Posts } from "./Post";
import {v4 as uuidv4} from 'uuid';

export function Get6() {
    const id = uuidv4();
    const url = "https://jsonplaceholder.typicode.com/posts"
    
    const [posts, setPosts] = useState<Posts[]>([])
    const [loading, setLoading] = useState(false)

    const [addTitle, setTitle] = useState<string>('')
    const [addBody, setBody] = useState<string>('')

    const handleAddBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setBody(e.target.value);
    }

    const handleAdicionarPost = () => {
        alert("Titulo: " + addTitle + "Titulo: " + addBody);
    }

    useEffect(() => {
        loadPosts();
    }, [])
    
    const loadPosts = async () => {
        try {
            setLoading(true); //opcional
            let response = await fetch(url)
            let json = await response.json()
            setLoading(false); //opcional
            setPosts(json);
        } catch (e) {
            console.error(e);
        }
    }
    return (
        <div>
            <h1>Get 6 Post Input usando Place Holder</h1>
            {loading &&
                <div>Carregando ...</div>
                
            }

            <fieldset className="form">
                <legend>Adicionar Novo Post</legend>

                <input
                    type="text"
                    value={addTitle}
                    placeholder="Digite um título"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <br />
                <textarea
                    name=""
                    value={addBody}
                    onChange={handleAddBodyChange}
                    placeholder="Texto a adicionar"
                >
                    
                </textarea>
                <br />
                <button onClick={handleAdicionarPost}>Adicionar</button>

            </fieldset>

            {!loading && posts.length > 0 &&
                <>
                    <p>Total de Posts: {posts.length} </p>
                    <div className="box-movies">
                            {posts.map((item, index) => (
                                <div key={index+id} >
                                <h4>{item.title}</h4>
                                <small> # {item.id} - Usuário: {item.userId}</small>
                                <p>{item.body}</p>
                            </div>
                        ))}
                    </div>
                </>
            }
            {!loading && posts.length === 0 &&
                <div>Servidor sem serviço :( </div>
            }
        </div>
    )
}