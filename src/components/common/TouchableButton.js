import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const TouchableButton = ({
  children,
  disabled,
  externalStyle,
  onPress,
}) => {
  const { button, btDisabled, text } = styles;

  return (
    <View style={[
      styles.container,
      disabled && btDisabled
    ]}>
      <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        style={[button, externalStyle.button]}
      >
        <Text style={text}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

TouchableButton.defaultProps = {
  externalStyle: {
    text: {},
    button: {},
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  text: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    paddingTop: 10,
    paddingBottom: 10
  },
  button: {
    flex: 1,
    backgroundColor: "skyblue",
    borderRadius: 15,
    marginTop: 5,
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 5,
  },
  btDisabled: {
    opacity: 0.7
  }
});

export { TouchableButton };
