export const login = (data) => {
  return (dispatch)=>{
    fetch('http://localhost:8000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(response => dispatch({type: 'LOGIN', user: response}))
  }
}




// handleFetch = (response) => {
//   if (!response.errors) {
//     console.log(response)
//   } else {
//     alert(response.errors)
//   }
// }