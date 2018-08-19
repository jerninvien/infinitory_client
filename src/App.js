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
  Button,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { connect } from 'react-redux';
import { getUsers } from 'app/src/reduxModules/users';

import { LoggedIn, Registration } from 'app/src/screens/';
import { Loading, UserList } from 'app/src/components/common/';
import Routes from 'app/src/Routes';

import { deviceStorage } from 'app/src/services/';

class App extends Component {
  state = {
    // showRegisterScreen: true,
    appState: AppState.currentState,
    currentUser: null,
    devices: [],
    invite_codes: [],
    lab: {},
    loading: true,
    message: 'Checking account status...',
    // users: [],
  }

  componentDidMount = () => {
    console.log('App.js CMD');
    AppState.addEventListener('change', this._handleAppStateChange);

    // console.log('here props', this.props);

    this.props.getUsers().then(r => console.log('r iz', r));

    // deviceStorage.loadItem('api_key')
    //   .then(res => {
    //     if (res !== null) {
    //       this._makeInitialLabRequest(res);
    //     } else {
    //       this.setState({
    //         loading: false,
    //         message: 'Create account or login',
    //       });
    //     }
    // }).catch(err => {
    //   console.log("deviceStorage.loadItem('api_key') err", err);
    // });
  }

  componentWillUnmount() {
    console.log('App.js componentWillUnmount');
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  // _makeInitialLabRequest = res => {
  //   console.log('_makeInitialLabRequest', res);
  //   const headers = { 'X-USER-TOKEN': res };
  //
  //   axios({
  //     method: 'GET',
  //     url: 'http://localhost:3000/api/v1/lab',
  //     headers,
  //   }).then(res => {
  //     console.log('success here', res);
  //
  //     this.setState({
  //       ...res.data,
  //       // showRegisterScreen: false,
  //       loading: false,
  //       message: '',
  //     });
  //   }).catch(err => {
  //     this.setState({
  //       // showRegisterScreen: true,
  //       loading: false,
  //       message: 'Create a lab or join one',
  //     });
  //   });
  // }

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


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  mainContent: {
    margin: 10,
  },
});

mapStateToProps = store => ({
    users: store.users.users,
    loading: store.users.loading,
    error: store.users.error,
  });

mapDispatchToProps = {
  getUsers
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
