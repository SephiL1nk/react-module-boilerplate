import React from 'react'
import { CircularProgress, Grid } from '@material-ui/core'

export default class Loading extends React.Component {
  render () {
    return (
      <React.Fragment >
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <CircularProgress size={50} />
        </Grid>
      </React.Fragment>
    )}
}