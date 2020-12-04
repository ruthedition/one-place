import * as Cookies from 'js-cookie'

const URL = 'http://localhost:8000';

export const login = (data) => {
  return (dispatch) => {
    fetch('http://localhost:8000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(response => {
        console.log(response)
        if (response.error) {
          return window.alert(response.error)
        } else {
          Cookies.remove('onePlaceSession')
          Cookies.set('onePlaceSession', response.token, { expires: 14 })
          dispatch({ type: 'LOGIN', response })
        }
      })
  }
}

export const addUser = (user) => {
  return (dispatch) => {
    fetch(URL + '/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(response => {
        if (response.error) {
          return window.alert(response.error)
        } else {
          const {email, password} = user.user
          dispatch(login({email, password}))
        }
      })
  }
}

export const logout = () => {
  return (dispatch) => {
    fetch('http://localhost:8000/logout')

      .then(response => {
        if (response.error) {
          return window.alert(response.error)
        } else {
          Cookies.remove('onePlaceSession')
          dispatch({ type: 'LOGOUT' })
          dispatch({type: 'COMPLETE_AUTH'})
        }
      })
  }
}

export const authUser = () => {
  let token = Cookies.get("onePlaceSession")
  return dispatch => {
    dispatch({ type: 'BEGIN_AUTH' })
    if (token) {
      const configObj = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: token
        },
        credentials: 'include'
      }
      fetch(URL.concat('/authorize'), configObj)
        .then(resp => resp.json())
        .then(authResp => {
          if (authResp.valid) {
            dispatch({ type: "LOGIN", response: authResp })
            dispatch({ type: "COMPLETE_AUTH" })
          } else {
            dispatch({ type: "INVALID_USER", errors: { session: "User invalid. Please login to continue" } })
            dispatch({ type: "COMPLETE_AUTH" })
          }
        })
    } else {
      dispatch({ type: "INVALID_USER", errors: { session: "No token. Please login to continue" } })
      dispatch({ type: "COMPLETE_AUTH" })
    }
  }

}
