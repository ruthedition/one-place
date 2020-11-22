import { connect } from "react-redux"

const { Route, Redirect } = require("react-router-dom")


const PrivateRoute = ({ component: Component, user, ...rest }) => {
  return <Route {...rest} render={(props) => (
    user.loggedIn
      ? <Component {...props} />
      : <Redirect to='/login' />
  )}
  />
}

const mapStateToProps = (state) => {
  return { user: state.users }
}

export default connect(mapStateToProps)(PrivateRoute)