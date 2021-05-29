import react,{Component} from 'react';

class ToDoItem extends Component {
    render(){
        return (
            <div className="todo-item">
                <input type="checkbox" defaultChecked={this.props.todoItem.completed} onChange={()=> !this.props.todoItem.completed } />
                <p>{this.props.todoItem.text}</p>
            </div>
        );
    }; 
}

export default ToDoItem