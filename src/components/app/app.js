import React, { Component } from 'react'
import GitList from '../git-list'
import GithubService from '../../service/github-service'
import './app.css'

export default class App extends Component {
    GithubService = new GithubService()


    render() {
        return (
            <div>
                <GitList getData={ this.GithubService.getAllRepositories }/>
                <div>Hello</div>
            </div>
        )
    }
}