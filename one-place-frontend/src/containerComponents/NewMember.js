import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addMember } from '../actions/membersActions'
import FormContainer from './FormContainer'


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
      notes: '',
      user_id: this.props.user.current.id
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


  render() {
    return (
      <FormContainer
        message='Your member has been added'
        member={this.state.member}
        handleSubmit={this.props.addMember}
        handleChange={this.handleChange}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMember: (member) => dispatch(addMember(member)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NewMember)
