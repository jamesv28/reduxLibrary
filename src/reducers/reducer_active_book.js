export default function(state = null, action) {
  //  state argument is not application state but what the reducer state is responsible forEach
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload
      break;      
  }

  return state;




}
