import React, {Component} from 'react'


import './App.css'


import Header from '../Header/Header'
import Search from '../Search/Search'
import Filter from '../Filter/Filter'
import List from '../List/List'
import Submit from '../Submit/Submit'


export default class App extends Component {
    
    state = {
        date: [
            {text: 'Drink coffe', important: false, done: false, id: 1},
            {text: 'Watch TV', important: false, done: false, id: 2},
            {text: 'Create react app', important: false, done: false, id: 3}
        ],
        asFilter: 'all',
        asSearch: ''
    }

    done = (id) => {
        this.setState(({date}) => {
            const newDate = [...date]
            const indexTarget = newDate.findIndex((el) => el.id === id)
            newDate[indexTarget].done = !newDate[indexTarget].done
            return {
                date: newDate
            }
        })
    }

    important = (id) => {
        this.setState(({date}) => {
            const newDate = [...date]
            const indexTarget = newDate.findIndex((el) => el.id === id)
            newDate[indexTarget].important = !newDate[indexTarget].important
            return {
                date: newDate
            }
        })
    }

    delete = (id) => {
        this.setState(({date}) => {
            let newDate = [...date]
            newDate = newDate.filter((el) => el.id !== id)
            return {
                date: newDate
            }
        })
    }

    add = (text) => {
        this.setState(({date}) => {
            let newDate = [...date]
            const newId = newDate.length === 0 ? 1 : newDate[newDate.length-1].id + 1
            newDate.push({text: text, important: false, done: false, id: newId})
            return {
                date: newDate
            }
        })
    }

    onNewFilter = (asFilter) => {
        this.setState({
            asFilter: asFilter
        })
    }

    onSearch = (text) => {
        this.setState({
            asFilter: 'all',
            asSearch: text
        })
    }

    render() {

        const {date, asFilter, asSearch} = this.state
        const done = date.filter((el) => el.done === true).length
        const toDo = date.length - done

        let targetDate = date
        if (asFilter === 'all') {
            if (asSearch.length > 0)
                targetDate = date.filter((el) => {
                    let isTrue = true;
                    const arrChar = [...el.text.toLowerCase()]
                    for (let char of asSearch) {
                        if (arrChar.findIndex((el) => el === char.toLowerCase()) === -1)
                            isTrue = false
                    }
                    return isTrue
                })
            else 
                targetDate = date
        }
        else if (asFilter === 'active') {
            if (asSearch.length > 0)
                targetDate = date.filter((el) => {
                    let isTrue = true;
                    const arrChar = [...el.text.toLowerCase()]
                    for (let char of asSearch) {
                        if (arrChar.findIndex((el) => el === char.toLowerCase()) === -1)
                            isTrue = false
                    }
                    return isTrue
                }) 
            targetDate = targetDate.filter((el) => el.done === false)
        }
        else if (asFilter === 'done') {
            if (asSearch.length > 0)
                targetDate = date.filter((el) => {
                    let isTrue = true;
                    const arrChar = [...el.text.toLowerCase()]
                    for (let char of asSearch) {
                        if (arrChar.findIndex((el) => el === char.toLowerCase()) === -1)
                            isTrue = false
                    }
                    return isTrue
                })
            targetDate = targetDate.filter((el) => el.done === true)
        }

        return (
            <div className='App'>

                <Header toDo={toDo} done={done} />

                <Search onSearch={this.onSearch} />

                <Filter asFilter={asFilter}
                onNewFilter={(asFilter) => this.onNewFilter(asFilter)} />

                <List dateList={targetDate}
                onDone={(id) => this.done(id)}
                onImportant={(id) => this.important(id)}
                onDelete={(id) => this.delete(id)} />

                <Submit onAdd={(text) => this.add(text)} />
            </div>
        )
    }
}