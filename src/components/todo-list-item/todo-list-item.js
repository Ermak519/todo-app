import './todo-list-item.css'

const TodoListItem = ({ label, important = false }) => {
    const colorLabel = {
        color: important ? "tomato" : "black"
    }

    return (
        <div className='item'>
            <span className="todo-list-item"
                style={colorLabel}
                > {label}
            </span>
            <div className="icons">
                <button type="button" className="btn btn-outline-danger btn-sm custom-btn">
                    <i className="bi bi-trash"></i>
                </button>
                <button type="button" className="btn btn-outline-success btn-sm custom-btn">
                    <i className="bi bi-exclamation-lg"></i>
                </button>
            </div>
        </div>
    );
}

export default TodoListItem;