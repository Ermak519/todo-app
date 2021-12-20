import './todo-list-item.css'

const TodoListItem = ({ label, important = false }) => {
    const colorLabel = {
        color: important ? "tomato" : "black"
    }

    return (
        <span
            className="todo-list-item"
            style={colorLabel}>{label}
        </span>
    );
}

export default TodoListItem;