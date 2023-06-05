import { ChangeEvent, useState } from 'react'

type Props = {
    onAdd: (title: string, body: string) => void;
}

export function PostForm( { onAdd } : Props ){
    const [addTitle, setTitle] = useState('')
    const [addBody, setAddBody] = useState('')

    const handleAdicionarPost = () => {
        if(addTitle && addBody){
            onAdd(addTitle, addBody);

            alert('Sucesso !')
        }else{
            alert('Preencha todos os campos')
        }
    }

    const handleAddBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setAddBody(e.target.value);
    }

    return(
        <div>
            <h1>Form</h1>
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
        </div>
    )
}