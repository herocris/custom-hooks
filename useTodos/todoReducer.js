export const todoReducer = (initialState = {}, action = {}) => {
    switch (action.type) {
        case '[TODO] add todo':
            return [...initialState, action.payload];
        case '[TODO] remove todo':
            return initialState.filter((todo) => todo.id !== action.payload);
        case '[TODO] Toogle todo':
            return initialState.map((todo) => {
                //todo.id === action.payload && (todo.done = true)
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            });
        default:
            return initialState;
    }
}