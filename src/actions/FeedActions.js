import {
  FEED_START,
  FEED_SUCCESS,
  FEED_FAILD,
  BASE_URL
} from './types'

import { get } from './api'

export const getFeed = (params) => {
  return (dispatch) => {
      get(
          BASE_URL.concat('/api/characters'),
          params,
          dispatch,
          FEED_START,
          FEED_SUCCESS,
          FEED_FAILD
      )
  }
}
