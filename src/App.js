import React from 'react'
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import PrivateRoute from './PrivateRoute'
import './App.css'
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            loggedIn: false,
            user: {},
        }
    }
    componentDidMount = () => {
        const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {}
        const loggedIn = !!localStorage.getItem('user')
        this.setState({ user, loggedIn })
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        {() => (this.state.loggedIn ? <Redirect to="/dashboard" /> : <Redirect to="/login" />)}
                    </Route>
                    <Route path="/login" component={Login} />
                    <PrivateRoute path="/dashboard" component={Dashboard} />
                    <Route path="*" render={() => <h2>404 NOT FOUND</h2>} />
                </Switch>
            </BrowserRouter>
        )
    }

}

export default App
  





{/* <Route path="/login" render={(props) => <Login {...props} exact={true} />} />  */}