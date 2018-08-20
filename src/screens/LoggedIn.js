/* @flow */

import React, { Component } from 'react';
import {
  // Fragment,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { connect } from 'react-redux';
import { getLab } from 'app/src/reduxModules/users';

class LoggedIn extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
  }

  componentDidMount = () => {
    this.props.getLab();
  }

  render() {
    const {
      currentUser,
      devices,
      invite_codes,
      lab,
      users,
    } = this.props;

    // console.log('currentUser are', currentUser);
    // console.log('devices are', devices);
    console.log('invite_codes are', invite_codes);
    console.log('lab are', lab);
    console.log('users are', users);

    return (
      <View style={styles.container}>
        <View>
        <Text
          onPress={this._getLab}
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
  device: store.users.device,
  error: store.users.error,
  invite_codes: store.users.invite_codes,
  lab: store.users.lab,
  loading: store.users.loading,
  users: store.users.users,

})

mapDispatchToProps = {
  getLab
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
