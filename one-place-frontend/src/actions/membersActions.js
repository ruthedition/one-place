const fetchMembers = () => {
  return (dispatch) => {
    dispatch({type: 'LOADING_MEMBER'})
    // fetch(URL)
    //   .then(response => response.json())
    //   .then(responseJSON => {
        // dispatch({ type: 'ADD_MEMBER', members: {} })
    //   })
  }
}

export default fetchMembers