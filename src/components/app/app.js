import React from "react";

import TodoList from "../todo-list/todo-list";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";

import './app.css'

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
      <div className="app">
        <AppHeader />
        <SearchPanel />
        <TodoList
          todos={todoData}
        />
      </div>
    )
  }

export default App;