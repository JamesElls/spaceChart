import React from 'react'

export default (props) => {

    const {galaxy} = props

    const renderGalaxy = () => {
        return(
            <div className="galaxy-container">

                <h1>{galaxy.name}</h1>
                <a href={`/galaxies/${galaxy.id}/destroy`}>delete</a>

                <a href={`/galaxies/${galaxy.id}/edit`}>Edit</a>

                <p>Founded By: {galaxy.foundBy}</p>
                <p>{galaxy.lightYears} Light Years Away</p>
            </div>
        )
    }
    

    return(
    <div className="galaxies-container">
        <h1><a href={'/galaxies'}>SPACE CHART</a></h1>

        {renderGalaxy()}
    </div>
    )
}