import react, {Component} from 'react';
import ToDoItem from './ToDoItem';
import ToDoData from './tododata';


class App extends Component {

  constructor(){
    super();
    this.state={
      toDos: ToDoData
    }
  }
  render(){
    const todoDataItemComponents= this.state.toDos.map(todoItem=> <ToDoItem key={ToDoItem.id} todoItem={todoItem} />)

    return (
      <div className="todo-list">
       {todoDataItemComponents}
      </div>
    );
  };   
}

export default App;
