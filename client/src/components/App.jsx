import React from 'react';

import { connect } from "react-redux";
import Table from './Table';



class App extends React.Component {

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

export default connect(mapStateToProps) (App);
