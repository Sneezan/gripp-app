import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { API_URL } from "../utils/utils.js";
import user from '../reducers/user.js';
import thoughts from '../reducers/thoughts'


export const StartPage = ({navigation}) => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.accessToken);
 
  useEffect(() => {
      if (!accessToken) {() => navigation.navigate('LogIn')}
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
        .then(data => {
            if(data.success) {
                dispatch(thoughts.actions.setItems(data.response));
                dispatch(thoughts.actions.setError(null));
            } else {
                dispatch(thoughts.actions.setItems([]));
                dispatch(thoughts.actions.setError(data.response));
            }
        })
}, []);

  return (
    <View style={styles.container}>
      <Text>Startpage</Text>
      <NativeButton onPress={() => navigation.navigate('GamePage')}><BtnTxt>start</BtnTxt></NativeButton>
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