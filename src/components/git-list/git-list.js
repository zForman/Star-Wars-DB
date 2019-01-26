import React, { Component } from 'react'
import GitListItem from '../git-list-item/git-list-item'
import SearchFilter from '../search-filter/search-filter'

import LoaderIndicator from '../loader-indicator'
import './git-list.css'


export default class GitList extends Component {

    state = {
        itemList: null,
        query: ''
    }

    componentDidMount() {
        const { getData } = this.props
        getData('repositories')
            .then((itemList) => this.setState({ itemList }))
            .then(console.log(this.itemList))

    }

    handleInputChange = (query) => this.setState({ query })

    search(itemList, query) {
        if (query.length === 0) return itemList
        return itemList.filter((item) => item.author.toLowerCase().indexOf(query.toLowerCase()) > -1)
    }

    render() {

        const { itemList, query } = this.state
        if (!itemList) {
            return <LoaderIndicator/>
        }
        const filtered = this.search(itemList, query)

        return (
            <React.Fragment>
                <SearchFilter handleInputChange={ this.handleInputChange }/>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Author</th>
                        <th scope="col">Language</th>
                        <th scope="col">Team</th>
                        <th scope="col">Avatar</th>
                    </tr>
                    </thead>
                    <tbody>
                    <GitListItem item={ filtered }/>
                    </tbody>
                </table>
            </React.Fragment>

        )
    }
}
