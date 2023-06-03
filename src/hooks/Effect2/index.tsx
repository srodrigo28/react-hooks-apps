import { ChangeEvent, useEffect, useState } from "react"

export function Effect2() {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('')
    const [fullName, setFullName] = useState('')

    const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
    }
    return (
        <>
            <h1>Aula Use Effect 01</h1>

            <div>
                <input
                    type="text"
                    value={name}
                    placeholder="Digite seu nome"
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    value={lastName}
                    placeholder="Digite seu nome"
                    onChange={handleLastNameChange} />

                <p>Nome completo: {fullName}</p>
            </div>

            <button onClick={handleClick}>Clique aqui</button>
        </>
    )
}