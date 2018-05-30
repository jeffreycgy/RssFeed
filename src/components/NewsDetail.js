import React, { Component } from 'react'
import { WebView, Dimensions, BackHandler } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

class NewsDetail extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }

  onBackPress = () => {
    const { dispatch } = this.props
    dispatch(NavigationActions.back())
    return true
  }

  render() {
    const screenWidth = Dimensions.get('window').width
    return (
      <WebView
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