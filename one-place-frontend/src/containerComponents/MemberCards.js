import React, { Component } from 'react'
import { connect } from 'react-redux'
import MemberCard from '../presentationalComponents/MemberCard'
import { Card } from 'semantic-ui-react'


class MemberCards extends Component {
  render() {
    return (
      <Card.Group itemsPerRow={2} centered>
        {this.props.members.map(member => <MemberCard member={member} />)}
      </Card.Group>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    members: state.members
  }
}


export default connect(mapStateToProps)(MemberCards)
