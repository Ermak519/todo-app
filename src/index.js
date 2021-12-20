import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./components/todo-list/todo-list";
import AppHeader from "./components/app-header/app-header";
import SearchPanel from "./components/search-panel/search-panel";

const App = () => {

  const todoData = [
    {
      label: 'First list item',
      important: false,
      id: 1
    },
    {
      label: 'Second list item',
      important: true,
      id: 2
    },
    {
      label: 'Third list item',
      important: false,
      id: 3
    },
  ]

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList
        todos={todoData}
      />
    </div>
  )
}



ReactDOM.render(<App />, document.getElementById('root'))