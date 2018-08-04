import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextLink } from 'app/src/components/common';

export class AuthLanding extends Component {
  // static navigationOptions = {
  //   title: 'Homez',
  // };

  state = {
  }

  componentDidMount = () => console.log('AuthLanding.js CMD')

  _goToHere = path => () => {
    this.props.navigation.navigate(path);
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
          <Icon
            name='book'
            size={120}
            color='white'
          />

          <Text style={{
            color: '#fff',
            fontSize: 30,
            fontWeight: "600"
          }}>Welcome to Infini</Text>

          <Text style={{
            color: '#fff',
            fontSize: 18,
            textAlign: 'center'
          }}>Organising your side jobs has never been that easy!</Text>
        </View>

        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Button
            title="Continue with Facebook"
            // titleStyle={{ fontWeight: "700" }}
            onPress={() => alert('Implement FB login')}
            icon={
              <Icon
                name='facebook'
                size={20}
                color='white'
              />
            }
            buttonStyle={{
              backgroundColor: "rgba(62, 90,146, 1)",
              width: 250,
              height: 50,
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 25
            }}
            containerStyle={{ marginTop: 20 }}
          />

          <Button
            title=" Continue with Email  "
            titleStyle={{
              color: 'rgba(99, 99, 99, 1)',
              fontWeight: '600'
            }}
            onPress={this._goToHere('SignIn')}
            icon={
              <Icon
                name='envelope'
                size={20}
                color='rgba(99, 99, 99, 1)'
              />
            }
            buttonStyle={{
              backgroundColor: "white",
              width: 250,
              height: 50,
              borderColor: "rgba(99, 99, 99, 1)",
              borderWidth: 1,
              borderRadius: 25
            }}
            containerStyle={{ marginTop: 20 }}
          />

          <Text style={{
            color: "rgb(99, 99, 99)",
            fontSize: 16,
            textAlign: 'center',
            marginTop: 20,
            fontWeight: "600"
          }}>
            <Text>{`Not yet a member? `}</Text>
            <Text
                style={{color: 'rgb(197, 120, 29)'}}
                onPress={this._goToHere('Registration')}>
                {`Register`}
             </Text>
          </Text>

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
  registerText: {
    color: 'steelblue',
    fontSize: 18,
    fontWeight: '700',
  },
});
