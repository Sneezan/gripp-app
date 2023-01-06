import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,  ImageBackground } from 'react-native';
import styled from 'styled-components/native'
import { ActionBtn, ActionBtnTxt, AlternativeBtn, AlternativeBtnTxt } from '../components/ButtonStyles';

export const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground resizeMode={'cover'} // or cover
          style={styles.image} source={require('../assets/SpaceBanner-2.png')}>
   <View style={styles.manipulate}>
      <View style={styles.other}>
           <ActionBtn onPress={() => navigation.navigate('Log in')}>
             <ActionBtnTxt>Log in</ActionBtnTxt>
          </ActionBtn>
          <AlternativeBtn onPress={() => navigation.navigate('Register')}>
             <AlternativeBtnTxt>Sign Up</AlternativeBtnTxt>
          </AlternativeBtn>
      </View>
   </View>

      <StatusBar style="auto" />
     </ImageBackground>
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
  other:{
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  manipulate:{
    position: 'absolute',
    bottom: 200,
    width: 300,
    left: 100,
    
  },
   image: {
        flex: 1,
        resizeMode: 'cover',
        width: "100%",
        flexDirection: 'column'

  }
});

const NativeButton = styled.TouchableOpacity`
background-color: none;
border-radius: 10px;
width: 110px;
text-align: center;
height: 40px;
margin: 10px;
border: 2px solid white;
`

const BtnTxt = styled.Text`
font-size: 30px;
text-align: center;
color: white;
`