import React from 'react'

export default (props) =>{

    const { star } =props

    const renderStar = () => {
        return (
            <div>
                <h1>{star.name}</h1>
                <p>{star.body}</p>
            </div>
        )
    }

    return(
    <div>
        {renderStar()}
    </div>
    )
}