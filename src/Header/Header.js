import React from 'react'


import './Header.css'


function Header({toDo, done}) {
    return (
        <div className='Header'>
            <h1>Todo List</h1>
            <div>To do: {toDo}</div>
            <div>Done: {done}</div>
        </div>
    )
}


export default Header