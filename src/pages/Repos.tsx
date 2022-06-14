/* eslint-disable max-len */
import { useEffect, useState, useRef, useCallback } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

import { getRepoList } from '../helpers/api'
import { Edges } from '../types'
import RepoName from '../components/RepoName'
import ForkCount from '../components/ForkCount'
import StarsCount from '../components/StarsCount'

function Repo() {
  const mounted = useRef(false)
  const [isFetchingRepo, setFetchingRepo] = useState(true)
  const [repoList, setRepoList] = useState([])
  const [searchTopic, setSearchTopic] = useState('react')

  const fetchRepoList = useCallback(async () => {
    setFetchingRepo(true)
    const res = await getRepoList(searchTopic)
    setRepoList(res)
    setFetchingRepo(false)
  }, [searchTopic])

  useEffect(() => {
    mounted.current = true

    fetchRepoList()

    return () => {
      mounted.current = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ height: '100vh', padding: 10 }}>
          <TableContainer component={Paper}>
            <Table sx={{ maxWidth: 650 }} aria-label="simple table">
              <TableBody>
                {isFetchingRepo ? (
                  <TableRow>
                    <TableCell align="center">
                      Please wait while we fetch the list of repositories
                    </TableCell>
                  </TableRow>
                ) : (
                  repoList.map((repo: Edges, index: number) => (
                    <TableRow
                      key={index}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" align="left" scope="row">
                        <RepoName name={repo?.node?.name} url={repo?.node?.url} />
                      </TableCell>
                      <TableCell align="right" padding="none">
                        <ForkCount count={repo?.node?.forkCount} />
                      </TableCell>
                      <TableCell align="right" sx={{ padding: '10px' }}>
                        <StarsCount count={repo?.node?.stargazers?.totalCount} />
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </>
  )
}

export default Repo
