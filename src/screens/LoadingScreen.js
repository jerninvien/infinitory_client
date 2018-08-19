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
import { setAxiosTokenHeader } from 'app/src/services/api';

class LoadingScreen extends Component {

  componentDidMount = () => {
    console.log('AuthLoadingScreen.js CMD');
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const apiKey = await AsyncStorage.getItem('apiKey');

    setTimeout(() => {
      if (apiKey) {
        setAxiosTokenHeader(apiKey);
        this.props.navigation.navigate('App');
      } else {
        this.props.navigation.navigate('Auth');
      }
    }, 2000);
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

export default connect(
  mapStateToProps
)(LoadingScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
