import { Form, Button, Grid, Header, Message, Segment } from "semantic-ui-react";
import { Link } from 'react-router-dom'

export const NewUserForm = (props) => {

  const {
    renderInput,
    handleSubmit
  } = props

  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          Sign Up!
          </Header>
        <Form size='large' onSubmit={handleSubmit}>
          <Segment stacked>
            {renderInput('First Name', 'text', 'firstName')}
            {renderInput('Last Name', 'text', 'lastName')}
            {renderInput('Email', 'text', 'email')}
            {renderInput('Password', 'password', 'password')}
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


