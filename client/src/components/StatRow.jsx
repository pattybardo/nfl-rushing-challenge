import React from 'react';

function StatRow(props) {
    return <tr>
        <td>{props.player}</td>
        <td>{props.team}</td>
        <td>{props.position}</td>
        <td>{props.att}</td>
        <td>{props.attPerG}</td>
        <td>{props.yards}</td>
        <td>{props.avg}</td>
        <td>{props.yardPerG}</td>
        <td>{props.td}</td>
        <td>{props.lng}</td>
        <td>{props.first}</td>
        <td>{props.firstPCT}</td>
        <td>{props.twentyPlus}</td>
        <td>{props.fourtyPlus}</td>
        <td>{props.fumbles}</td>
    </tr>
};

export default StatRow;