import React from 'react'


import './List.css'


import Item from '../Item/Item'


function List({dateList, onDone, onImportant, onDelete}) {
    
    const listItem = dateList.map((el) => {
        return (
            <li key={el.id}>
                <Item text={el.text} 
                important={el.important} 
                done={el.done}
                onDone={() => onDone(el.id)}
                onImportant={() => onImportant(el.id)}
                onDelete={() => onDelete(el.id)} />
            </li>
        )
    })

    return (
        <ul className='List'>
            {listItem}
        </ul>
    )
}


export default List