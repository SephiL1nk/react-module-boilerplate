import React, { Component } from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core'

class Boilerplate extends Component {
  render() {
    const theme = createMuiTheme({

    })
    
    return (
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <div className='title'>Hello world</div>
        </ThemeProvider>
      </React.Fragment>
    )
  }
}

export default Boilerplate