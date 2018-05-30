import React, { Component } from 'react'
import { ScrollView, Text, Dimensions } from 'react-native'
import { connect } from 'react-redux'

import { fetchNews } from '../actions/newsAction'

class News extends Component {
  componentDidMount() {
    this.props.fetchNews()
  }

  render() {
    return (
      <ScrollView>
        <Text> Placeholder</Text>
        <Text> Placeholder</Text>
        <Text> Placeholder</Text>
        <Text> Placeholder</Text>
        <Text> Placeholder</Text>
        <Text> Placeholder</Text>
        <Text> Placeholder</Text>
        <Text> Placeholder</Text>
        <Text> Placeholder</Text>
        <Text> Placeholder</Text>
      </ScrollView>
    )
  }
}

const mapStateToProps = state => ({
  news: state.news.items
})

export default connect(mapStateToProps, { fetchNews })(News)