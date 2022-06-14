import React from 'react'
import Link from '@mui/material/Link'

interface InterfaceRepoName {
  name: String
  url: string
}

const RepoName = ({ name, url }: InterfaceRepoName) => {
  return (
    <Link href={url} underline="none">
      {name}
    </Link>
  )
}

export default RepoName
