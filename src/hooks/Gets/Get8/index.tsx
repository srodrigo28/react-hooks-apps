import { useEffect, useState } from "react";
import { PostForm } from './components/PostForm'
import { Posts } from "./Post";
import { PostItem } from "./components/PostItem";
import { api } from "./api"

export function Get8() {
    const [posts, setPosts] = useState<Posts[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        loadPosts();
    }, [])

    const loadPosts = async () => {
        try {
            setLoading(true);
            const json = await api.getAllPosts();
            setLoading(false);
            setPosts(json);
        } catch (e) {
            console.error(e);
        }
    }
    const handleAddPost = async (title: string, body: string) => {
        const json = await api.addNewPost(title, body, 1);

        if(json.id){
            alert('Inserido com sucesso 1')
        }else{
            alert(' Erro não foi possível Inserir')
        }
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