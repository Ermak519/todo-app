import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./components/todo-list";
import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";

const App = () => {

  const todoData = [
    {
      label: 'First list item',
      important: false
    },
    {
      label: 'Second list item',
      important: true
    },
    {
      label: 'Third list item',
      important: false
    },
    {
      label: 'шгщкурш list item',
      important: false
    },
    {
      label: 'овьраньапрь',
      important: true
    },
    {
      label: 'пронкенннннноекнок',
      important: false
    },
  ]

  return (
    <div>
      <AppHeader/>
      <SearchPanel/>
      <TodoList 
        todos={todoData}
      />
    </div>
  )
}



ReactDOM.render(<App/>, document.getElementById('root'))