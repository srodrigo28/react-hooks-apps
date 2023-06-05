import { useEffect, useState } from "react";
import { PostForm } from './components/PostForm'
import { Posts } from "./Post";
import { PostItem } from "./components/PostItem";

export function Get8() {
    const url = "https://jsonplaceholder.typicode.com/posts"
    
    const [posts, setPosts] = useState<Posts[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        loadPosts();
    }, [])
    const loadPosts = async () => {
        try {
            setLoading(true); //opcional
            const response = await fetch(url)
            const json = await response.json()
            setLoading(false); //opcional
            setPosts(json);
        } catch (e) {
            console.error(e);
        }
    }
    const handleAddPost = async (title: string, body: string) => {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({ title, body }),
            headers: { 'Content-Type': 'application/json' },
        });
        const json = await response.json();
        console.log(json);
    }
    return (
        <div>
            <h1>Get 8 Post Input usando Place Holder</h1>
            {loading &&
                <div>Carregando ...</div>   
            }
            <PostForm onAdd={handleAddPost} />

            {!loading && posts.length > 0 &&
                <>
                   {posts.map((item, index) => (
                        <PostItem key={index} data={item} />
                   ))}
                </>
            }
            {!loading && posts.length === 0 &&
                <div>Servidor sem serviço :( </div>
            }
        </div>
    )
}