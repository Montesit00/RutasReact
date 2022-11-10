import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export const TodosScreen = () => {

  const { todos,dispatch } = useContext(AuthContext)

  useEffect(()=>{
    const payload = {
      title:'hola',
      descrip:'wenas'
    }

    dispatch({
      types:type.addTodo,
      payload
    })
  })

  return (
    <form>
      <div className="row containter">
        <div className='col-4'>
          formulario de tarea
        </div>
        <div className='col'>
          lista de todos
        </div>
      </div>
    </form>
  )
}
