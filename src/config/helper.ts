import { AxiosRequestConfig } from 'axios'
import { api } from './api'

export const fetcher = (options: AxiosRequestConfig) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  api({ ...options }).then((res: any) => res.data)