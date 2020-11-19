import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LoginForm } from '../presentationalComponents/LoginForm'
import { login } from '../actions/userActions'
import { Redirect } from 'react-router-dom'


class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { email, password } = this.state
    const data = { email: email, password: password }
    this.props.login(data)
  }


  render() {
    return (
      
        this.props.loggedIn ?
          <Redirect to="/members" /> :
          <LoginForm email={this.state.email} password={this.state.password} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
      
    )
  }
}


const mapStateToProps = ({ users }) => {
  return {
    loggedIn: users.loggedIn
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => dispatch(login(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)


