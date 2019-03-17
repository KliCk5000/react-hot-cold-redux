import * as actions from '../actions';

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.floor(Math.random() * 100) + 1,
};

export const hotColdReducer = (state = initialState, action) => {
  switch (action) {
    case actions.RESTART_GAME:
      return Object.assign({}, state, {});
    case actions.MAKE_GUESS:
      return Object.assign({}, state, {
        feedback,
        guesses: [
          ...state.guesses,
          guess
        ]
      });
    case actions.GENERATE_AURAL_UPDATE:
      return Object.assign({}, state, {});
    default:
      return state;
  }
};
