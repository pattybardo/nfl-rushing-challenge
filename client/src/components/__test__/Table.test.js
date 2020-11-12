import React from 'react';
import Table from '../Table';

import { render, screen } from '@testing-library/react';


it("Renders table without crashing", () => {
    const div = document.createElement("div")
    render(<Table />, div)
})

it('Renders table title', () => {
    render(<Table />);
    expect(screen.getByText('NFL Rushing Stats')).toBeInTheDocument();
});

it('Renders table column headers', () => {
    render(<Table />);
    expect(screen.getByText('Player')).toBeInTheDocument();
    expect(screen.getByText('Team')).toBeInTheDocument();
    expect(screen.getByText('POS')).toBeInTheDocument();
    expect(screen.getByText('ATT')).toBeInTheDocument();
    expect(screen.getByText('ATT/G')).toBeInTheDocument();
    expect(screen.getByText('YDS')).toBeInTheDocument();
    expect(screen.getByText('AVG')).toBeInTheDocument();
    expect(screen.getByText('YDS/G')).toBeInTheDocument();
    expect(screen.getByText('TD')).toBeInTheDocument();
    expect(screen.getByText('LNG')).toBeInTheDocument();
    expect(screen.getByText('1st')).toBeInTheDocument();
    expect(screen.getByText('1st%')).toBeInTheDocument();
    expect(screen.getByText('20+')).toBeInTheDocument();
    expect(screen.getByText('40+')).toBeInTheDocument();
    expect(screen.getByText('FUM')).toBeInTheDocument();
});

it('Shows table data', () => {
    const props = { stats: [{
        id:1,
        player:"Joe Banyard",
        team:"JAX",
        position:"RB",
        rushing_attempts:2,
        rushing_attempts_per_game:2,
        total_rushing_yards:7,
        average_rushing_yards:3.5,
        yards_per_game:7,
        total_rushing_touchdowns:0,
        longest_rush:7,
        longest_rush_is_touchdown:false,
        rushing_first_downs:0,
        rushing_first_downs_percentage:0,
        rushes_more_than_20:0,
        rushes_more_than_40:0,
        rushing_fumbles:0
    }]}

    render(<Table stats = {props.stats} />);
    expect(screen.getByText('Joe Banyard')).toBeInTheDocument();
})
