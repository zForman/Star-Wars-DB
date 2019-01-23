import React, { Component } from 'react'
import { Input, InputGroup } from 'reactstrap'

export default class SearchFilter extends Component {
    state = {
        query: ''
    }

    handleInputChange = (e) => {
        const query = e.currentTarget.value
        console.log(query)
        this.setState({ query })
    }

    render() {
        return (
            <InputGroup>
                <Input
                    value={ this.state.query }
                    placeholder="введите значение для поиска..."
                    onChange={ this.handleInputChange }
                />
            </InputGroup>
        )
    }
}
