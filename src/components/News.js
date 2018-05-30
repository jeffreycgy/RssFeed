import React, { Component } from 'react'
import { ScrollView, Text, Image, TouchableOpacity, View, Dimensions } from 'react-native'
import { connect } from 'react-redux'

import { fetchNews, onPressed } from '../actions/newsAction'

class News extends Component {
  static navigationOptions = () => ({
    title: 'BBC Tech News'
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
    const itemWidth = Dimensions.get('window').width - 30
    return (
      <ScrollView>
        {this.props.news.map((item, i) => {
          return (
            <TouchableOpacity 
              key={i} 
              onPress={this.viewDetails.bind(this, item.link[0])}
              activeOpacity={0.8}
            >
              <View style={{marginTop: 10, marginLeft: 14, marginRight: 14, borderColor: '#a6a6a6', borderStyle: 'solid', borderBottomWidth: 1, width: itemWidth, paddingBottom: 20}}>
                <Text
                  style={{fontSize: 22, color: '#000000', textAlign: 'justify', marginBottom: 8}}
                >{item.title[0]}</Text>
                <Image
                  source={{uri: item['media:thumbnail'][0]['$'].url}}
                  style={{width: 330, height: 200}}
                />
                <Text
                  style={{fontSize: 16, marginTop: 8}}
                >{item.description[0]}</Text>
              </View>
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