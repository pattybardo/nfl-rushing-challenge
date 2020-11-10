import React from 'react';

function StatRow(props) {
    return <tr>
        <td>{props.player}</td>
        <td>{props.team}</td>
        <td>{props.position}</td>
        <td>{props.rushing_attempts}</td>
        <td>{props.rushing_attempts_per_game}</td>
        <td>{props.total_rushing_yards}</td>
        <td>{props.average_rushing_yards}</td>
        <td>{props.yards_per_game}</td>
        <td>{props.total_rushing_touchdowns}</td>
        <td>{props.longest_rush}</td>
        <td>{props.longest_rush_is_touchdown.toString()}</td>
        <td>{props.rushing_first_downs}</td>
        <td>{props.rushing_first_downs_percentage}</td>
        <td>{props.rushes_more_than_20}</td>
        <td>{props.rushes_more_than_40}</td>
        <td>{props.rushing_fumbles}</td>
    </tr>
};

export default StatRow;