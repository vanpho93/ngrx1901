const defaultWords = [
    { _id: 'a', en: 'One', vn: 'Mot', isMemorized: true },
    { _id: 'b', en: 'Two', vn: 'Hai', isMemorized: false },
    { _id: 'c', en: 'Three', vn: 'Ba', isMemorized: true },
    { _id: 'd', en: 'Five', vn: 'Nam', isMemorized: false },
];

export function wordsReducer(state = defaultWords, action) {
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
