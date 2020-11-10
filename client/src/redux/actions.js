import axios from 'axios'

//synchronous action creator
const fetchStatsSuccess = stats => ({
    type: 'FETCH_STATS_SUCCESS',
    payload: { stats }
})

/*asynchronous thunk action creator
  calls the api, then dispatches the synchronous action creator
*/
export const fetchStats =  () => {
    return async dispatch => {
        try {
            let stats = await axios.get('/api/get/nfl-rushing')
            dispatch(fetchStatsSuccess(stats.data))
        }
        catch(e){
            console.log(e)
        }
    }
}