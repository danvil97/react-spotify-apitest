const initState = { token: null };

const tokenReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };

    default:
      return state;
  }
};

export default tokenReducer;
