import React from 'react'

export default (props) => {

    const {galaxies} = props

    const renderGalaxies = () => {
        return galaxies.map(galaxy => {
            return(
                <div className="galaxy-container">

                    <h1>{galaxy.name}</h1>
                    <p>Founded By: {galaxy.foundBy}</p>
                    <p>{galaxy.lightYears} Light Years Away</p>
                </div>
            )
        })
    }

    return(
    <div className="galaxies-container">
        <h1>SPACE CHART</h1>

        {renderGalaxies()}
    </div>
    )
}





