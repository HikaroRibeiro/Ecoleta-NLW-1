import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/pages/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World! Buddy!</Text>
    </View>
  );
}

/*
Como se fosse uma classe o bloco de código abaixo.
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
