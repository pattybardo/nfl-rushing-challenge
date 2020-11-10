import MaterialTable from 'material-table';



function Table(props) {
    const columns = [
        {
          title: "Player",
          field: "player",
          cellStyle: {width: '15%'},
          filtering: true,
          sorting: false,
          
        },
        {
          title: "Team",
          field: "team",
          filtering: false,
          sorting: false
        },
        {
          title: "POS",
          field: "position",
          filtering: false,
          sorting: false
        },
        {
          title: "ATT",
          field: "rushing_attempts",
          filtering: false,
          type: 'numeric',
          sorting: false
        },
        {
          title: "ATT/G",
          field: "rushing_attempts_per_game",
          filtering: false,
          type: 'numeric',
          sorting: false
        },
        {
          title: "YDS",
          field: "total_rushing_yards",
          filtering: false,
          type: 'numeric',
          
        },
        {
          title: "AVG",
          field: "average_rushing_yards",
          filtering: false,
          type: 'numeric',
          sorting: false
        },
        {
          title: "YDS/G",
          field: "yards_per_game",
          filtering: false,
          type: 'numeric',
          sorting: false
        },
        {
          title: "TD",
          field: "total_rushing_touchdowns",
          filtering: false,
          type: 'numeric',
          
        },
        {
          title: "LNG",
          field: "longest_rush",
          filtering: false,
          type: 'numeric',
          
        },/*
        {
          title: "LngIsTD?",
          field: "longest_rush_is_touchdown",
          filtering: false,
          sorting: false
        },*/
        {
          title: "1st",
          field: "rushing_first_downs",
          filtering: false,
          type: 'numeric',
          sorting: false
        },
        {
          title: "1st%",
          field: "rushing_first_downs_percentage",
          filtering: false,
          type: 'numeric',
          sorting: false
        },
        {
          title: "20+",
          field: "rushes_more_than_20",
          filtering: false,
          type: 'numeric',
          sorting: false
        },
        {
          title: "40+",
          field: "rushes_more_than_40",
          filtering: false,
          type: 'numeric',
          sorting: false
        },
        {
          title: "FUM",
          field: "rushing_fumbles",
          filtering: false,
          type: 'numeric',
          sorting: false
        },
    ];
    return (
        <MaterialTable
            columns = {columns}
            data={props.stats}
            title="NFL Rushing Stats"
            options={{
                sorting: true,
                exportButton: true,
                exportAllData: true,
                filtering: true,
                pageSizeOptions: [5, 10, 20, 50],
            }}
        />
    ) 
}

export default Table;