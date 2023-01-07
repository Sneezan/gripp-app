import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Image} from 'react-native';
import styled from 'styled-components/native';
import { API_URL } from "../utils/utils.js";
import user from '../reducers/user.js';
import { formatRelative } from 'date-fns';

export const StartPage = ({navigation}) => {
  const [profile, setProfile] = useState([""]);
  const dispatch = useDispatch();
  
  const accessToken = useSelector((store) => store.user.accessToken);
  const userName = useSelector((store) => store.user.username)
  const userCreated = useSelector((store) => store.user.userCreatedAt)

  useEffect(() => {
      if (!accessToken) {navigation.navigate('Log in')}
  }, [accessToken])

  useEffect(() => {
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": accessToken
        }
    } 
    fetch(API_URL('profile'), options)
        .then(res => res.json())
        .then((response) => {
          setProfile(response)
        })
}, []);



  return (
    <View style={styles.container}>

      <ProfileCard> 
      <ImageWrap>
      <Image
        style={{ width: 150, height: 150 }}
        source={require('../assets/profileimg.svg')}
      />
       </ImageWrap>
       <Line />
      <ProfileWrap>
      <Text> Welcome, </Text>
      <Text> {userName} </Text>
      </ProfileWrap>
      <Member> Member since {formatRelative(new Date(userCreated), new Date())} </Member>
      </ProfileCard> 


      
      <NativeButton onPress={() => navigation.navigate('GamePage')}><BtnTxt>start</BtnTxt></NativeButton>
      <NativeButton onPress={() => {navigation.navigate('Log in'); dispatch(user.actions.setAccessToken(null));}}><BtnTxt>sign out</BtnTxt></NativeButton>
      <StatusBar style="auto" />
    </View>
  );
}



const Text = styled.Text`
color: Grey;
font-size: 32px;
text-transform: capitalize;
`
const Member = styled.Text`
position: absolute;
bottom: -30px;
font-size: 18px;
text-transform: uppercase;

`

const ProfileCard = styled.View`
flex: 0.23;
display: flex;
color: white;
font-size: 30px;
width: 400px;
`
const ProfileWrap = styled.View`
position: absolute;
left: 150px;
top: 60px;
`
const ImageWrap = styled.View`
position: absolute;
left: 0;
top: 10px;
`
const Line = styled.View`
border: 1px solid #CA0C0C;
bottom: 0;
width: 400px;
position: absolute;

`
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F4F2F2',
      alignItems: 'center',
    },
  });
  
const NativeButton = styled.TouchableOpacity`
background-color: #CA0C0C;
border-radius: 10px;
width: 110px;
text-align: center;
height: 40px;
margin-top: 60px;
`

const BtnTxt = styled.Text`
font-size: 30px;
text-align: center;
`