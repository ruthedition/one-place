import { Form, Button, Grid, Header, Container, Message } from "semantic-ui-react";
import { Link } from 'react-router-dom'

export const MemberForm = (props) => {

  const {
    gifts,
    items, 
    notes
  } = props.member

  const renderHeader = () => {
    const style = { color: 'teal', textAlign: 'center', marginTop: '4em' }
    return (
      <Header as='h2' style={style}>
        Add A Family Member!
      </Header>
    )
  }

  const renderInput = (label, type, name) => {
    return (
      <Form.Input
        label={label}
        type={type}
        name={name}
        id={name}
        width={10}
        placeholder={label}
        value={props.member[name]}
        onChange={props.handleChange}
      />
    )
  }

  const renderMessage = () => {
    const { success, warning, error } = props.formStatus
    const { hidden, header, content } = props.message
    return (
      <Message
        hidden={hidden} 
        success={success}
        warning={warning}
        error={error}
      >
        <Message.Header content={header} />
        <Message.Content as={Link} to='/members' content={content} />
      </Message>
    )
  }

  const renderForm = () => {
    const { success, warning, error } = props.formStatus
    return (
      <Form
        size='large'
        success={success}
        warning={warning}
        error={error}
        onSubmit={props.handleSubmit}
      >
        <Form.Group >
          {renderInput('First Name', 'text', 'first_name')}
          {renderInput('Last Name', 'text', 'last_name')}
        </Form.Group>
        <Form.Group >
          {renderInput('Birthday', 'date', 'birthday')}
          {renderInput('Favorite Color', 'text', 'color')}
        </Form.Group>
        <Form.Group>
          <Form.TextArea
            label='Gifts'
            name='gifts'
            placeholder='Make a list of some gift options...'
            value={gifts}
            onChange={props.handleChange}
          />
          <Form.TextArea
            label='Favorite Items'
            name='items'
            placeholder='Make a list of some of their favorite things...'
            value={items}
            onChange={props.handleChange}
          />
        </Form.Group>
        <Form.Group>
          {renderInput('Dietary Preferences', 'text', 'diet')}
          {renderInput('Shoe Size', 'number', 'shoe_size')}
        </Form.Group>
        <Form.TextArea
          label='Notes'
          name='notes'
          placeholder='Anything else you want to add...'
          value={notes}
          onChange={props.handleChange}
        />
        {renderMessage()}
        <Button color='teal' type='submit'>Submit</Button>
      </Form>
    )
  }

  return (
    <div>

      <Container>
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Row>
            {renderHeader()}
          </Grid.Row>
          <Grid.Row >
            {renderForm()}
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  )
}


