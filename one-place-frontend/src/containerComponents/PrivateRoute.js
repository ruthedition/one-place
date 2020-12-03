import React, { Component } from 'react'
import { connect } from "react-redux"
import { authUser } from '../actions/userActions'
const { Route, Redirect } = require("react-router-dom")

class PrivateRoute extends Component {

  componentDidMount() {
    this.props.authUser()
  }

  renderContent = (props) => {
    const { component: Component, user } = this.props
    if (user.authComplete) {
      if (!user.valid) {
        return <Redirect to='/login' />
      } else if (user.valid) {
        return <Component {...props} />
      } 
    }
    
  }
  render() {
    const { component: Component, user, authUser, ...rest } = this.props

    return <Route {...rest} render={(props) => (
      this.renderContent(props)
    )} />
  }
}

const mapStateToProps = (state) => {
  return { user: state.users }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authUser: () => dispatch(authUser()),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)