import { Posts } from "../../Post";

type Props = {
    data: Posts
}

export function PostItem( { data } : Props ){
    return(
        <>
        <div className="box-posts">
            <h4>{data.title}</h4>
            <small> # {data.id} - Usuário: {data.userId}</small>
            <p>{data.body}</p>
        </div>
        </>
    )
}