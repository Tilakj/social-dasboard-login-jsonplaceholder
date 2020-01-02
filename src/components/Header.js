import React from 'react'

export default function Header(props) {
    const logout = () => {
        localStorage.removeItem('user')
        props.history.push("/login");
    }
    return (
        <div style={{color:'white'}} className="header header-fixed animated flipInX">
            <h3>DashBoard</h3>
            <button onClick={logout}>logout</button>
        </div>
    )
}
