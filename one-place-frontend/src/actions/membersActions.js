const URL = 'http://localhost:8000';

export const fetchMembers = () => {
  return (dispatch)=>{
    fetch(URL + '/members')
    .then(resp => resp.json())
    .then(data => dispatch({type: 'LOAD_MEMBERS', members: data}))
  }
}

export const addMember = (member) => {
  return (dispatch)=>{
    fetch(URL + '/members', {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(member)
    })
    .then(resp => resp.json())
    .then(data => dispatch({type: 'ADD_MEMBER', member: data}))
  }
}
