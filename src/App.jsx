import { AuthContext } from './context/AuthContext'
import { AppRouter } from './routers/AppRouter'
import './App.css'
import { useReducer } from 'react'
import { todoReducers } from './reducers/todosReducers'

const miFuncion = () => {
  return JSON.parse(localStorage.getItem['todos']) || [];
};

function App() {
  const user = {
    isLogged: true,
    username: 'zeus'
  }

  const { todos, dispatch } = useReducer(todoReducers,[],miFuncion)

  const tasks = [
    {
      id: 1,
      title: 'Completar prácticos',
      description: 'Completar el práctico de useContext'
    }
  ];

  return (
    <AuthContext.Provider value={{
      user,
      todos,
      dispatch
    }}>
      <AppRouter />
    </AuthContext.Provider>
  )
}

export default App
