import React, { Component } from 'react'
import { Container, Menu, Segment, } from 'semantic-ui-react'




export default class NavBar extends Component {

  render() {

    return (
      <div>
        <Menu fixed='top' inverted style={{ marginRight: '0em' }}>
          <Container>
            <Menu.Item header>
              WELCOME [INSERT NAME]
        </Menu.Item>
            <Menu.Item href='/member/new'>Add New Family Member</Menu.Item>
            <Menu.Item href='/members'>All Members</Menu.Item>
            <Menu.Item href='/login'>Logout</Menu.Item>
          </Container>
        </Menu>
        <Segment vertical style={{ margin: '5em 0em 0em' }}>
        </Segment>
      </div>
    )
  }
}
