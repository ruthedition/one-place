import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'


export default class Login extends Component {
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
    this.props.login(this.state)
    this.setState({
      email: ""
    })
  }

  render() {
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            Login
          </Header>
          <Form size='large' onSubmit={this.handleSubmit}>
            <Segment stacked>
              <Form.Input
                fluid icon='user' iconPosition='left'
                type='text'
                name='email'
                id='email'
                placeholder='email'
                value={this.state.email}
                onChange={this.handleChange}
              />

              <Form.Input
                fluid icon='lock'
                iconPosition='left'
                type='password'
                name='password'
                id='password'
                placeholder='Password'
                value={this.state.password}
                onChange={this.handleChange}
              />
              <Button color='teal' type="submit" >Submit</Button>
            </Segment>
          </Form>
          <Message>
            Don't Have a Login?  <Link to='user/new'> Sign Up!</Link>
          </Message>
        </Grid.Column>
      </Grid>


    )
  }
}