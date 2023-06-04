import { useEffect, useState } from "react";
import { Posts } from "./Post";
import {v4 as uuidv4} from 'uuid';

export function Get5() {
    const id = uuidv4();
    const url = "https://jsonplaceholder.typicode.com/posts"
    
    const [posts, setPosts] = useState<Posts[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        loadPosts();
    }, [])
    
    const loadPosts = async () => {
        try {
            setLoading(false); //opcional
            let response = await fetch(url)
            let json = await response.json()
            setPosts(json);
        } catch (e) {
            setLoading(true);
            console.error(e);
        }
    }
    return (
        <div>
            <h1>Get 5 usando Place Holder</h1>
            {loading &&
                <div>Carregando ...</div>
                
            }
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