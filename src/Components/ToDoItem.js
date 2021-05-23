//import react from 'react';

function ToDoItem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.todoItem.completed} />
            <p>{props.todoItem.text}</p>
        </div>
    );
}

export default ToDoItem