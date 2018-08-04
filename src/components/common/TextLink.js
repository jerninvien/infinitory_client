import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// Almost identical to Button component. Try wrapping Button here instead and passing in externalStyle object

const TextLink = ({
  onPress,
  children
}) => {
  const { button, text } = styles;
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity
        onPress={onPress}
        style={button}
      >
        <Text style={text}>
          {children}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    color: 'steelblue',
    fontSize: 18,
    fontWeight: '700',
    paddingBottom: 10,
    paddingTop: 10,
    // textDecorationLine: 'underline',
  },
  button: {
    marginTop: 5,
    marginBottom: 5,
  }
});

export { TextLink };
