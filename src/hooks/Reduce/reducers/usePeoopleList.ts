import { useReducer } from "react";
import { v4 as uid } from "uuid"

type Person = {
    id: string;
    name: string;
}

type ActionType = {
    type: string;
    payload: {
        name?: string;
        id?: string;
    }
}

const initialState: Person[] = [];

const reducer = ( state: Person[], action: ActionType ) => {
    switch (action.type) {
        case 'ADD':
            if(action.payload?.name){
                const newState = [...state];
                newState.push({
                    id: uid(),
                    name: action.payload?.name
                });
                return newState;
            }
        break
        case 'DEL':
            if(action.payload?.id){
                let newState = [...state];
                newState =  newState.filter(item => item.id !== action.payload?.id);
                return newState
            }
        break;
    }
    return state;
}

export const usePeoopleList = () => {
    return useReducer(reducer, initialState)
}