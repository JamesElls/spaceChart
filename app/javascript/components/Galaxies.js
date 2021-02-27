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
                    <a href={`/galaxies/${galaxy.id}`}>Got to the {galaxy.name} Galaxy</a>
                </div>
            )
        })
    }

    return(
    <div className="galaxies-container">
        <h1>SPACE CHART</h1>
        <h6>TAKE A LOOK INTO HUMANITIES FUTURE</h6>

        {renderGalaxies()}
    </div>
    )
}





