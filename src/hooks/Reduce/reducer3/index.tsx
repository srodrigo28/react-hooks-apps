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
                    <div key={index}> {item.id} - {item.name}</div>    
                ))}
            </div>
        </div>
    )
}
