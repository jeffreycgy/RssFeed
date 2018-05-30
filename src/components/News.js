import React, { Component } from 'react'
import { ScrollView, Text, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { fetchNews, onPressed } from '../actions/newsAction'

class News extends Component {
  static navigationOptions = () => ({
    title: 'BBC Tech News',
    headerStyle: {
      backgroundColor: '#192A75'
    },
    headerTitleStyle: {
      color: '#ffffff'
    }
  })

  componentDidMount() {
    this.props.fetchNews()
  }

  viewDetails(url) {
    this.props.onPressed(url)
    this.props.navigation.navigate('Detail')
  }

  render() {
    if(this.props.news.length === 0) {
      return (
        <Text> Loading... </Text>
      )
    }

    return (
      <ScrollView>
        {this.props.news.map((item, i) => {
          return (
            <TouchableOpacity key={i} onPress={this.viewDetails.bind(this, item.link[0])}>
              <Text> {item.title[0]} </Text>
              <Image
                source={{uri: item['media:thumbnail'][0]['$'].url}}
                style={{width: 100, height: 100}}
              />
              <Text> {item.description[0]} </Text>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    )
  }
}

const mapStateToProps = state => ({
  news: state.news.items
})

export default connect(mapStateToProps, { fetchNews, onPressed })(News)