import React, { Component } from 'react'
import { Form } from "semantic-ui-react";
import { NewUserForm } from '../presentationalComponents/NewUserForm'
import { connect } from 'react-redux'
import { addUser } from '../actions/userActions'
import { Redirect } from 'react-router-dom'

class NewUser extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const user = {user: {
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      email: this.state.email, 
      password: this.state.password
    }}
    this.props.addUser(user)
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    })
  }

  renderInput = (label, type, name) => {
    return (
      <Form.Input
        type={type}
        name={name}
        placeholder={label}
        value={this.state[name]}
        onChange={(event) => this.handleChange(event)}
      />
    )
  }
  

  render() {
    return (
      this.props.loggedIn ?
        <Redirect to="/members" /> :  
        <NewUserForm
        handleSubmit={this.handleSubmit}
        renderInput={this.renderInput}
      />
    )
  }
}

const mapStateToProps = ({ users }) => {
  return {
    loggedIn: users.valid
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user) => dispatch(addUser(user)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewUser)
