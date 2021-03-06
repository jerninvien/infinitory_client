import React, { Component } from 'react';
import {
  AsyncStorage,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { connect } from 'react-redux';
import {
  getLab,
  joinCreateLab,
  setCurrentUserInStore
} from 'app/src/reduxModules/users';
import { setAxiosTokenHeader } from 'app/src/services/api';

import Icon from 'react-native-vector-icons/Entypo';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

import {
  // Input,
  Loading,
  TextLink,
  TouchableButton,
} from 'app/src/components/common';

class AuthLanding extends Component {
  state = {
    invite_code: '',
    name: '',
  }

  // componentDidMount = async () => {
  //   if (this.props.currentUser !== null) {
  //     console.log('AuthLanding.js CMD before', this.props);
  //     await AsyncStorage.clear();
  //     console.log('AuthLanding.js CMD after', this.props);
  //     this.props.setCurrentUserInStore(null);
  //   }
  // }

  // _goToHere = path => () => {
  //   this.props.navigation.navigate(path);
  // }

  _sendJoinOrCreateRequest = () => {
    const { invite_code, name } = this.state;

    if (name.length == 0) {
      this.setState({ error: 'Enter a Username please' });
      return;
    }

    if (invite_code.length > 0 && invite_code.length !== 4) {
      this.setState({ error: 'Pin code must be 5 digits' });
      return;
    }

    const endpoint = invite_code.length > 0 ? 'users' : 'lab';

    // NOTE Post to HTTPS in production
    this.props.joinCreateLab({endpoint, invite_code, name})
      .then(() => this._setupLogin())
      .catch(err => console.log('joinCreateLab error:', err));
  }

  _setupLogin = () => {
    const { currentUser } = this.props;

    AsyncStorage.setItem('currentUser', JSON.stringify(currentUser))
      .then(() => {
        console.log('setItem worked??', currentUser);
        setAxiosTokenHeader(currentUser.api_key).then(token => {
          console.log('setAxiosTokenHeader worked??', token);
          this.props.navigation.navigate('App')
        }).catch(err => console.log("_setupLogin ERROR 2", err));
      }).catch(err => console.log("_setupLogin ERROR 1", err));
  }

  render() {
    const { invite_code, name } = this.state;
    const { error, loading } = this.props;
    const { width } = Dimensions.get('window');

    const submitText = invite_code.length > 0 ?
      'Join an existing lab' :
      'Create a new lab';

    // console.log('error iz', error);

    // console.log('Registration Render state:', this.state);
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
          }}>Infinitory</Text>

          <Text style={{
            color: '#fff',
            fontSize: 18,
            textAlign: 'center'
          }}>SIMPLIFY YOUR LAB</Text>
        </View>

        <View style={styles.form}>
          <Input
            containerStyle={{justifyContent: 'space-around'}}
            leftIcon={
              <Icon
                name='user'
                size={24}
                color='grey'
              />
            }
            placeholder='Username'
            errorStyle={{ color: 'red' }}
            value={name}
            onChangeText={name => this.setState({ name, error: '' })}
          />

          <Input
            containerStyle={{justifyContent: 'space-around'}}
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
            value={invite_code}
            maxLength={4}
            onChangeText={invite_code => this.setState({ invite_code, error: '' })}
          />

          <Text style={{...styles.errorTextStyle}}>{error}</Text>

          {!loading ?
            <TouchableButton
              // disabled={!error}
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
  currentUser: store.users.currentUser
});

mapDispatchToProps = {
  joinCreateLab,
  getLab,
  setCurrentUserInStore
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
