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
                <tr key={ this.idx++ }>
                    <th>{ this.idx }</th>
                    <td className="">
                        <p>{ author.charAt(0).toUpperCase() + author.slice(1) }</p>
                    </td>
                    <td className="">
                        <p>{ language }</p>
                    </td>
                </tr>
            )
        })
    }



    render() {
        const { itemList } = this.state
        if (!itemList) {
            return <LoaderIndicator/>
        }
        const item = this.renderItems(itemList)


        return (
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Author</th>
                    <th scope="col">Language</th>
                    <th scope="col">Handle</th>
                </tr>
                </thead>
                <tbody>
                { item }
                </tbody>
            </table>
        )
        // return (
        //     <ul className="d-flex item-list list-group">
        //         { this.renderItems(itemList) }
        //     </ul>
        // )
    }
}
