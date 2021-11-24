export const selectHomeReducer = state => state.homeReducer;

export const selectHomeState = state => (
  selectHomeReducer(state)
    ? selectHomeReducer(state).get('data')
    : {}
);

export const selectIsLoading = state => (
  selectHomeReducer(state)
    ? selectHomeReducer(state).get('isLoading')
    : {}
);
