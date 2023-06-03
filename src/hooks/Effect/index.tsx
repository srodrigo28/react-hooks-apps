import { useEffect, useState } from "react"

export function Effect() {
    const [name, setName] = useState('Rodrigo');

    useEffect(() => {
        alert('Executou !')
    }, []);

    const handleClick = () => {
        setName('Pedro');
    }

    return (
        <>
            <h1>Aula Use Effect 01</h1>

            Nome: {name}
            <button onClick={handleClick}>Clique aqui</button>
        </>
    )
}