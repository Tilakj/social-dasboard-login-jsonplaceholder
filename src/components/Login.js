import React, { Component } from 'react'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userMailId: '',
            error: ''
        }
    }
    handleChange = (e) => {
        this.setState({ userMailId: e.target.value })
    }
    login = (e) => {
        e.preventDefault()
        Axios.get('http://jsonplaceholder.typicode.com/users')
            .then(response => {
                const user = response.data.find(user => user.email.toLowerCase() === this.state.userMailId.toLowerCase())
                if (user) {
                    localStorage.setItem('user', JSON.stringify(user))
                    this.setState({ error: '', userMailId: '' })
                    this.props.history.push("/dashboard");
                }
                else {
                    this.setState({ error: 'Invalid email id', userMailId: '' })
                }
            })
            .catch(err => {
                this.setState({ error: JSON.stringify(err) })
             })
    }


    render() {
        const { error, userMailId } = this.state
        return (
            <div className="login">
                {localStorage.getItem('user') && <Redirect to='/dashboard' />}
                <form onSubmit={this.login}>
                    <h2>Login</h2>
                    <input style={{margin:'10px'}} type="text" placeholder="email id" value={userMailId} onChange={this.handleChange}></input>
                    <input style={{margin:'10px'}} type="submit" value="Login"></input>
                    {error && <p style={{color:'red'}}>{error}</p>}
                </form>
            </div>
        )
    }
}

export default Login
