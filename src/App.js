import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import { createStackNavigator } from 'react-navigation'

import store from './store'
import News from './components/News'
import NewsDetail from './components/NewsDetail'

export default class App extends Component {
  render() {
    const MainNavigator = createStackNavigator({
      Main: { screen: News },
      Detail: { screen: NewsDetail }
    })

    return (
      <Provider store={store}>
        <MainNavigator />
        {/* <View style={styles.container}>
          <Text style={styles.welcome}>
            BBC News | Tech
          </Text>
          <News />
        </View> */}
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
