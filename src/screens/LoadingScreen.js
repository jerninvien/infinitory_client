import React, { Component } from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  // StatusBar,
  StyleSheet,
  View,
  Text,
} from 'react-native';

export class LoadingScreen extends Component {

  componentDidMount = () => {
    console.log('AuthLoadingScreen.js CMD');
    this._bootstrapAsync();
  }

  // Fetch the token from AsyncStorage then navigate accordingly
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('api_key');

    console.log('userToken', userToken);

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <Text
          onPress={() => console.log('TEXTPRESS', Math.round(Math.random()*1000))}
          style={{
            textAlign: 'center',
            fontSize: 40,
            marginTop: 30
          }}
        >
          INFINITORY
        </Text>
        <ActivityIndicator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
