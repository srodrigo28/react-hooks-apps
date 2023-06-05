import { useState } from "react";
import { usePeoopleList } from "../reducers/usePeoopleList"

export function Reducer3(){
    const [list, dispatch] = usePeoopleList();
    
    const [nameInput, setNameInput] = useState('');
    
    const handleAdd = () => {
        if(nameInput){
            dispatch({
                type: 'ADD',
                payload:{ name: nameInput }
            })
            setNameInput('');
        }
        // alert('Adicionado com sucesso!')
    }
    const handleRemove = (id: string) => {
         dispatch({
            type: 'DEL',
            payload:{ id }
         })
    }
    return(
        <div>
            <h1>Reducer 3</h1>

            <input 
                type="text" 
                value={nameInput}
                onChange={ (e) => setNameInput(e.target.value) }    
            />

            <button onClick={handleAdd}>Adicionar</button>
            
            <div>
                <p>Lista de pessoas: </p>

                {list.map((item, index) => (
                    <div 
                        key={index}> 
                        {item.id}
                        {item.name}
                        <button
                            onClick={ () => handleRemove(item.id)}>
                        X
                        </button>
                    </div>    
                ))}
            </div>
        </div>
    )
}
