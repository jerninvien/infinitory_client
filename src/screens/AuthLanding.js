import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { connect } from 'react-redux';
import { joinCreateLab } from 'app/src/reduxModules/users';


import Icon from 'react-native-vector-icons/Entypo';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

import {
  // Input,
  Loading,
  TextLink,
  TouchableButton,
} from 'app/src/components/common';

import axios from 'axios';


class AuthLanding extends Component {
  // static navigationOptions = {
  //   title: 'Homez',
  // };

  state = {
    error: '',
    loading: false,
    pin_code: '',
    username: '',
  }

  componentDidMount = () => {
    console.log('AuthLanding.js CMD', this.props);
  }

  // _goToHere = path => () => {
  //   this.props.navigation.navigate(path);
  // }

  _sendJoinOrCreateRequest = () => {
    const { pin_code, username } = this.state;

    if (username.length == 0) {
      this.setState({ error: 'Enter a Username please' });
      return;
    }

    if (pin_code.length > 0 && pin_code.length !== 5) {
      this.setState({ error: 'Pin code must be 5 digits' });
      return;
    }

    this.setState({
      error: '',
      loading: true,
    });

    const endpoint = pin_code.length > 0 ? 'users' : 'lab';

    // NOTE Post to HTTPS in production
    this.props.joinCreateLab({endpoint, pin_code, username})
      .then(res => {
        // Handle the Invite response here
        console.log('response is', res);
        this._setupLogin(res);
      }).catch(err => {
         // Handle Invite errors here
         console.log('error is 1', err);

         this.setState({
           error: err.message || 'Invalid Pin Code',
           loading: false,
         });
         return err;
      });
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
    //     this.setupLogin(res);
    //   }).catch(err => {
    //      // Handle Invite errors here
    //      console.log('error is 1', err);
    //
    //      this.setState({
    //        error: err.message || 'Invalid Pin Code',
    //        loading: false,
    //      });
    //      return err;
    //   });
  }

  _setupLogin = response => {
    console.log('this is 1', response);
    const { currentUser } = response.data;

    const { current_user } = this.props;

    console.log('current_user iz', current_user);

    deviceStorage.saveItem('api_key', currentUser.api_key)
      .then(res => {
        console.log('res iz???', res);
      }).catch(err => {
        console.log("deviceStorage.saveItem('api_key', current_user.api_key) ERROR", err);
      });


    this.setState({
      loading: false,
      message: '',
      // showRegisterScreen: false,
      ...response.data,
    });
  }

  render() {
    const { width } = Dimensions.get('window');

    const {
      error,
      loading,
      pin_code,
      username,
    } = this.state;

    const submitText = pin_code.length > 0 ?
      'Join an existing lab' :
      'Create a new lab';

    console.log('Registration Render state:', this.state);

    // const zests = error ? 'ENTER A USERNAME' : ''

    return (
      <View style={styles.container}>

        <View style={{
          flex: 1,
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: 40,
          // height: width/6,
          width: width,
          backgroundColor: 'steelblue',
        }}>
          <Icon
            name='infinity'
            size={120}
            color='white'
          />

          <Text style={{
            color: '#fff',
            fontSize: 30,
            fontWeight: "600"
          }}>Welcome to Infinitory</Text>

          <Text style={{
            color: '#fff',
            fontSize: 18,
            textAlign: 'center'
          }}>Organise your lab</Text>
        </View>


        <View style={styles.form}>

          <Input
            containerStyle={{
              justifyContent: 'space-around'
            }}
            leftIcon={
              <Icon
                name='user'
                size={24}
                color='grey'
              />
            }
            placeholder='Username'
            errorStyle={{ color: 'red' }}
            value={username}
            onChangeText={username => this.setState({
              username,
              error: '',
            })}
          />

          <Input
            containerStyle={{
              justifyContent: 'space-around'
            }}
            leftIcon={
              <Icon
                name='lock'
                size={24}
                color='grey'
              />
            }
            keyboardType={'numeric'}
            placeholder='Security code (optional)'
            errorStyle={{ color: 'red' }}
            value={pin_code}
            maxLength={5}
            onChangeText={pin_code => this.setState({
              pin_code,
              error: '',
            })}
          />

          <Text style={{
            ...styles.errorTextStyle
          }}>{error}</Text>

          {!loading ?
            <TouchableButton
              disabled={error !== ''}
              onPress={this._sendJoinOrCreateRequest}
              title={submitText}
            >
              {submitText}
            </TouchableButton>
            :
            <Loading />
          }
        </View>
      </View>
    );
  }
}

mapStateToProps = store => ({
  loading: store.users.loading,
  error: store.users.error,
  current_user: store.users.current_user
});

mapDispatchToProps = {
  joinCreateLab
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthLanding);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: 'white'
  },
  form: {
    width: '80%',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  hidden: {
    opacity: 0
  },
  errorTextStyle: {
    alignSelf: 'center',
    color: 'red',
    fontSize: 18,
  },
});
