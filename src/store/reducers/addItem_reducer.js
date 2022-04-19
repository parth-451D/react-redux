// let initialState = [{
//     name : "",
//     price : 0,
//     description : "",
//     review : ""
// }]

const initialState = {
  items : []
}

export const addItemreducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
        return {
          ...state,
          items : items.push(action.payload)
        }
        break ;
    default:
      return state;
  }
};


