import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Todo from '../../containers/Todo/Todo';
import { completeTodo, removeTodo } from '../../actions/todos';

const TodoList = ({ todos = [], onComplete = f => f, onRemove = f => f }) => (
    <div className="todo-list">
        {todos && todos.map(todo => (
            <Todo 
                key={todo.id} 
                todo={todo} 
                onComplete={() => onComplete(todo.id)} 
                onRemove={() => onRemove(todo.id)} 
            />
        ))}
    </div>
);

TodoList.propTypes = {
    todos: PropTypes.array,
    onComplete: PropTypes.func,
    onRemove: PropTypes.func
};

const mapStateToProps = ({ todos }) => ({
    todos
});

const mapDispatchToProps = (dispatch) => ({
    onComplete: id => {
        dispatch(completeTodo(id));
    },
    onRemove: id => {
        dispatch(removeTodo(id));
    }
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(TodoList);