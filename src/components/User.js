import React from 'react'
import Axios from 'axios'

class User extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {},
            isLoading: true
        }
    }
    componentDidMount = () => {
        Axios.get(`http://jsonplaceholder.typicode.com/users/${JSON.parse(localStorage.getItem('user')).id}`)
            .then(res => {
                this.setState({ user: res.data, isLoading: false })
            })
            .catch(err => {
                alert(err)
            })
    }
    render() {
        const { user, isLoading } = this.state
        if (isLoading) return <h2>Loading...</h2>
        return (
            <div className="user" >
                <div className="userDetail">
                    <h3>{user.name}</h3>
                    <h4>{user.email}</h4>
                    <h4>{user.phone}</h4>
                </div>
                <div className="companyDetail">
                    <h3>{user.company.name}</h3>
                    <h4>{user.company.catchPhrase}</h4>
                    <h4>{user.company.bs}</h4>
                </div>
            </div >
        )
    }
}
export default User
