import React, { Component } from 'react';
import {
  AlertIOS,
  Button,
  Linking,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

// import TouchIDComponent from 'app/src/components/touch_id';
// import NFCComponent from 'app/src/components/nfc';

type Props = {};
type State = {}

export default class Base extends Component<Props, State> {
  state = {}

  render() {
    const {} = this.props;

    // const touchIDComponent = touchIDPresent ? (
    //   <TouchIDComponent pressHandler={pressHandler}/>
    // ) :

    //
    // const nfcComponent = nfcPresent ? (
    //   <NFCComponent
    //     cancelNdefWrite={cancelNdefWrite}
    //     clearMessages={this._clearMessages}
    //     nfcEnabled={nfcEnabled}
    //     goToNfcSetting={goToNfcSetting}
    //     isWriting={isWriting}
    //     onChangeText={urlToWrite => this.setState({urlToWrite})}
    //     requestFormat={requestFormat}
    //     requestNdefWrite={requestNdefWrite}
    //     startDetection={startDetection}
    //     stopDetection={stopDetection}
    //     supported={supported}
    //     tag={tag}
    //     urlToWrite={urlToWrite}
    //   />
    // ) : 

    return (
      <ScrollView style={styles.scrollView}>
        <StatusBar
           backgroundColor='white'
           barStyle='dark-content'
        />
          <Text
            onPress={() => console.log('Clicked this iOS')}
            style={styles.welcome}>NFC not Supported
          </Text>

        {nfcComponent}

        </ScrollView>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
  instructions: {
    color: '#333333',
    marginBottom: 5,
    textAlign: 'center',
  },
});
