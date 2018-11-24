import React from 'react';
import { connect } from 'react-redux';
import Todo from '../../models/todo';
import { addTodo } from '../../actions/todos';
import './TodoForm.scss';

const TodoForm = ({ dispatch }) => {
    let $input = null;

    const handleSubmit = event => {
        event.preventDefault();

        const { value } = $input;

        if ( ! value.trim()) return;

        const newTodo = Todo.of(value);

        dispatch(addTodo(newTodo));
        $input.value = '';
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <div className="todo-form__group">
                <input className="todo-form__input" type="text" ref={node => $input = node} />
                <button className="todo-form__button button" type="submit">Add Todo</button>
            </div>
        </form>
    );
};

export default connect()(TodoForm);