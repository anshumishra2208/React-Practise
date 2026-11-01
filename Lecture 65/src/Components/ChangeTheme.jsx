import React, { use } from 'react'
import { ThemeContext } from '../Context/ThemeContext'

function ChangeTheme() {
    const { setTheme } = use(ThemeContext)
    return (
        <div>
            <select name="" id="" onChange={(e) => {
                setTheme(e.target.value);
            }}>
                <option value="dark">dark</option>
                <option value="white">white</option>
                <option value="defaultt">defaultt</option>
                <option value="system">system</option>

            </select>
        </div>
    )
}

export default ChangeTheme