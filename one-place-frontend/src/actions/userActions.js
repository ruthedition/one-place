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
        if (response.error) {
          return window.alert(response.error)
        } else {
          dispatch({ type: 'LOGIN', response })
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
          dispatch({ type: 'LOGOUT' })
        }
      })
  }
}

