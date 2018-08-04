import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const ToggleButton = ({
  externalStyle,
  leftActive,
  onPress,
  text1,
  text2,
}) => {
  const { button, text } = styles;

  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'center',
      alignContent: 'center',
    }}>
      <TouchableOpacity
        disabled={leftActive}
        onPress={onPress}
        style={[
          button,
          externalStyle.button,
          styles.buttonLeft,
          !leftActive && styles.buttonInactive
        ]}
      >
        <Text style={text}>{text1}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        disabled={!leftActive}
        onPress={onPress}
        style={[
          button,
          externalStyle.button,
          styles.buttonRight,
          leftActive && styles.buttonInactive
        ]}
      >
        <Text style={text}>{text2}</Text>
      </TouchableOpacity>
    </View>
  );
};

ToggleButton.defaultProps = {
  externalStyle: {
    text: {},
    button: {},
  }
}

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    paddingTop: 10,
    paddingBottom: 10,
  },
  button: {
    flex: 1,
    backgroundColor: 'steelblue',
    borderRadius: 15,
    margin: 5,
  },
  buttonLeft: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  buttonRight: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  buttonInactive: {
    opacity: 0.7
  }
});

export { ToggleButton };
