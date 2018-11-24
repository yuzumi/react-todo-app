import React from 'react';
import TodoForm from '../../components/TodoForm/TodoForm';
import TodoList from '../../components/TodoList/TodoList';

import './App.scss';

const App = () => (
    <div className="todo-app">
        <TodoForm />
        <TodoList />
    </div>
);

export default App;