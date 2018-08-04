import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
 } from 'react-native';

const Loading = ({
  animating,
  color,
  size,
}) => {
  return (
    <View style={styles.spinnerContainer}>
      <ActivityIndicator
        animating={animating}
        color={color}
        size={size}
      />
    </View>
  );
};

Loading.defaultProps = {
  animation: false,
  color: '#0000ff',
  size: 'large',
};

const styles = StyleSheet.create({
  spinnerContainer: {
    flex: 1,
    marginTop: 12,
    marginBottom: 12,

    justifyContent: 'center',
    alignContent: 'center',
  }
});

export { Loading };
