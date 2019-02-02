import { SET_GODS } from "./actions/types";

const godsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_GODS:
      return action.gods;

    default:
      return state;
  }
};

export default godsReducer;
