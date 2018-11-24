import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './Todo.scss';

const Todo = ({ todo, onComplete = f => f, onRemove = f => f }) => (
    <article className="todo">
        <section className="todo__content">
            <h3 className={`todo__name ${todo.completed ? 'completed' : ''}`}>Name: { todo.name }</h3>
            <p className="todo__status">Status: { todo.completed ? 'completed' : 'in process' }</p>
        </section>
        <section className="todo__control">
            <Button name="Remove" classNames={['button--small']} type="button" handleClick={onRemove} />
            {todo.completed ? 
                null :
                <Button name="Complete" classNames={['button--small']} type="button" handleClick={onComplete} />
            }
        </section>
    </article>
);

Todo.propTypes = {
    todo: PropTypes.object.isRequired,
    onComplete: PropTypes.func,
    onRemove: PropTypes.func,
};

export default Todo;