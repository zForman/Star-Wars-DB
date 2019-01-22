import React, { Component } from 'react'
import GitList from '../git-list'
import Header from '../header'
import GithubService from '../../service/github-service'
import './app.css'

export default class App extends Component {
    GithubService = new GithubService()


    render() {
        return (
            <div>
                <Header/>
                <GitList getData={ this.GithubService.getAllRepositories }/>
                <div>App Component</div>
            </div>
        )
    }
}