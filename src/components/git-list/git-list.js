import React, { Component } from 'react'

export default class GitList extends Component {
    state = {
        itemList: null
    }

    componentDidMount() {
        const { getData } = this.props

        getData()
            .then((itemList) => {
                itemList.map((itemList) => {
                    return this.setState(
                        itemList
                    )
                })
            })
    }

    renderItems = (arr) => {

        return arr.map(({author}) => {
            return (
                <li className="list-group-item">
                    { author }
                </li>
            )
        })
    }



    render() {
        const { itemList } = this.state

        const items = this.renderItems(itemList)

        return (
            <ul className="item-list list-group">
                {items }
            </ul>
        )
    }
}
