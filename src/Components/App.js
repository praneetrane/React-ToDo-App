//import react from 'react';
import ToDoItem from './ToDoItem';
import ToDoData from './tododata';


function App() {
    const todoDataItemComponents= ToDoData.map(todoItem=> <ToDoItem key={ToDoItem.id} todoItem={todoItem} />)

  return (
    <div className="todo-list">
     {todoDataItemComponents}
    </div>
  );
}

export default App;
