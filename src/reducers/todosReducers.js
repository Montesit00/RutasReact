import {type} from "../types/type";

export const todoReducers = (state,action) => {
    switch (action.types) {
        case type.addTodo:
            return [
                ...state,
                action.payload
            ]        
        
        case type.removeTodo:
            return state.filter( todo => todo.id /*distinto*/ == action.payload)
        
        case type.setTodo:
                return action.payload

        case type.deleteTodo:
                    return state.map(todo=>
                        (todo.id === action.payload.id) ? todo = payload : todo)

        default:
            return state;
    }
}