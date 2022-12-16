import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import styled from 'styled-components/native'

export const Splash = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>gripp.</Text>
      <NativeButton onPress={() => navigation.navigate('Log in')}><BtnTxt>Go to</BtnTxt></NativeButton>
      <StatusBar style="auto" />
    </View>
  );
}

const Text = styled.Text`
color: #fff;
font-size: 60px;
font-family: 'Times New Roman';
font-style: italic;
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