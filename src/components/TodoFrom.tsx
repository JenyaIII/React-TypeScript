import React from 'react';

const TodoForm: React.FunctionComponent = () => {

  return(
    <div className="input-field mt2">
      <input type="text" id="title" placeholder="Todo" />
      <label htmlFor="title" className="active">
        What todo today?
      </label>
    </div>
  )
}

export default TodoForm;