const defaultWords = [
    { _id: 'a', en: 'One', vn: 'Mot', isMemorized: true },
    { _id: 'b', en: 'Two', vn: 'Hai', isMemorized: false },
    { _id: 'c', en: 'Three', vn: 'Ba', isMemorized: true },
    { _id: 'd', en: 'Five', vn: 'Nam', isMemorized: false },
];

export function wordsReducer(state = defaultWords, action) {
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
