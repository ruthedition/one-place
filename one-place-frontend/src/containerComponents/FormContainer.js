import React, { Component } from 'react'
import { MemberForm } from '../presentationalComponents/MemberForm'

export default class FormContainer extends Component {
  state = {
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

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.props.member)
    this.props.handleSubmit(this.props.member)
    this.setState({
      formStatus: {
        success: true
      },
      message: {
        hidden: false,
        header: this.props.message,
        content: 'View all members'
      }
    })
  }

  render() {
    return (
      <MemberForm
        member={this.props.member}
        formStatus={this.state.formStatus}
        message={this.state.message}
        handleSubmit={this.handleSubmit}
        handleChange={this.props.handleChange}
      />
    )
  }
}

