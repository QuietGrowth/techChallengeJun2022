import React from 'react'
import Count from './Count'
import { AiOutlineStar } from 'react-icons/ai'
import Grid from '@mui/material/Grid'

interface Props {
  count: Number
}

const StarsCount: React.FC<Props> = (props) => {
  const { count } = props
  return (
    <Grid container spacing={2} sx={{ justifyContent: 'flex-end' }}>
      <Grid item xs={2}>
        <AiOutlineStar />
      </Grid>
      <Grid item xs={8}>
        <Count count={count} />
      </Grid>
    </Grid>
  )
}

export default StarsCount
