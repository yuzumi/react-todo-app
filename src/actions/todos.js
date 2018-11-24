import actionTypes from '../constants/action-types';

export const addTodo = (todo) => ({
    type: actionTypes.ADD_TODO,
    todo
});

export const removeTodo = (id) => ({
    type: actionTypes.REMOVE_TODO,
    id
});

export const completeTodo = (id) => ({
    type: actionTypes.COMPLETE_TODO,
    id
});