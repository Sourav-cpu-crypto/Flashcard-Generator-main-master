import {CREATE_CARD} from "../constants/actionTypes.js"


const INIT_STATE = [];

const cardReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CREATE_CARD:
      return [...state,{...action.payload,
        gid:Math.floor(Math.random() * Date.now())}];



    default:
      return state;
  }
};

export default cardReducer;