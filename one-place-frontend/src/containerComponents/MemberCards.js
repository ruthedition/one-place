import React, { Component } from 'react'
import { connect } from 'react-redux'
import MemberCard from '../presentationalComponents/MemberCard'
import { Card } from 'semantic-ui-react'
import { fetchMembers, removeMember, editMember } from '../actions/membersActions'
import { EditMemberForm } from '../presentationalComponents/EditMemberForm'

class MemberCards extends Component {

  state = { 
    open: false,
    selectedMember: null
  }

  componentDidMount() {
    this.props.fetchMembers(this.props.user.current.id)  
  }

  toggleModal = (open) => {
    this.setState({ open })
  }

  handleEdit = (member) => {
    this.setState({ selectedMember: member })
    this.toggleModal(true)
  }

  handleChange = (event) => {
    this.setState({
      selectedMember: {
        ...this.state.selectedMember,
        [event.target.name]: event.target.value
      }
    })
  }

  renderMemberCards = () => (
    this.props.members.map(member => (
      <MemberCard
        key={member.id}
        member={member}
        removeMember={this.props.removeMember}
        handleEdit={this.handleEdit}
      />
    ))
  )

  render() {
    return (
      <Card.Group itemsPerRow={2} centered>
        {this.renderMemberCards()}
        <EditMemberForm
          member={this.state.selectedMember}
          open={this.state.open}
          dimmer='blurring'
          editMember={this.props.editMember}
          toggleModal={this.toggleModal}
          handleChange={this.handleChange}
        />
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
  fetchMembers: (id) => dispatch(fetchMembers(id)),
  removeMember: (id) => dispatch(removeMember(id)),
  editMember: (member) => dispatch(editMember(member))

})


export default connect(mapStateToProps, mapDispatchToProps)(MemberCards)
