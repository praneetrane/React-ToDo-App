import react,{Component} from 'react';

class ToDoItem extends Component {
    render(){
        console.log(this.props);
        return (
            <div className="todo-item">
                <input type="checkbox" defaultChecked={this.props.todoItem.completed} onChange={()=>this.props.handleChange(this.props.id)} />
                <p>{this.props.todoItem.text}</p>
            </div>
        );
    }; 
}

export default ToDoItem