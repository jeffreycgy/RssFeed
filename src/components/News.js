import React, { Component } from 'react'
import { ScrollView, Text, Image, TouchableOpacity, View, Dimensions, RefreshControl } from 'react-native'
import { connect } from 'react-redux'
import { SearchBar } from 'react-native-elements'

import { fetchNews, onPressed, setRefreshing, searchNews, copyNews } from '../actions/newsAction'

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

  refreshNews() {
    this.props.setRefreshing(true)
    this.props.fetchNews()
  }

  inputChange(e) {
    if(e === '') {
      this.props.fetchNews()
    }
    this.props.searchNews(e, this.props.news)
  }

  render() {
    if(this.props.news.length === 0) {
      return (
        <Text style={{alignSelf: 'center', fontSize: 24, marginVertical: 200}}> Loading... </Text>
      )
    }
    const itemWidth = Dimensions.get('window').width - 30
    return (
      <View>
        <SearchBar
          round
          searchIcon={{ size: 24}}
          placeholder='Search title'
          onChangeText={this.inputChange.bind(this)}
        />
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.props.isRefreshing}
              onRefresh={this.refreshNews.bind(this)}
            />
          }
        >
          {this.props.searchResult.map((item, i) => {
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

      </View>
    )
  }
}

const mapStateToProps = state => ({
  news: state.news.items,
  isRefreshing: state.news.isRefreshing,
  searchResult: state.news.searchResult
})

export default connect(mapStateToProps, { fetchNews, onPressed, setRefreshing, searchNews, copyNews })(News)