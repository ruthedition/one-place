const URL = 'http://localhost:8000';

export const fetchMembers = (id) => {
  return (dispatch) => {
    fetch(URL + `/members?user_id=${id}`)
      .then(resp => resp.json())
      .then(data => dispatch({ type: 'LOAD_MEMBERS', members: data }))
  }
}

export const addMember = (member) => {
  return (dispatch) => {
    fetch(URL + '/members', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(member)
    })
      .then(resp => resp.json())
      .then(data => dispatch({ type: 'ADD_MEMBER', member: data }))
  }
}
