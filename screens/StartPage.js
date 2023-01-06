import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { API_URL } from "../utils/utils.js";
import user from '../reducers/user.js';

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
      <Text> {userName} </Text>
      <Text> {userCreated} </Text>
      <Text>Startpage</Text>
      <NativeButton onPress={() => navigation.navigate('GamePage')}><BtnTxt>start</BtnTxt></NativeButton>
      <NativeButton onPress={() => {navigation.navigate('Log in'); dispatch(user.actions.setAccessToken(null));}}><BtnTxt>sign out</BtnTxt></NativeButton>
      <StatusBar style="auto" />
    </View>
  );
}



const Text = styled.Text`
color: white;
font-size: 30px;
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