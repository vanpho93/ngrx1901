export function counterReducer(state = 1000, action) {
    // if (action.type === 'INCREASE') return state + 1;
    // if (action.type === 'DESCREASE') return state - 1;
    if (action.type === 'CHANGE') return action.isIncrease ? state + 1 : state - 1;
    if (action.type === 'RESET') return 1;
    return state;
}
