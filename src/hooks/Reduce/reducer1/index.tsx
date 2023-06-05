import { useReducer } from "react"

type reducerState = {
    count: number;
}

type reduceAction = {
    type: string;
}

// const valor = 2;

const initialState = { count: 0 };

const reducer1 = (state: reducerState, action: reduceAction) => {
    switch (action.type) {
        case "ADD":
            return { ...state, count: state.count + 1 };
            //return { count: state.count += valor };
        break;
        case "DEL":
            // return { count: state.count -= valor };
            return { ...state, count: state.count + 1 };
        break;
        case "RESET":
            return initialState;
        break;
        default:
            return state;
        break;
    }
}

export function Reducer1(){
    
    const [state, dispatch] = useReducer(reducer1, initialState)
    
    return(
        <div>

        </div>
    )
}