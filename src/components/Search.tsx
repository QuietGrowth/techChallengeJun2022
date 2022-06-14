import { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

interface InterfaceSearchProps {
  searchTopic: string
  handleClickSearch: (searchValue: string) => void
}

const Search = ({ searchTopic, handleClickSearch }: InterfaceSearchProps) => {
  const [searchValue, setSearchValue] = useState<string>(searchTopic)

  const handleSearchString = (_searchString: string) => {
    setSearchValue(_searchString)
  }

  return (
    <Grid container spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
      <Grid item xs={2}>
        Repo:
      </Grid>
      <Grid item xs={6}>
        <Box component="form" noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            size="small"
            value={searchValue}
            onChange={(e) => handleSearchString(e.target.value)}
          />
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Button variant="contained" onClick={() => handleClickSearch(searchValue)}>
          Search
        </Button>
      </Grid>
    </Grid>
  )
}

export default Search
