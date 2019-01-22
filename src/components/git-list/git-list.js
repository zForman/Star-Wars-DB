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

        return arr.map(({ author }) => {
            return (
                <li className="list-group-item"
                    key={ this.idx++ }>
                    { author }
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
