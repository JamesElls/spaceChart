import React from 'react'

export default () => {
    return(
        <div className="galaxy-form">
            <h1>Register New Galaxy</h1>
            <form action={'/galaxies'} method = 'post'>
                <h3>Galaxy Name</h3>
                <input name = 'galaxy[name]'></input>

                <h3>Founded By</h3>
                <input name = 'galaxy[foundBy]'></input>

                <h3>Distance Away (in light years)</h3>
                <input type='number' name = 'galaxy[lightYears]'></input>

                <button>Register Galaxy</button>

            </form>
        </div>
    )
}
