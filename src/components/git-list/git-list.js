import React, { Component } from 'react'
import LoaderIndicator from '../loader-indicator'


export default class GitList extends Component {
    idx = 1
    state = {
        itemList: null
    }

    componentDidMount() {
        const { getData } = this.props

        getData('p')
            .then((itemList) => {
                console.log(typeof itemList)
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
                    <p>Programing Language: { language }</p>
                </li>
            )
        })
    }



    render() {
        const { itemList } = this.state

        if (!itemList) {
            return <LoaderIndicator/>
        }

        return (
            <ul className="item-list list-group">
                { this.renderItems(itemList) }
            </ul>
        )
    }
}
