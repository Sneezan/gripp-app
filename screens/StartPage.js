import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import styled from 'styled-components/native'

export const StartPage = () => {
  return (
    <View style={styles.container}>
      <Text>Startpage</Text>
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
  
const NativeButton = styled.TouchableOpacity`
background-color: white;
border-radius: 10px;
width: 110px;
text-align: center;
height: 40px;
margin: 10px;
`

const BtnTxt = styled.Text`
font-size: 30px;
text-align: center;
`