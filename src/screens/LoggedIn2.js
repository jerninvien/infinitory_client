/* @flow */

import React, { Component } from 'react';
import {
  AsyncStorage,
  // Fragment,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { connect } from 'react-redux';
import { getLab } from 'app/src/reduxModules/users';

class LoggedIn2 extends Component {
  componentDidMount = () => {
    console.log('LoggedIn2.js CMD');
  }

  componentWillUnmount = () => {
    console.log('LoggedIn2, CWU');
  }

  componentWillReceiveProps = nextProps => {
    console.log('LoggedIn2 componentWillReceiveProps', nextProps);
  }

  _logOut = () => {
    this.props.navigation.navigate('Auth');
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text
            onPress={this._logOut}
            style={styles.userText}
          >
            Logout
          </Text>
        </View>
      </View>
    );
  }
}

mapStateToProps = store => ({
  currentUser: store.users.currentUser,
  devices: store.users.devices,
  statusCode: store.users.statusCode,
  invite_codes: store.users.invite_codes,
  lab: store.users.lab,
  loading: store.users.loading,
  users: store.users.users,

})
export default connect(
  mapStateToProps
)(LoggedIn2);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  userText: {
    fontSize: 24,
    textAlign: 'center',
  },
});
