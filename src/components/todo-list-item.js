const TodoListItem = ({label, important = false} ) => {
    const colorLabel = {
        color: important ? "tomato" : "black"
    }
    
    return <span style={colorLabel}>{label}</span>
}

export default TodoListItem;