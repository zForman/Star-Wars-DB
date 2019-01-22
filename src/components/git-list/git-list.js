import React, { Component } from 'react'

export default class GitList extends Component {
    idx = 1
    state = {
        itemList: null
    }

    componentDidMount() {
        const { getData } = this.props

        getData('p')
            .then((itemList) => {
                return this.setState(
                    { itemList }
                )
            })
    }

    renderItems = (arr) => {

        return arr.map(({ author, language }) => {
            return (
                <li className="list-group-item"
                    key={ this.idx++ }>
                    <h4>Author: { author.charAt(0).toUpperCase() + author.slice(1) }</h4>
                    <p>Program Language: { language }</p>
                </li>
            )
        })
    }



    render() {
        const { itemList } = this.state

        if (!itemList) {
            return <div>Error</div>
        }

        return (
            <ul className="item-list list-group">
                { this.renderItems(itemList) }
            </ul>
        )
    }
}
