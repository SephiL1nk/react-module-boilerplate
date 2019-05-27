import ListEnhanced from './List'

import React, { Component } from 'react';

class List extends Component {
  render() {
    return (
      <React.Fragment>
        <ListEnhanced {...this.props} />   
      </React.Fragment>
    )
  }
}

export default List