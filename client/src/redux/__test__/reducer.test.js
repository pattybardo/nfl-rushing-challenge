import reducers from '../reducer';

it('reducer reduces on success', () => {
  let state;
  state = reducers([], {type:'FETCH_STATS_SUCCESS',payload:{stats:[{id:1,player:'Joe Banyard',team:'JAX',position:'RB',rushing_attempts:2,rushing_attempts_per_game:2,total_rushing_yards:7,average_rushing_yards:3.5,yards_per_game:7,total_rushing_touchdowns:0,longest_rush:7,longest_rush_is_touchdown:false,rushing_first_downs:0,rushing_first_downs_percentage:0,rushes_more_than_20:0,rushes_more_than_40:0,rushing_fumbles:0,tableData:{id:0}}]}});

  expect(state).toEqual({stats:[{id:1,player:'Joe Banyard',team:'JAX',position:'RB',rushing_attempts:2,rushing_attempts_per_game:2,total_rushing_yards:7,average_rushing_yards:3.5,yards_per_game:7,total_rushing_touchdowns:0,longest_rush:7,longest_rush_is_touchdown:false,rushing_first_downs:0,rushing_first_downs_percentage:0,rushes_more_than_20:0,rushes_more_than_40:0,rushing_fumbles:0,tableData:{id:0}}]});
});

it('reducer returns empty state', () => {
    let state;
    state = reducers([], {type:'INCORRECT_TYPE',payload:{stats:[{id:1,player:'Joe Banyard',team:'JAX',position:'RB',rushing_attempts:2,rushing_attempts_per_game:2,total_rushing_yards:7,average_rushing_yards:3.5,yards_per_game:7,total_rushing_touchdowns:0,longest_rush:7,longest_rush_is_touchdown:false,rushing_first_downs:0,rushing_first_downs_percentage:0,rushes_more_than_20:0,rushes_more_than_40:0,rushing_fumbles:0,tableData:{id:0}}]}});
  
    expect(state).toEqual([]);
});