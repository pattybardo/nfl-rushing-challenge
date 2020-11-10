const stats = (state = [] , action) => {

    switch(action.type) {
        case 'FETCH_STATS_SUCCESS':
            return action.payload
        default:
            return state
    }
}

export default stats