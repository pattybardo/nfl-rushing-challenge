import React from 'react';
import { connect } from "react-redux";
import { fetchStats} from '../redux/actions'
import StatRow from './StatRow';



class App extends React.Component {
  componentDidMount() {
    
    this.props.rushingStats()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          
        </header>
        <table>
          <thead>
            <tr>
              <th>Player</th>
              <th>Team</th>
              <th>POS</th>
              <th>Att</th>
              <th>Att/G</th>
              <th>Yds</th>
              <th>Avg</th>
              <th>Yds/G</th>
              <th>TD</th>
              <th>Lng</th>
              <th>LNG is TD</th>
              <th>1st</th>
              <th>1st%</th>
              <th>20+</th>
              <th>40+</th>
              <th>FUM</th>
            </tr>
          </thead>
          
          <tbody>
            {this.props.stats?.map((entry) => (
              <StatRow key={entry.id}{...entry}/>
            ))}
          </tbody>
          
          
        </table>
      </div>
    )
  }
  
}

const mapStateToProps = state => {
  return {
    stats: state.stats
  }
}

const mapDispatchToProps = dispatch => {
  return {
    rushingStats: () => dispatch(fetchStats())
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
