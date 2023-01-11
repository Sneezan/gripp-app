import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,  ImageBackground } from 'react-native';
import styled from 'styled-components/native'
import { ActionBtn, ActionBtnTxt, AlternativeBtn, AlternativeBtnTxt } from '../components/ButtonStyles';
//../assets/TextureDark3.png source={require('')}


export const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground resizeMode={'cover'} source={require('../assets/front.png')}
          style={styles.image} >
            <View style={styles.textcontainer}> 
             <View style={styles.textmanipulate}> 
              <Text>Start</Text>
              <StyledText>or end</StyledText>
              <Text>conversation</Text>
             </View>
            </View> 
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
color: #F4F2F2;
font-size: 60px;
font-family: 'Times New Roman';
line-height: 55px;
`
const StyledText = styled.Text`
color: #F4F2F2;
font-size: 60px;
font-family: 'Times New Roman';
font-style: italic;
line-height: 55px;
`

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textcontainer:{
   marginTop: 250,
   paddingTop: 20,
   alignItems: 'center',
  },
  textmanipulate:{
    marginLeft: 30,
    width: 350,
  },
  other:{
    marginTop: 0,
  },
  manipulate:{
    alignItems: 'center',
    justifyContent: 'center',
    
  },
   image: {
        flex: 1,
        resizeMode: 'cover',
        width: "100%",
        flexDirection: 'column',

  }
});

const NativeButton = styled.TouchableOpacity`
background-color: none;
border-radius: 10px;
width: 110px;
text-align: center;
height: 40px;
margin: 10px;
border: 2px solid #F4F2F2;
`

const BtnTxt = styled.Text`
font-size: 30px;
text-align: center;
color: #F4F2F2;
`