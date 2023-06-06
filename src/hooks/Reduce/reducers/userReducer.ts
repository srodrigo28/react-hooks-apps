import { reducerActionType } from "./reducerActionTypes";

export type UserType = {
    name: string;
    age: number;
}

export const useInitialState: UserType = {
    name: 'John Doe',
    age: 20
}

export const useReducer = (state: UserType, action: reducerActionType) => {
    switch(action.type) {
        case 'CHANGE_NAME':
            return { ...state, name: action.payload }
       break;
    case 'CHANGE_AGE':
            return { ...state, age: action.payload }
       break;
    }
    return state;
}