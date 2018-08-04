import React, { Component } from 'react';
import {
  Button,
  Linking,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

type Props = {};

export default class Base extends Component<Props, State> {

  _clearMessages = () => this.setState({tag: null});

  render() {
    const {} = this.props;

    return (
      <View style={styles.scrollView}>
        <StatusBar
           backgroundcolor='steelblue'
           barStyle='dark-content'
        />
        <Text style={styles.text}>Test</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    borderWidth: 1,
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'space-around',
    // alignItems: 'center'
  },
  text: {
    fontSize: 30,
    margin: 10,
    textAlign: 'center',
  },
});

// <Text
//   onPress={() => console.log('Fingerprint this')}
//   style={styles.welcome}>Fingerprint ID not Support
// </Text>
//
// <View style={{flex: 1, flexDirection: 'row'}}>
//   <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//   <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
//   <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
// </View>
// <Text
//   onPress={() => console.log('NFC this Android')}
//   style={styles.welcome}>NFC not Supportedz
// </Text>
