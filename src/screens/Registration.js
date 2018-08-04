import React, { Component, Fragment } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
 } from 'react-native';

import {
  Input,
  Loading,
  TextLink,
} from 'app/src/components/common';

import axios from 'axios';
import deviceStorage from 'app/src/services/deviceStorage';

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconFeather from 'react-native-vector-icons/Feather';


export class Registration extends Component {
  state = {
    error: '',
    loading: false,
    name: '',
    email: '',
    password: '',
    password2: '',
    profession: '',
  }

  componentDidMount = () => console.log('Registration.js CMD')

  _formInvalid = () => {
    const {
      name,
      email,
      password,
      password2,
      profession,
     } = this.state;

     return (
       (name.length < 3) ||
       (email.length < 3) ||
       (password.length < 8) ||
       (password2.length < 8) ||
       (password !== password2) ||
       (profession.length < 3)
     );
  }

  _sendJoinOrCreateRequest = () => {
    console.log('_sendJoinOrCreateRequest');

    this.props.navigation.navigate('RegistrationComplete');
    // const {
    //   name,
    //   email,
    //   password,
    //   password2,
    //   profession,
    //  } = this.state;
    //
    // if (name.length == 0) {
    //   this.setState({
    //     error: 'Fill all fields please'
    //   });
    //   return;
    // }
    //
    //
    // this.setState({
    //   error: '',
    //   loading: true,
    // });
    //
    // alert('Setup Submit');
    // return;

    // // NOTE HTTP is insecure, only post to HTTPS in production apps
    // axios({
    //   method: 'POST',
    //   url: `http://0.0.0.0:3000/api/v1/${endpoint}`,
    //   data: {
    //     [endpoint]: {
    //       pin_code,
    //       name: username,
    //     }
    //   }
    //   }).then(res => {
    //     // Handle the Invite response here
    //     console.log('response is', res);
    //
    //     this.props.setupLogin(res);
    //   }).catch(err => {
    //      // Handle Invite errors here
    //      console.log('error is 1', err);
    //      console.log('error is 2', err.message);
    //
    //      this.setState({
    //        error: err.message || 'Invalid Pin Code',
    //        loading: false,
    //      });
    //      return err;
    //   });
  }

  render() {
    const {
      error,
      loading,
      name,
      email,
      password,
      password2,
      profession,
    } = this.state;

    const {
      container,
      errorTextStyle,
      form,
    } = styles;

    console.log('Registration Render state:', this.state);

    const formInvalid = this._formInvalid();

    return (
      <View style={container}>
        <View style={form}>
          <Input
            iconName='user'
            label='Your name'
            onChangeText={name => this.setState({ name })}
            value={name}
          />

          <Input
            iconName='mail'
            label='Email Address'
            onChangeText={email => this.setState({ email })}
            value={email}
          />

          <Input
            iconName='lock'
            label='Password'
            onChangeText={password => this.setState({ password })}
            secureTextEntry
            value={password}
          />

          <Input
            iconName='lock'
            label='Re-type Password'
            onChangeText={password2 => this.setState({ password2 })}
            secureTextEntry
            value={password2}
          />

          <Input
            iconName='briefcase'
            label='Profession'
            onChangeText={profession => this.setState({ profession })}
            value={profession}
          />

          <Text style={errorTextStyle}>{error}</Text>
        </View>


        {!loading ?
          <View>
            <Button
              // disabled={formInvalid}
              title='REGISTER'
              onPress={this._sendJoinOrCreateRequest}
              // onPress={() => alert('Implement Login')}
              buttonStyle={{
                backgroundColor: 'steelblue',
                width: Dimensions.get('window').width * 0.7,
                height: 50,
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 25,
              }}
              titleStyle={{
                fontSize: 14,
                fontWeight: '700'
              }}
            />
          </View>
          :
          <Loading size={'large'} />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#fff'
  },
  form: {
    width: '75%',
  },
  errorTextStyle: {
    alignSelf: 'center',
    fontSize: 18,
    color: 'red'
  },
  hidden: {
    opacity: 0
  },
});


// <View style={styles.container}>
//   <View style={form}>
//     <View style={section}>
//       <Input
//         onChangeText={username => this.setState({
//           username,
//           error: '',
//         })}
//         placeholder='Enter your name'
//         value={username}
//       />
//     </View>
//
//     <View style={section}>
//       <Input
//         keyboardType={'numeric'}
//         maxLength={4}
//         onChangeText={pin_code => this.setState({
//           pin_code,
//           error: '',
//         })}
//         placeholder='Enter pin code (optional)'
//         value={pin_code}
//       />
//     </View>
//
//     <Text style={errorTextStyle}>{error}</Text>
//
//     {!loading ?
//       <TouchableButton
//         disabled={error !== ''}
//         onPress={this._sendJoinOrCreateRequest}
//         title={submitText}
//       >
//         {submitText}
//       </TouchableButton>
//       :
//       <Loading />
//     }
//   </View>
// </View>
