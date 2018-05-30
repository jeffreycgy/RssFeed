import React, { Component } from 'react'
import { ScrollView, Text, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { fetchNews } from '../actions/newsAction'

class News extends Component {
  componentDidMount() {
    this.props.fetchNews()
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
            // add onPress function
            <TouchableOpacity key={i} >
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

export default connect(mapStateToProps, { fetchNews })(News)