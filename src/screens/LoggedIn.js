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
  componentDidMount = () => {
    console.log('LoggedIn CDM');
    this.props.getLab();
  }

  componentWillUnmount = () => {
    console.log('LoggedIn, CWU');
  }

  componentWillReceiveProps = nextProps => {
    console.log('LoggedIn1 componentWillReceiveProps', nextProps);

    if ((this.props.statusCode === null) &&
        (nextProps.statusCode === 403)) {
      console.log('LoggedIn 403');
      this.props.navigation.navigate('Auth');
    }
  }

  render() {
    const {
      currentUser,
      devices,
      invite_codes,
      lab,
      users,
    } = this.props;

    // console.log('invite_codes are', invite_codes);
    // console.log('lab are', lab);
    // console.log('users are', users);

    return (
      <View style={styles.container}>
        <View>
        <Text
          onPress={this.props.getLab}
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
  devices: store.users.devices,
  statusCode: store.users.statusCode,
  invite_codes: store.users.invite_codes,
  lab: store.users.lab,
  loading: store.users.loading,
  users: store.users.users,

})

mapDispatchToProps = {
  getLab,
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
