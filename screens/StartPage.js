import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { API_URL } from "../utils/utils.js";
import user from '../reducers/user.js';
import { ProfileCard } from "../components/ProfileCard.js";
import { Octicons } from '@expo/vector-icons'; 
import { ActionBtn, ActionBtnTxt } from "../components/ButtonStyles.js";

export const StartPage = ({navigation}) => {
  const [profile, setProfile] = useState([""]);
  const dispatch = useDispatch();
  
  const accessToken = useSelector((store) => store.user.accessToken);
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
      <ProfileCard/> 
      <ButtonWrap>
      <StartBtn onPress={() => navigation.navigate('GamePage')}><BtnTxt>start the game</BtnTxt></StartBtn>
      </ButtonWrap>
      <SignOutBtn onPress={() => {navigation.navigate('Log in'); dispatch(user.actions.setAccessToken(null));}}> 
              <Octicons name="sign-out" size={30} color="white"></Octicons> 
      </SignOutBtn>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F4F2F2',
    },
  });
  
const StartBtn = styled(ActionBtn)`
background-color: #830808;
place-items: center;

`
const BtnTxt = styled(ActionBtnTxt)`
text-align: center;
color: #fff;
`
const ButtonWrap = styled.View`
      align-items: center;
      top: -40%;
`
const SignOutBtn = styled.TouchableOpacity`
position: absolute;
right: 10%;
top: 5%;
`