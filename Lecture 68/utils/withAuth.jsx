import React from 'react'

function withAuth(Component) {
    return function ({ name, age }) {
        let isLoggedIn = false
        if (isLoggedIn) {
            return <Component name={name} age={19} />
        }
        return <h1>Please login....</h1>
    }
}

export default withAuth;