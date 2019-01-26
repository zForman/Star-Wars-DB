import React from 'react'

const GitListItem = ({ item }) => {
    return item.map(({ author, language, builtBy }, key) => {
        const teamTemplate = builtBy.map((team, key) => <p key={ key }>{ team.username }</p>)
        const imgTemplate = builtBy.map((img, key) =>
            <img key={ key } className='rounded-circle h-25 m-2'
                 src={ img.avatar } alt=""/>)

        return (
            <tr className='tr-item-list' key={ key }>
                <th>{ key }</th>
                <td className="">
                    { author.charAt(0).toUpperCase() + author.slice(1) }
                </td>
                <td>
                    { language }
                </td>
                <td>
                    { teamTemplate }
                </td>
                <td>
                    { imgTemplate }
                </td>
            </tr>
        )
    })
}

export default GitListItem