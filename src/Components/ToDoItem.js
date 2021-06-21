import react, { Component } from 'react';

class ToDoItem extends Component {
    render() {
        const completedStyle = {
            fontStyle: "italic",
            color: "#cdcdcd",
            textDecoration:"line-through"
        };
        return (
            <div className="todo-item">
                <input type="checkbox" checked={this.props.todoItem.completed} onChange={() => this.props.handleChange(this.props.todoItem.id)} />
                <p style={this.props.todoItem.completed ? completedStyle : null}>{this.props.todoItem.text}</p>
            </div>
        );
    };
}

export default ToDoItem