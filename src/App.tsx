import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import TodoForm from './components/TodoFrom';

const App: React.FunctionComponent = () => {
  return (
  <>
    <Navbar />
    <div className="container">
      <TodoForm />
    </div>
  </>
  );
}

export default App;
