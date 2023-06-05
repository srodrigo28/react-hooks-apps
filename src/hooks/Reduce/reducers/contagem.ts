import { useReducer } from "react"

type reducerState = {
    count: number;
}
type reduceAction = {
    type: string;
}
const initialState  = { 
    count: 0 
}
const reduce = (state: reducerState, action: reduceAction) => {
    switch (action.type) {
        case "ADD":
            //return { count: state.count += valor };
            return { ...state, count: state.count + 1 };
        break;
        case "DEL":
            // return { count: state.count -= valor };
            return { ...state, count: state.count - 1 };
        break;
        case "RESET":
            return initialState;
        break;
    }
    return state;
}
export const useContagem = () =>{
    return useReducer(reduce, initialState);
}