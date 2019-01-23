import React, { Component } from 'react'
import GitListItem from '../git-list-item/git-list-item'

import LoaderIndicator from '../loader-indicator'
import './git-list.css'


export default class GitList extends Component {

    state = {
        itemList: null
    }


    componentDidMount() {
        const { getData } = this.props
        getData('repositories')
            .then((itemList) => this.setState({ itemList }))
    }

    render() {
        const { itemList } = this.state
        if (!itemList) {
            return <LoaderIndicator/>
        }

        return (
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
                <GitListItem item={ itemList }/>
                </tbody>
            </table>
        )
    }
}
