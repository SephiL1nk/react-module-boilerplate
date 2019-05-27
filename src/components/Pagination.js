import React, { Component } from 'react'
import { TablePagination } from '@material-ui/core'

export default class Pagination extends Component {
  constructor() {
    super()
  }

  render() {
    return (
        <TablePagination
          {...this.props}
          component="div"
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
        />
    )
  }
}