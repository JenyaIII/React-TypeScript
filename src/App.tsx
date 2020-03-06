import React, { useState } from 'react';
import './App.css';
import Navbar from './components/NavBar';
import TodoForm from './components/TodoFrom';
import TodoList from './components/TodoList';
import { ITodo } from './interfaces';

const App: React.FunctionComponent = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false
    }
    // setTodos([newTodo, ...todos])
    setTodos(prev => [newTodo, ...prev])
  }

  const toggleHandler = (id: number) => {
    setTodos(prev => prev.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  }

  const removeHandler = (id: number) => {
    const shoudRemove = window.confirm('Do you want delete this todo ?');
    if (shoudRemove) {
      setTodos(prev => prev.filter(todo => todo.id !== id))
    }
  }
  
  return (
  <>
    <Navbar />
    <div className="container">
      <TodoForm onAdd={addHandler} />
      <TodoList
      todos={todos}
      onToggle={toggleHandler}
      onRemove={removeHandler}
      />
    </div>
  </>
  );
}

export default App;
