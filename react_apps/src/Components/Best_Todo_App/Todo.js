import React from 'react'
import Cards_Items from './Cards_Items'
import Todo_Comp from './Todo_Comp'
import Weather from './Weather_Com/Weather'

const Todo = () => {
  return (
    <>
      <Todo_Comp />
      <Cards_Items />
      <Weather />
    </>
  )
}

export default Todo