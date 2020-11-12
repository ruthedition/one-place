const URL = 'http://localhost:8000';

export const fetchMembers = () => {
  return (dispatch)=>{
    fetch(URL + '/members')
    .then(resp => resp.json())
    .then(data => dispatch({type: 'LOAD_MEMBERS', members: data}))
  }
 
}
