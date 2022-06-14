type MaybeArray<T> = T | []

type TotalCount = {
  totalCount: Number
}

type EdgeNode = {
  name: String
  url: string
  forkCount: Number
  stargazers: TotalCount
}

export type Edges = {
  node: EdgeNode
}

type CursorData = {
  endCursor: String
  startCursor: String
}

type SearchData = {
  repositoryCount: 211660
  pageInfo: CursorData
  edges: MaybeArray<Array<Edges>>
}

type Data = {
  search: SearchData
}

export interface RepoListResponse {
  data: { data: Data }
}

export interface Error {}

export interface InterfaceEdgeNode {
  node: EdgeNode
}
