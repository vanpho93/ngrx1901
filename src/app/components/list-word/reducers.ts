export function wordsReducer(state = [], action) {
    if (action.type === 'ADD_WORD') return [...state, action.word];
    if (action.type === 'REMOVE_WORD') return state.filter(word => word._id !== action._id);
    return state;
}

export function filterStatusReducer(state = 'SHOW_ALL', action) {
    return state;
}

export function shouldShowFormReducer(state = false, action) {
    return state;
}
