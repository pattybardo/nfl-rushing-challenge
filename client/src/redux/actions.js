import axios from 'axios'

const fetchStatsRequest = () => ({
    type: 'FETCH_STATS_REQUEST'
})

const fetchStatsSuccess = stats => ({
    type: 'FETCH_STATS_SUCCESS',
    payload: { stats }
})

const fetchStatsFailure = ex => ({
    type: 'FETCH_STATS_FAILURE',
    ex
})

/*asynchronous thunk action creator
  calls the api, then dispatches the synchronous action creator
*/
export const fetchStats =  () => {
    return async dispatch => {
        try {
            dispatch(fetchStatsRequest())
            let stats = await axios.get('/api/get/nfl-rushing')
            dispatch(fetchStatsSuccess(stats.data))
        }
        catch(ex){
            console.log(ex)
            dispatch(fetchStatsFailure(ex))
        }
    }
}