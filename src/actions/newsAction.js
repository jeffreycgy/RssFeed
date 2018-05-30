import { parseString } from 'xml2js'
import { FETCH_NEWS } from './types'

export const fetchNews = () => dispatch => {
  fetch('http://feeds.bbci.co.uk/news/technology/rss.xml')
  .then(res => res.text())
  .then(news => {
    parseString(news, (err, result) => {
      console.log(result.rss.channel[0].item)
      dispatch({
        type: FETCH_NEWS,
        payload: result.rss.channel[0].item
      })
    })
  })
}