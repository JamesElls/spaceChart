import React from 'react'

export default (props) => {
    const {galaxy} = props
    const defaultName = galaxy.name ? galaxy.name : ''
    const defaultFoundBy = galaxy.foundBy ? galaxy.foundBy : ''
    const defaultLightYears = galaxy.lightYears ? galaxy.lightYears : ''

    const action = galaxy.id ? `/galaxies/${galaxy.id}` : '/galaxies'



    return(
        <div className="galaxy-form">
            <h1>{galaxy.id ? 'Edit Form' : "Register New Galaxy"}</h1>
            {/* <form action={action} method = {defineMethod}> */}
            <form action={action} method = 'post'>
            {galaxy.id && <input type="hidden" name="_method" value="patch" />}
                <h3>Galaxy Name</h3>
                <input defaultValue = {defaultName} name = 'galaxy[name]'></input>

                <h3>Founded By</h3>
                <input defaultValue = {defaultFoundBy} name = 'galaxy[foundBy]'></input>

                <h3>Distance Away (in light years)</h3>
                <input defaultValue = {defaultLightYears} name = 'galaxy[lightYears]'></input>

                <button>{galaxy.id ? `Update` : 'Register Galaxy'}</button>

            </form>
        </div>
    )
}
