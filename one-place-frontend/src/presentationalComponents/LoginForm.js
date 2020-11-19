import { Link } from 'react-router-dom'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'


export const LoginForm = (props) => {

  const {
    email,
    password,
    handleChange,
  } = props

  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          Login
        </Header>
        <Form size='large' onSubmit={props.handleSubmit}>
          <Segment stacked>
            <Form.Input
              fluid icon='user' iconPosition='left'
              type='text'
              name='email'
              id='email'
              placeholder='email'
              value={email}
              onChange={handleChange}
            />

            <Form.Input
              fluid icon='lock'
              iconPosition='left'
              type='password'
              name='password'
              id='password'
              placeholder='Password'
              value={password}
              onChange={handleChange}
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



