import React from 'react';
import { View, Text, StyleSheet, ProgressBarAndroid } from 'react-native';

const UploadProgressBar = ({ progress }) => {
  return (
    <View style={styles.container}>
      <ProgressBarAndroid
        style={{width: 100, height: 100}}
        styleAttr="Horizontal"
        indeterminate={false}
        progress={progress / 100}
      />
      <Text>{progress}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
});

export default UploadProgressBar;