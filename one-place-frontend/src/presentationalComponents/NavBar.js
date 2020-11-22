import { Container, Menu, Segment, } from 'semantic-ui-react'
import { Link } from 'react-router-dom'



export const NavBar = (props) => {

  return (
    <div>
      <Menu fixed='top' inverted style={{ marginRight: '0em' }} size='large' color='grey'>
        <Container>
          <Menu.Item header>
            Welcome {props.user.firstName}
          </Menu.Item>
          <Link to='/member/new'><Menu.Item >Add New Family Member</Menu.Item></Link>
          <Link to='/members'><Menu.Item >All Members</Menu.Item></Link>
          <Menu.Item onClick={props.logout}>Logout</Menu.Item>
        </Container>
      </Menu>
      <Segment vertical style={{ margin: '5em 0em 0em' }}>
      </Segment>
    </div>
  )
}
