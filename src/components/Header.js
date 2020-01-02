import React from 'react'

export default function Header(props) {
    const logout = () => {
        localStorage.removeItem('user')
        props.history.push("/login");
    }
    return (
        <div className="header header-fixed">
            <h3>DashBoard</h3>
            <button onClick={logout}>logout</button>
        </div>
    )
}
