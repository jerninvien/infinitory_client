/* @flow */

import React, { Component } from 'react';
import {
  // Fragment,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { connect } from 'react-redux';
import { getUsers } from 'app/src/reduxModules/users';

class LoggedIn extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
  }

  componentDidMount = () => {
    console.log('LoggedIn.js CMD', this.props);
    this._getUsers();
  }

  _getUsers = () => {
    this.props.getUsers()
      .then(r => console.log('getUesrs success', r))
      .catch(e => console.log('getUsers error', r));
  }

  render() {
    const { currentUser, getUsers, users } = this.props;

    console.log('currentUser are', currentUser);
    console.log('uzerz are', users);

    return (
      <View style={styles.container}>
        <View>
        <Text
          onPress={this._getUsers}
          style={styles.userText}
        >
            {currentUser.name}
          </Text>
        </View>
      </View>
    );
  }
}

mapStateToProps = store => ({
  currentUser: store.users.currentUser,
  loading: store.users.loading,
  error: store.users.error,
  users: store.users.users
})

mapDispatchToProps = {
  getUsers
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoggedIn);

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
