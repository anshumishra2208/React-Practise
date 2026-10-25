import React from 'react'

function LoginStatus({ user }) {
    return (
        <div>
            <p>
                {
                    user.isLoggedIn ? `${user.name} is logged in` : `${user.name} isn't logged in`
                }
            </p>
        </div>
    )
}

export default LoginStatus