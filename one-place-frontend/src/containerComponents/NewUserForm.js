import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Grid, Header, Segment, Message } from 'semantic-ui-react'

export default class NewUserForm extends Component {
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
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            Sign Up!
          </Header>
          <Form size='large' onSubmit={this.handleSubmit}>
            <Segment stacked>
              {this.renderInput('First Name', 'text', 'firstName')}
              {this.renderInput('First Last', 'text', 'firstlast')}
              {this.renderInput('Email', 'text', 'email')}
              {this.renderInput('Password', 'password', 'password')}
              <Button color='teal' type="submit" >Submit</Button>
            </Segment>
          </Form>
          <Message>
            Already have an account?  <Link to='/login'> Login!</Link>
          </Message>
        </Grid.Column>
      </Grid>
    )
  }
}