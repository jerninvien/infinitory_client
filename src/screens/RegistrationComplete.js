import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import IconFeather from 'react-native-vector-icons/Feather';
import { Button } from 'react-native-elements';

export class RegistrationComplete extends Component {

  componentDidMount = () => {
    console.log('RegistrationComplete.js CMD');
  }

  _goToApp = () => {
    this.props.navigation.navigate('App');
  }


  render() {
    const width = Dimensions.get('window').width;

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
          <IconFeather
            name='thumbs-up'
            size={100}
            color='white'
            style={{
              borderRadius: 80,
              borderWidth: 3,
              borderColor: 'white',
              padding: 30
            }}
          />

          <Text style={{
            color: '#fff',
            fontSize: 30,
            fontWeight: "600"
          }}>{`You're all set!`}</Text>

          <Text style={{
            color: '#fff',
            fontSize: 18,
            textAlign: 'center'
          }}>Thanks for registering your account</Text>

          <Button
            // disabled={formInvalid}
            title='GET STARTED'
            onPress={this._goToApp}
            // onPress={() => alert('Implement Login')}
            buttonStyle={{
              backgroundColor: 'white',
              width: Dimensions.get('window').width * 0.7,
              height: 50,
              borderColor: 'transparent',
              borderWidth: 0,
              borderRadius: 25,
            }}
            titleStyle={{
              color: 'rgb(99, 99, 99)',
              fontSize: 14,
              fontWeight: '700'
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: 'white'
  },
});
