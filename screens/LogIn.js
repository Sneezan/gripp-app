
import React, {useEffect, useState, createRef} from "react";
import { useDispatch, useSelector, batch } from "react-redux"
//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native'
import { API_URL } from "../utils/utils.js";
import user from "../reducers/user.js";

export const LogIn = ({navigation}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.accessToken);

  
  useEffect(() => {
      if (accessToken) {() => navigate('StartPage')}
  }, [accessToken])

  const passwordInputRef = createRef();

  const onFormSubmit =(event) => {
      event.preventDefault();
      const options = {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({username: username, password: password })
      }
      fetch(API_URL('login'), options)
          .then(response => response.json())
          .then(data => {
              if(data.success) {
                alert("Logged IN! ");
                  batch(()=> {
                      dispatch(user.actions.setUsername(data.response.username));
                      dispatch(user.actions.setUserId(data.response.id))
                      dispatch(user.actions.setAccessToken(data.response.accessToken));
                      dispatch(user.actions.setError(null));
                  });
              } else {
                  alert("error, could not find user - make sure you've registered and that the password is correct ");
                  batch (() => {
                      dispatch(user.actions.setUsername(null));
                      dispatch(user.actions.setUserId(null))
                      dispatch(user.actions.setAccessToken(null));
                      dispatch(user.actions.setError(data.response));
                  });
              }
          })
  }


  return (
    <View style={styles.container}>
    <View style={styles.SectionStyle}>
              <TextInput onSubmit={onFormSubmit}
                placeholder="Enter username" 
                autoCapitalize="none"
                value={username} 
                onChangeText={setUsername}
                returnKeyType="next"
                onSubmitEditing={() => passwordInputRef.current &&  passwordInputRef.current.focus()}
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              /> 

              <TextInput onSubmit={onFormSubmit}
                placeholder="Enter Password" 
                ref={passwordInputRef}
                value={password} 
                blurOnSubmit={false}
                secureTextEntry={true}
                onChangeText={setPassword}
                underlineColorAndroid="#f000"
                returnKeyType="next" 
              />
            </View>

            <NativeButton onPress={onFormSubmit}><BtnTxt>Logins</BtnTxt></NativeButton>

            <Text
              style={styles.registerTextStyle}
              onPress={() => navigation.navigate('Register')}>
              { "register" ? "" : "not a member? register here!" }
            </Text>
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
      backgroundColor: 'white',
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