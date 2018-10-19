import React, { Component } from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  // StatusBar,
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { connect } from 'react-redux';
import { getLab, setCurrentUserInStore } from 'app/src/reduxModules/users';
import { setAxiosTokenHeader } from 'app/src/services/api';

class LoadingScreen extends Component {

  componentDidMount = () => {
    console.log('AuthLoadingScreen.js CMD');
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const currentUser = await AsyncStorage.getItem('currentUser');

    if (currentUser && (Object.keys(currentUser).length !== 0)) {
      const user = JSON.parse(currentUser);
      this.props.setCurrentUserInStore(user)
        .then(() => setAxiosTokenHeader(user.api_key))
        .then(() => this.props.navigation.navigate('App'))
        .catch(e => console.log('What is this error', e));
    } else {
      console.log('_bootstrapAsync missing currentUser');
      this.props.navigation.navigate('Auth');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text
          onPress={() => console.log('TEXTPRESS', Math.round(Math.random()*1000))}
          style={{
            textAlign: 'center',
            fontSize: 40,
            marginVertical: 30
          }}
        >
          INFINITORY
        </Text>
        <ActivityIndicator />
      </View>
    );
  }
}

mapStateToProps = store => ({
  apiKey: store.users.apiKey
})

mapDispatchToProps = {
  getLab,
  setCurrentUserInStore
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadingScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
