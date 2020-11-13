import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import * as actions from '../actions'


const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

var mock = new MockAdapter(axios);

mock.onGet("/api/get/nfl-rushing").reply(200, {
    stats:[{id:1,player:'Joe Banyard',team:'JAX',position:'RB',rushing_attempts:2,rushing_attempts_per_game:2,total_rushing_yards:7,average_rushing_yards:3.5,yards_per_game:7,total_rushing_touchdowns:0,longest_rush:7,longest_rush_is_touchdown:false,rushing_first_downs:0,rushing_first_downs_percentage:0,rushes_more_than_20:0,rushes_more_than_40:0,rushing_fumbles:0,tableData:{id:0}}]
});

describe('async action', () => {
  
    it('creates FETCH_TODOS_REQUEST and FETCH_STATS_SUCCESS when fetching mock payload', () => {
  
      const expectedActions = [
        { type: 'FETCH_STATS_REQUEST' },
        { type: 'FETCH_STATS_SUCCESS', payload: {stats: {stats:[{id:1,player:'Joe Banyard',team:'JAX',position:'RB',rushing_attempts:2,rushing_attempts_per_game:2,total_rushing_yards:7,average_rushing_yards:3.5,yards_per_game:7,total_rushing_touchdowns:0,longest_rush:7,longest_rush_is_touchdown:false,rushing_first_downs:0,rushing_first_downs_percentage:0,rushes_more_than_20:0,rushes_more_than_40:0,rushing_fumbles:0,tableData:{id:0}}]}} }
      ]
      const store = mockStore({ stats: [] })
  
      return store.dispatch(actions.fetchStats()).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  })