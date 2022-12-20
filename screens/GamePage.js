import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import styled from 'styled-components/native'
//{statements.body} gets statements but loops insanely fasts 

export const GamePage = () => {
  const [statements, setStatement] = useState({})

    fetch('http://localhost:8080/random')
      .then(res => res.json())
      .then(json => setStatement(json))
  


  return (
    <View style={styles.container}>
      <Text>Gamepage </Text>  
      <StatusBar style="auto" />
    </View>
  );
}

const Text = styled.Text`
color: red;
font-size: 40px;
`
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d2d2d',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

