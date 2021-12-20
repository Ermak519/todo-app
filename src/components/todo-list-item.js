const TodoListItem = ({label, important = false} ) => {
    const colorLabel = {
        color: important ? "black" : "tomato"
    }
    
    return <span style={colorLabel}>{label}</span>
}

export default TodoListItem;