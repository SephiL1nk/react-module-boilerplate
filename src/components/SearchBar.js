import React, { Component } from 'react'
import _ from 'lodash'
import { TableCell, Button, Input, Select, MenuItem } from '@material-ui/core'
import DateTime from 'react-datetime'
import moment from 'moment'
import { removeEmpty } from '../services/objectHelper'

export default class SearchBar extends Component {
  constructor() {
    super()
    this.state = {
      datas: {},
      header: {},
    }
  }

  getFields = (header) => {
    _.map(header, column => {
      _.set(column, 'search.field', 
      <TableCell>
        <Input 
          error=''
          id={column.id}
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            disabled:false,
            name: column.id,
            onBlur: (event) => this.handleDataChange(event)
          }}
        />
      </TableCell>)
    })
  }

  handleDataChange = (event) => {
    let datas = this.state.datas
    let key = event.target.id ? event.target.id : event.target.name
    datas[key] = event.target.value
    this.setState({datas})
  }

  handleDatefieldChange = (data) => {
    let date = moment(data.value).format("YYYY-MM-DD")
    let datas = this.state.datas
    
    datas[data.id] = date !== 'Invalid date' ? date : ''
    this.setState({datas})
  }

  handleSubmit = () => {
    let { datas } = this.state
    datas = removeEmpty(datas, true)
    this.props.onSubmit(_.cloneDeep(datas))
  } 

  render() {
    const { header, showSearchBar } = this.props
    const { datas } = this.state

    if (!_.isUndefined(showSearchBar) && showSearchBar === false) {
      return null
    }

    return (
      <React.Fragment>
        {_.map(header, column => {
          let columnId = column.search && column.search.by ? column.search.by : column.id

          if (columnId === 'actions') {
            return (
              <TableCell>
                <Button onClick={this.handleSubmit}>Search</Button>
              </TableCell>
            )
          } else {
            if (column.search && column.search.type) {
              switch(column.search.type) {
                case 'date': 
                  return (
                    <TableCell>
                      <DateTime
                        id={columnId}
                        value={datas[columnId] ? datas[columnId] : ''}
                        onChange = {(date) => {
                          let data = {id: columnId, value: date}
                          this.handleDatefieldChange(data)
                        }}
                        input = {true}
                        open = {false}
                      />
                    </TableCell> 
                  )
                case 'select': 
                  return (
                    <Select
                      value={datas[columnId] !== undefined ? datas[columnId] : []}
                      onChange={this.handleDataChange}
                      multiple={column.search.multiple ? column.search.multiple : false}
                      inputProps={{
                        name: columnId,
                        id: columnId,
                      }}
                    >
                      {column.search.datas !== undefined && _.map(column.search.datas, (value, key) => {
                        let itemValue = column.search.choiceByKey ? key : value
                        return (
                          <MenuItem value={itemValue}>{value}</MenuItem>    
                        )
                      })}
                    </Select>
                  )
                default: 
                  return (<TableCell>
                    <Input 
                      error=''
                      form='searchBar'
                      id={columnId}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled:false,
                        name: columnId,
                        onBlur: (event) => this.handleDataChange(event)
                      }}
                    />
                  </TableCell>)
              }
            } else {
              return (
                <TableCell>
                  <Input 
                    error=''
                    form='searchBar'
                    id={columnId}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled:false,
                      name: columnId,
                      onBlur: (event) => this.handleDataChange(event)
                    }}
                  />
                </TableCell>
              )
            }
            
          }
        })}
      </React.Fragment>
    )
  }
}