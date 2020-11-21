import React, { Component } from 'react'
import { connect } from 'react-redux'
import MemberCard from '../presentationalComponents/MemberCard'
import { Card } from 'semantic-ui-react'
import { fetchMembers } from '../actions/membersActions'

class MemberCards extends Component {

  componentDidMount() {
    this.props.fetchMembers(this.props.user.id)
  }

  render() {
    return (
      <Card.Group itemsPerRow={2} centered>
        {this.props.members.map(member => <MemberCard key={member.id} member={member} user={this.props.user.id}/>)}
      </Card.Group>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    members: state.members,
    user: state.users
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchMembers: (id) => dispatch(fetchMembers(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(MemberCards)
