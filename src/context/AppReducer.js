export default (state, action) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return {
        ...state,
        currentUser: action.payload,
      };
    case 'CLOSE_LANDINGPAGE':
      return {
        ...state,
        isLandingPageClose: action.payload,
      };
    default:
      return state;
  }
};
