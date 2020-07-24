import React from 'react'


import './Filter.css'


function Filter({asFilter, onNewFilter}) {
    return (
        <div className='Filter'>

            <div id={asFilter === 'all' ? 'active' : 'allNoneActive'}
            onClick={() => onNewFilter('all')}>All</div>

            <div id={asFilter === 'active' ? 'active' : 'activeNoneActive'}
            onClick={() => onNewFilter('active')}>Active</div>

            <div id={asFilter === 'done' ? 'active' : 'doneNoneActive'}
            onClick={() => onNewFilter('done')}>Done</div>

        </div>
    )
}


export default Filter