import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Provider, connect } from 'react-redux'

import store from './store'
import MainNavigator from './config/routes'
import { createNavigationPropConstructor, initializeListeners } from 'react-navigation-redux-helpers';

console.disableYellowBox = true

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
      </Provider>
    )
  }
}