import { useContagem } from "../reducers/contagem"

export function Reducer2(){
    const [state, dispatch] = useContagem();
    return(
        <div>
            <h1>Reducer 2</h1>
            Contagem: {state.count}
            <hr />
            <button onClick={ () => dispatch( { type: "ADD" }) }>+</button>
            <button onClick={ () => dispatch( { type: "DEL" }) }>-</button>
            <button onClick={ () => dispatch( { type: "RESET" }) }>RESET</button>
        </div>
    )
}
