const initState = {
    changeWindow: 1,
    name: '',
    mathematicExample: [],
    spaceAnswer: '',
    countGoodAnswer: 0,
    countBadAnswer: 0,
}

export default function reducer(state = initState, action) {
    switch (action.type) {
        case 'CHANGE_NAME':
            state.name = action.payload
            return {...state}
        case 'EXAMPLE_WINDOW':
            state.changeWindow = 2
            state.mathematicExample = action.payload
            return {...state}
        case 'ON_CHANGE_ROW':
            state.mathematicExample[action.payload.index].answerUser = action.payload.value
            return {...state}
        case 'ON_NULLIFY_COUNT_ANSWER':
            state.countGoodAnswer = 0
            state.countBadAnswer = 0
            return {...state}
        case 'ON_CHECK_GOOD_ANSWER':
            // state.spaceAnswer = false
            state.mathematicExample[action.payload.index].statusAnswer = action.payload.statusAnswer
            if (action.payload.good === true) {
                state.countGoodAnswer++
            }
            return {...state}
        case 'ON_CHECK_BAD_ANSWER':
            state.spaceAnswer = true
            state.mathematicExample[action.payload.index].statusAnswer = action.payload.statusAnswer
            if (action.payload.bad === true) {
                state.countBadAnswer++
            }
            return {...state}
        case 'ON_SPACE_ANSWER':
            state.spaceAnswer = false
            state.mathematicExample.forEach(elem => {
                elem.statusAnswer = ''
            })
            state.countGoodAnswer = ''
            state.countBadAnswer = ''
            return {...state}
        default:
            return state
    }
}