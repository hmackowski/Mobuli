export const restReducer = (state, action) => {
  let newState = {...state};
  let {type, payload} = action;

  switch(type) {
    case 'addEmployee': 
      break;
    case 'fire':
      break;
    
    case 'changeMenuItem':
      // newState.menu.push(payload);
      newState.menu = newState.menu.map(i => {
        if (payload.changing === i.name) {
          console.log('hi there!')
          i.name = payload.newName;
          i.price = payload.newPrice;
        }
        return i;
      })
      break;
  }

  return newState;
}