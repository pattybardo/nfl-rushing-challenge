import React from 'react';

import { connect } from "react-redux";
import { fetchStats } from '../redux/actions'
import Table from './Table';



class App extends React.Component {
  componentDidMount() {
    
    this.props.rushingStats()
  }

  render() {
    return (
      <div className="App">
        <Table stats={this.props.stats}/>
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
