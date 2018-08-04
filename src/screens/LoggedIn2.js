/* @flow */

import React, { Component } from 'react';
import {
  // Fragment,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export class LoggedIn2 extends Component {
  static navigationOptions = {
    drawerLabel: 'Home2',
  }

  state = {
    viewMode: 'Members'
  }

  componentDidMount = () => {
    console.log('LoggedIn.js CMD');
  }

  render() {
    // const { currentUser } = this.props;
    const { viewMode } = this.state;
    // console.log('currentUser is', currentUser);

    return (
      <View style={styles.container}>
        <View>
          <Text
            onPress={() => this.props.navigation.toggleDrawer()}
            style={styles.userText}
          >
            LoggedIn2
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // borderColor: 'yellow',
    // borderWidth: 1,
    flex: 1,
    justifyContent: 'center',
  },
  // loggedInText: {
  //   fontSize: 30,
  //   textAlign: 'center',
  // },
  // navBar: {
  //   bottom: 0,
  //   display: 'flex',
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   position: 'absolute',
  // },
  userText: {
    fontSize: 24,
    textAlign: 'center',
  },
  // userText2: {
  //   borderColor: 'yellow',
  //   borderWidth: 1,
  //   flex: 1,
  //   fontSize: 24,
  //   textAlign: 'center',
  // }
});

// <View style={styles.navBar}>
//   <Text
//     onPress={
//       () => console.log('Members clicked')
//     }
//     style={styles.userText2}>
//     LoggedIn Screem
//   </Text>
//   <Text onPress={
//       () => console.log('Devices clicked')
//     }
//     style={styles.userText2}>
//     Devices
//   </Text>
// </View>
