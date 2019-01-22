import React, { Component } from 'react'
import LoaderIndicator from '../loader-indicator'
import './git-list.css'


export default class GitList extends Component {
    idx = 0
    state = {
        itemList: null
    }
    avatar

    componentDidMount() {
        const { getData } = this.props
        getData().then((itemList) => this.setState({ itemList }))
    }

    renderItems = (arr) => {
        return arr.map(({ author, language, builtBy }) => {

            const imgTemplate = builtBy.map((img) => {
                return (
                    <img className='h-25' src={ img.avatar } alt=""/>
                )
            })



            return (
                <tr key={ this.idx++ } className='tr-item-list'>
                    <th>{ this.idx }</th>
                    <td className="">
                        { author.charAt(0).toUpperCase() + author.slice(1) }
                    </td>
                    <td className="">
                        { language }
                    </td>
                    <td className="">
                        { imgTemplate }
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
                    <th scope="col">Avatar</th>
                </tr>
                </thead>
                <tbody>
                { item }
                </tbody>
            </table>
        )
    }
}
