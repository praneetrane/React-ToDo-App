import react, { Component } from 'react';
import ToDoItem from './ToDoItem';
import ToDoData from './tododata';


class App extends Component {

  constructor() {
    super();
    this.state = {
      toDos: ToDoData
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(id) {
    this.setState(prevState => {
      const updatedToDos = prevState.toDos.map(todo => {
        if (todo.id === id) {
          // todo.completed = !todo.completed; //----Do not modify State directly
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      });

      return { toDos: updatedToDos };
    });

  }
  render() {
    const todoDataItemComponents = this.state.toDos.map(todoItem => <ToDoItem key={ToDoItem.id} todoItem={todoItem} handleChange={this.handleChange} />)

    return (
      <div className="todo-list">
        {todoDataItemComponents}
      </div>
    );
  };
}

export default App;
