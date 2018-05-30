import React, { Component } from 'react'
import { WebView, Dimensions } from 'react-native'
import { connect } from 'react-redux'

class NewsDetail extends Component {
  render() {
    const screenWidth = Dimensions.get('window').width
    return (
      <Webview
        source={{uri: this.props.url}}
        style={{flex: 1, width: screenWidth}}
      />
    )
  }
}

const mapStateToProps = state => ({
  url: state.news.itemUrl
})

export default connect(mapStateToProps, null)(NewsDetail)