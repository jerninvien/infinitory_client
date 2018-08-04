import React, { Component } from 'react';
import {
  AsyncStorage,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

type Props = {

};

type State  = {
  username: null,
  inputError: null,
  labID: null,
};

export default class IntroScreen extends Component<Props, State> {
  state = {
    username: null,
    labID: null,
    inputError: null,
  }

  componentDidMount = () => {
    console.log('IntroScreen.js componentDidMount');

    AsyncStorage.getItem('username')
      .then(res => {
        console.log(`Checked local profile:`, res);
        this.setState({ username: res });
      }).catch(e => {
        console.log('AsyncStorage App.js e: ', e);
        this.setState({ lab: null, userProfile: null });
      });
  }

  componentWillUnmount() {
    console.log('IntroScreen.js componentWillUnmount');
  }

  _createNewLab = () => {
    console.log('_createNewLab');
  }

  _joinExistingLab = () => {
    console.log('_joinExistingLab');
  }

  _storeAsyncUsername = e => {
    const { text } = e.nativeEvent;
    const trimmedUsername = text.trim();

    if (trimmedUsername.length < 2) {
      console.log('trimmedUsername iz', trimmedUsername);
      this.setState({ inputError: 'Username must be at least 2 characters' })
      return
    }
    else {
      console.log('valid username', trimmedUsername);
    }

    AsyncStorage.setItem('username', trimmedUsername)
      // .then(res => console.log('AsyncStorage setItem', res))
      .catch(e => console.log('error storing name', e)).done();

    this.setState({ 'username': trimmedUsername });
  }

  _submitPincode = e => {
    const { text } = e.nativeEvent;
    console.log('_submitPincode', text);

    if (text.length < 6) {
      console.log('errorz here');
      this.setState({ inputError: 'Pincode must be 6 digits' });
      return;
    }

    // this._requestLabAccess(text)
    //   .then(res => this._storeAsyncUsername('username', e))
    //   .catch(e => console.log('error request access', e));
  }

  // SEND PINCODE WITH TO SERVER
  // RECEIVE BACK LAB DATA IF VALID => SAVE TO AsyncStorage:labID
  // OTHERWISE RECEIVE ERROR
  _requestLabAccess = pincode => {

  }

  _resetInfo = () => {
    console.log('_resetInfo');

    // For debugging ONLY
    AsyncStorage.multiRemove(['username', 'labID'])
      .then(() => console.log('removed username nad labID!!'))
      .catch(() => console.log('what??'));

    this.setState({
      labID: null,
      inputError: null,
      username: null,
    });
  }

  render() {
    const {} = this.props;

    const {
      labID,
      inputError,
      username
    } = this.state;

    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignSelf: 'stretch',
          borderWidth: 1,

          marginRight: 10,
          marginLeft: 10,
        }}
      >
        <Button
          onPress={this._createNewLab}
          title='Create New Lab'
          // style={{
          //   // height: 80,
          //   // flex: 1,
          //   // justifySelf: 'stretch',
          //
          //   // height:70,
          //   // flexDirection: 'row',
          //   // justifyContent: 'center',
          //   // alignItems: 'center',
          //   // marginBottom: 20
          //   textAlign: 'center',
          //   width: 100
          // }}
        />

        <Button
          onPress={this._joinExistingLab}
          title='Join Existing Lab'
          // style={{
          //   textAlign: 'center',
          //   width: 100
          // }}
        />

        {username === null &&
          <TextInput
            autoCapitalize='words'
            onFocus={() => this.setState({ inputError: null })}
            placeholder='Enter your name please'
            onSubmitEditing={e => this._storeAsyncUsername(e)}
            style={{
              alignSelf: 'stretch',
              fontSize: 24,
              textAlign: 'center',
            }}
          />
        }

        {((username !== null) && (labID === null)) &&
          <TextInput
            style={{
              alignSelf: 'stretch',
              fontSize: 24,
              textAlign: 'center',
            }}
            keyboardType='numeric'
            maxLength={6}
            onFocus={() => this.setState({ inputError: null })}
            placeholder='Enter invite pincode'
            onSubmitEditing={e => this._submitPincode(e)}
          />
        }

        {((username !== null) && (labID !== null)) &&
          <Text
            onPress={() => console.log('TEXTPRESS', Math.round(Math.random()*1000))}
            style={{
              textAlign: 'center',
              fontSize: 24,
            }}
          >You are a member of: {labID}</Text>
        }

        {inputError &&
          <Text
            style={{
              height: 40,
              alignSelf: 'stretch',
              textAlign: 'center',
              color: 'red'
            }}>
            {inputError}
          </Text>
        }


        <Button
          onPress={this._resetInfo}
          title="Reset Infoz"
          color="red"
          style={{
            alignSelf: 'flex-end',
            position: 'absolute',
            bottom: 35
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
