import React, { Component } from 'react'
import NewMemberForm from '../presentationalComponents/NewMemberForm'
import { connect } from 'react-redux'
import { addMember } from '../actions/membersActions'


class NewMember extends Component {

  state = {
    member: {
      first_name: '',
      last_name: '',
      birthday: '',
      diet: '',
      shoe_size: '',
      gifts: '',
      items: '',
      color: '',
      notes: ''
    },
    formStatus: {
      success: false,
      warning: false,
      error: false,
    },
    message: {
      hidden: true,
      header: '',
      content: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      member: {
        ...this.state.member,
        [event.target.name]: event.target.value
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addMember({...this.state.member})
    this.setState({
      member: {
        first_name: '',
        last_name: '',
        birthday: '',
        diet: '',
        shoe_size: '',
        gifts: '',
        items: '',
        color: '',
        notes: ''
      },
      formStatus: {
        success: true
      },
      message: {
        hidden: false,
        header: 'Your member has been added',
        content: 'View all members'
      }
    })
  }

  render() {
    return (
      <NewMemberForm
        member={this.state.member}
        formStatus={this.state.formStatus}
        message={this.state.message}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    addMember: (member) => dispatch(addMember(member)),
  }
}

export default connect(null, mapDispatchToProps)(NewMember)
