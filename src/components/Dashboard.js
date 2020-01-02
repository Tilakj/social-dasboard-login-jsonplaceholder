import React from 'react'
import User from './User'
import Posts from './Posts'
import Header from './Header'

export default function Dashboard(props) {
    return (
        <>
            <div className="container">
                <Header {...props} />
                <User {...props} />
                <Posts {...props} />
            </div>
        </>
    )
}
