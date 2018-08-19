/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 // Initial structure and code taken from:
 // https://medium.com/@njwest/building-a-react-native-jwt-client-efacf78b9364
 // https://medium.com/@njwest/building-a-react-native-jwt-client-api-requests-and-asyncstorage-d1a20ab60cf4

import React, { Component, Fragment } from 'react';
import {
  AppState,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { LoggedIn, Registration } from 'app/src/screens/';
import { Loading, UserList } from 'app/src/components/common/';

import { setApiKeyInStore } from 'app/src/reduxModules/users';
import { connect } from 'react-redux';


import Routes from 'app/src/Routes';

class App extends Component {
  state = { appState: AppState.currentState }

  componentDidMount = async () => {
    console.log('App.js CMD');
    AppState.addEventListener('change', this._handleAppStateChange);

    // await AsyncStorage.setItem('apiKey');

    const apiKey = await AsyncStorage.getItem('apiKey');
    apiKey ? this.props.setApiKeyInStore(apiKey) : console.log('no apiKey');

    // AsyncStorage.getItem('apiKey').then(apiKey => {
    //   if (apiKey) {
    //     console.log('componentDidMount apiKey found!');
    //     // config.headers.authorization = `Bearer ${apiKey}`;
    //     this.props.setApiKeyInStore(apiKey)
    //   } else {
    //     console.log('apiKey not found!');
    //   }
  }

  componentWillUnmount() {
    console.log('App.js componentWillUnmount');
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange = nextAppState => {
    // console.log('_handleAppStateChange nextAppState', nextAppState);
    if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
      console.log('App has come to the foreground!');
    }
    this.setState({appState: nextAppState});
  }

  render() {
    return (
        <View style={styles.container}>
          <StatusBar
             backgroundcolor='steelblue'
             barStyle='light-content'
          />
          <Routes />
        </View>
    );
  }
}

mapStateToProps = store => ({})

mapDispatchToProps = {
  setApiKeyInStore
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  mainContent: {
    margin: 10,
  },
});
