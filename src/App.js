import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Provider, connect } from 'react-redux'

import store from './store'
import MainNavigator from './config/routes'
import { createNavigationPropConstructor, initializeListeners } from 'react-navigation-redux-helpers';

const navigationPropConstructor = createNavigationPropConstructor('root')

class NavApp extends Component {
  componentDidMount() {
    initializeListeners('root', this.props.nav)
  }
  
  render() {
    const navigation = navigationPropConstructor(
      this.props.dispatch,
      this.props.nav
    )
    return <MainNavigator navigation={navigation} />
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav
})

const AppWithNavigationState = connect(mapStateToProps)(NavApp)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
        {/* <MainNavigator /> */}
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
