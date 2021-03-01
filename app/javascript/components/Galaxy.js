import React from 'react'

export default (props) => {

    const {galaxy, stars} = props

    const renderStars = () => {
        return (stars.map(star => {
            return (
            <div className='star-container'>
                <h3>{star.name}</h3>
                <p>{star.body}</p>
                <h6><a href={`/galaxies/${galaxy.id}/stars/${star.id}`}>Learn More</a></h6>
            </div>
            )
        }))
    }

    const renderGalaxy = () => {
        return(
            <div className="galaxy-container">

                <h1>{galaxy.name}</h1>
                

                <a href={`/galaxies/${galaxy.id}/edit`}>Edit</a>

                <p>Founded By: {galaxy.foundBy}</p>
                <p>{galaxy.lightYears} Light Years Away</p>
            </div>
        )
    }
    

    return(
    <div>
        <h1><a href={'/galaxies'}>SPACE CHART</a></h1>

        {renderGalaxy()}
        <div>
        <h2>Stars:</h2>
        {renderStars()}
        </div>
    </div>
    )
}