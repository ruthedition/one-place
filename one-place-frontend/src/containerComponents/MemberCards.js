import React, { Component } from 'react'
import { connect } from 'react-redux'
import MemberCard from '../presentationalComponents/MemberCard'
import { Card } from 'semantic-ui-react'
import { fetchMembers } from '../actions/membersActions'

class MemberCards extends Component {

  componentDidMount() {
    this.props.fetchMembers()
  }

  render() {
    return (
      <div>      {console.log(this.props.members)}

      <Card.Group itemsPerRow={2} centered>
        {this.props.members.map(member => <MemberCard member={member} />)}
      </Card.Group></div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    members: state.members
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMembers: () => dispatch(fetchMembers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberCards)
