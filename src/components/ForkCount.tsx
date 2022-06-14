import React from 'react'
import Count from './Count'
import { AiOutlineFork } from 'react-icons/ai'
import Grid from '@mui/material/Grid'

interface Props {
  count: Number
}

const ForkCount: React.FC<Props> = (props) => {
  const { count } = props
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <AiOutlineFork />
      </Grid>
      <Grid item xs={8}>
        <Count count={count} />
      </Grid>
    </Grid>
  )
}

export default ForkCount
