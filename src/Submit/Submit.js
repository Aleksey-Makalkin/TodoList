import React, {Component} from 'react'


import './Submit.css'


export default class Submit extends Component {
    
    state = {
        text: ''
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.props.onAdd(this.state.text)
        this.setState({
            text: ''
        })
    }

    onChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    render() {
        const {text} = this.state

        return (
            <form className='Submit'
    
            onSubmit={this.onSubmit}>
    
                <input placeholder='Enter a new task'
                value={text}
                onChange={this.onChange} />
    
                <input type='submit' value='Add' />
    
            </form>
        )
    }
}