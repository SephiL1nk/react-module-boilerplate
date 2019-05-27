import React, { Component } from 'react'
import { TableCell, TableHead, TableRow, TableSortLabel, Tooltip } from '@material-ui/core'
import SearchBar from './SearchBar'
import _ from 'lodash'

export default class Header extends Component {
  constructor() {
    super()
  }

  createSortHandler = property => event => {
    this.props.onRequestSort(event, property)
  }

  render() {
    const { order, orderBy, header, handleSearchRequest } = this.props
    return (
      <React.Fragment>
        <TableHead>
          <TableRow>
            {!_.isUndefined(header) ? header.map(column => {
              return (
                <TableCell
                  key={column.id}
                  numeric={column.numeric}
                  padding={column.disablePadding ? 'none' : 'default'}
                  sortDirection={orderBy === column.id ? order : false}
                >
                  {column.sortable && column.sortable === true ?
                  <Tooltip
                  title="Sort"
                  placement={column.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                  >
                    <TableSortLabel
                      active={orderBy === column.id}
                      direction={order}
                      onClick={this.createSortHandler(column.id)}
                    >
                      {column.label}
                    </TableSortLabel>
                  </Tooltip>
                  :    
                  column.label
                  }
                  {column.search && column.search.field !== null ? column.search.field : null}
                </TableCell>       
              )
            }) : <TableCell></TableCell>}
          </TableRow>
          <TableRow>
            <SearchBar {...this.props} onSubmit={handleSearchRequest} />
          </TableRow>
        </TableHead>
      </React.Fragment>
    )
  }
}