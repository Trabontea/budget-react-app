import React from 'react'
import {Segment, Grid} from 'semantic-ui-react'
import DisplayBalance from'./DisplayBalance'

const DisplayBalances = () => {
  return (
    <Segment textAlign="center">
    <Grid columns={2} divided>
      <Grid.Row>
        <Grid.Column>
          <DisplayBalance title="Income" value="1,500.2" color="green" />
        </Grid.Column>
        <Grid.Column>
          <DisplayBalance title="Expences" value="623.5" color="red" />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
  )
}

export default DisplayBalances
