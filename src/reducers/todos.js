import actionTypes from '../constants/action-types';

const todos = (state = [], action) => {
    switch (action.type) {
        case actionTypes.ADD_TODO: 
            return [ action.todo, ...state ];
        case actionTypes.REMOVE_TODO:
            return state.filter(todo => todo.id !== action.id);
        case actionTypes.COMPLETE_TODO:
            return state.map(todo => {
                return (todo.id === action.id) 
                    ? { ...todo, completed: true }
                    : todo;
            });
        default: 
            return state;
    }
};

export default todos;