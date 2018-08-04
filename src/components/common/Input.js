import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import IconFeather from 'react-native-vector-icons/Feather';

const Input = ({
  disabled,
  externalStyle,
  iconName,
  label,
  maxLength,
  multiline,
  numberOfLines,
  onChangeText,
  placeholder,
  secureTextEntry,
  value,
}) => {
  const mergedStyles = { ...styles, ...externalStyle };

  const {
    inputStyle,
    labelStyle,
    containerStyle,
    section
  } = styles;

  return (
    <View style={section}>
      <View style={containerStyle}>
        {label &&
          <Text style={labelStyle}>{label}</Text>
        }
        <View style={inputStyle}>
          <TextInput
            autoCorrect={false}
            disabled={disabled}
            maxLength={maxLength}
            multiline={multiline}
            numberOfLines={numberOfLines}
            onChangeText={onChangeText}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            style={{...inputStyle}}
            value={value}
          />

          <View style={{ alignSelf: 'center'}}>
            <IconFeather
              name={iconName}
              size={25}
              color='steelblue'
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: '#ddd',
    marginBottom: 20,
    marginTop: 20,
    height: 50,

  },
  containerStyle: {
    flex: 1,
  },
  labelStyle: {
    fontSize: 10,
    color: 'steelblue',
    textTransform: 'uppercase',
    fontWeight: '700',
    width: '100%',
  },
  inputStyle: {
    color: '#999',
    fontSize: 18,
    flex: 1,
    flexDirection: 'row',
  }
});

export { Input };
