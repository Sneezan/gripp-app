import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import styled from 'styled-components/native'

export const GamePage = () => {
  return (
    <View style={styles.container}>
      <Text>Gamepage</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const Text = styled.Text`
color: red;
font-size: 40px;
`


