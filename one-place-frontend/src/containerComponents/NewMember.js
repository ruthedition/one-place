import React, { Component } from 'react'
import NewMemberForm from '../presentationalComponents/NewMemberForm'
import { v1 as uuid } from 'uuid'
import { connect } from 'react-redux'


class NewMember extends Component {

  state = {
    member: {
      firstName: '',
      lastName: '',
      birthday: '',
      diet: '',
      shoeSize: '',
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
    let member = { ...this.state.member, id: uuid() }
    this.props.addMember(member)
    this.setState({
      member: {
        firstName: '',
        lastName: '',
        birthday: '',
        diet: '',
        shoeSize: '',
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
    addMember: (member) => dispatch({ type: 'ADD_MEMBER', member })
  }
}

export default connect(null, mapDispatchToProps)(NewMember)