import { API_URL } from '../constants/urls'
import { Error, RepoListResponse } from '../types'
const axios = require('axios')
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const getRepoList = async (searchTopic = 'react', first = 10) => {
  return axios
    .post(
      API_URL,
      {
        query: `{search(query: "is:public, topic:${searchTopic}", type: REPOSITORY, first: ${first}) { repositoryCount pageInfo { endCursor startCursor } edges { node { ... on Repository { name, url, forkCount,  stargazers { totalCount}  } } } }}`,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${GITHUB_TOKEN}`,
        },
      }
    )
    .then(
      (response: RepoListResponse) => {
        return response?.data?.data?.search?.edges
      },
      (error: Error) => {
        console.log('API Error : ', error)
        return []
      }
    )
}
