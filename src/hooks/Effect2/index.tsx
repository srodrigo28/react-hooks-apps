import { ChangeEvent, useEffect, useState } from "react"
import './styles.css'

export function Effect2() {
    const [name, setName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('')
    const [fullName, setFullName] = useState<string>('')

    const handleClick = () => {
        alert('useEfect')
    }
    const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
    }
    const handleLimpar = () => {
        setName('');
        setLastName('');
    }
    useEffect(() => {
        setFullName(`${name} ${lastName}`)
    }, [name, lastName])
    return (
        <div className="container">
            <h1>Aula useEffect 02</h1>
            <div className="form">

                <div className="input-group">
                    <label>Seu nome</label>
                    <input
                        type="text"
                        value={name}
                        placeholder="Digite seu nome"
                        onChange={ (e) => setName(e.target.value) }
                    />
                </div>
                <div className="input-group">
                    <label>Segundo nome</label>
                    <input
                        type="text"
                        value={lastName}
                        placeholder="Digite seu nome"
                        onChange={handleLastNameChange}
                    />
                </div>
                <div className="input-group">
                    <p>Nome completo: {fullName}</p>
                </div>
                <div className="input-group">
                    <button onClick={handleClick}>Clique aqui</button>
                    <button onClick={handleLimpar}>Limpar</button>
                </div>
            </div>
        </div>
    )
}