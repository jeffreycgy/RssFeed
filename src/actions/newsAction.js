import { parseString } from 'xml2js'
import { FETCH_NEWS, FETCH_DETAILS, SET_REFRESH } from './types'

export const fetchNews = () => dispatch => {
  fetch('http://feeds.bbci.co.uk/news/technology/rss.xml')
  .then(res => res.text())
  .then(news => {
    parseString(news, (err, result) => {
      // console.log(result.rss.channel[0].item)
      dispatch({
        type: FETCH_NEWS,
        payload: result.rss.channel[0].item
      })
      dispatch(setRefreshing(false))
    })
  })
}

export const onPressed = (url) => dispatch => {
  dispatch({
    type: FETCH_DETAILS,
    payload: url
  })
}

export const setRefreshing = (bool) => {
  return {
    type: SET_REFRESH,
    payload: bool
  }
}