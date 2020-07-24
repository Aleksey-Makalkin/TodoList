import React from 'react'


import './Item.css'


function Item({text, important, done, onDone, onImportant, onDelete}) {

    let className = 'Item'

    if (important) {
        className += ' important'
    }

    if (done) {
        className += ' done'
    }

    return (
        <div className='Item'>
            <div className={className}
            onClick={onDone}>
                {text}
            </div>
            <div onClick={onDelete}>
                DEL
            </div>
            <div onClick={onImportant}>
                !
            </div>
        </div>
    )
}


export default Item