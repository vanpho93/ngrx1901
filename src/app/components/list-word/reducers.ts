export function wordsReducer(state = [], action) {
    if (action.type === 'SET_WORDS') return action.words;
    if (action.type === 'ADD_WORD') return [...state, action.word];
    if (action.type === 'REMOVE_WORD') return state.filter(word => word._id !== action._id);
    if (action.type === 'TOGGLE_WORD') return state.map(word => {
        if (word._id !== action._id) return word;
        return { ...word, isMemorized: !word.isMemorized };
    });
    return state;
}

export function filterModeReducer(state = 'SHOW_ALL', action) {
    if (action.type === 'SET_FILTER_MODE') return action.filterMode;
    return state;
}

export function shouldShowFormReducer(state = false, action) {
    if (action.type === 'TOGGLE_FORM') return !state;
    if (action.type === 'ADD_WORD') return false;
    return state;
}
