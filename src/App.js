import React, { Component } from 'react'
import './App.scss'
import { Route } from 'react-router-dom'


import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'
import AlertDismissible from './auth/components/AlertDismissible'
import Test from './auth/components/ProgramComponent/test'
import Programs from './auth/components/ProgramComponent/programs'
import AddProgram from './auth/components/ProgramComponent/AddProgram'
import EditProgram from './auth/components/ProgramComponent/EditProgram';
import Home from './header/Home';

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: null,
      alerts: [],
      programs: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = (message, type) => {
    this.setState({ alerts: [...this.state.alerts, { message, type }] })
  }

  setPrograms = (programs) => {
    this.setState({ programs: programs })
  }

  setAddProgram = (addProgram) => {
    this.setState({ addProgram: addProgram });
  }
  setEditProgram = (editProgram) => {
    this.setState({ editProgram: editProgram });
  }

  render() {
    const { alerts, user } = this.state

    return (
      <React.Fragment>
        <Header user={user} />
        {/* {alerts.map((alert, index) => (
          <AlertDismissible key={index} variant={alert.type} message={alert.message} />
        ))} */}
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
         <Route exact path='/' component={Home} />

        </main>

        <Route exact path='/programs' render={() =>
          <Programs programs={this.state.programs}
            setPrograms={this.setPrograms}
          />} />

        <AuthenticatedRoute exact path='/program/AddProgram' user={user} render={() => {
          if (user.userRole === 'admin')
            return <AddProgram addProgram={this.state.addProgram} setAddProgram={this.setAddProgram} user={user} alert={this.alert} />
        }} />

        <Route exact path='/program/AddProgram' render={() =>
          <AddProgram addProgram={this.state.addProgram}
            setAddProgram={this.setAddProgram} user={user} alert={this.alert} />}
        />

        <Route exact path='/programs/editprogram' user={user} render={(props) =>
          <EditProgram editProgram={this.state.editProgram} {...props}
            setEditProgram={this.setEditProgram} user={user} alert={this.alert} />}
        />

      </React.Fragment>
    )
  }
}

export default App