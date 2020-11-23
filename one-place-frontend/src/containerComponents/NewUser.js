import React, { Component } from 'react'
import { Form } from "semantic-ui-react";

import { NewUserForm } from '../presentationalComponents/NewUserForm'

export default class NewUser extends Component {
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
    this.props.addUser(this.state)
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
      <NewUserForm
        handleSubmit={this.handleSubmit}
        renderInput={this.renderInput}
      />
    )
  }
}