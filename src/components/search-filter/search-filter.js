import React, { Component } from 'react'
import { Input, InputGroup } from 'reactstrap'

export default class SearchFilter extends Component {
    state = {
        query: ''
    }

    handleInputChange = (e) => {
        const query = e.currentTarget.value
        this.setState({ query })
        this.props.handleInputChange(query)
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
