export default class GithubService {
    _apiBase = 'https://github-trending-api.now.sh/'

    getResource = async (url) => {
        const res = await fetch(`${ this._apiBase }${ url }`)
        if (!res.ok) {
            throw new Error(`Could not fetch , received ${ res.status }`)
        }
        return await res.json()
    }

    getAllRepositories = async () => {
        const res = await this.getResource('repositories')
        return res.map(this._transformRepositories)
    }

    _transformRepositories = (repositories) => {
        return {
            author: repositories.author,
            builtBy: repositories.builtBy,
            currentPeriodStars: repositories.currentPeriodStars,
            description: repositories.description,
            forks: repositories.forks,
            language: repositories.language,
            languageColor: repositories.languageColor,
            name: repositories.name,
            stars: repositories.stars,
            url: repositories.url
        }
    }
}
