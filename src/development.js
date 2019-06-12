import { render } from 'react-dom'
import React, { Component } from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'

const props = {}

class Boilerplate extends Component {
  render() {
    return (<div className='title'>Hello world</div>)
  }
}

render(<MuiThemeProvider><Boilerplate /></MuiThemeProvider>, document.getElementById('app'));
