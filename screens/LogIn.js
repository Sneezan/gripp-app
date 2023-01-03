
import React, {useEffect, useState, createRef} from "react";
import { useDispatch, useSelector, batch } from "react-redux"
//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import styled from 'styled-components/native'
import { API_URL } from "../utils/utils.js";
import user from "../reducers/user.js";

import { LogInput } from "../components/InputStyles.js";
import { BtnTxt, NativeBtn } from "../components/ButtonStyles.js";
import { withTheme } from "styled-components";

export const LogIn = ({navigation}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.accessToken);
  
  useEffect(() => {
      if (accessToken) {navigation.navigate('StartPage')}  // Auth Navigation Works!!
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
              //  alert("Logged IN! ");
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
    <View style={styles.container} onPress={(onFormSubmit)}>
      <HeaderComponent>
         <Header>Ready to get a <StyledText>gripp?</StyledText></Header> 
         <Text> LOG INTO YOUR ACCOUNT </Text> 
      </HeaderComponent>
    <View style={styles.SectionStyle} >
              <LogInput
                placeholder="USERNAME" 
                placeholderTextColor="#fff" 
                autoCapitalize="none"
                value={username} 
                onChangeText={setUsername}
                returnKeyType="next"
                onSubmitEditing={() => passwordInputRef.current &&  passwordInputRef.current.focus()}
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              /> 

              <LogInput 
                placeholder="PASSWORD" 
                placeholderTextColor="#fff" 
                ref={passwordInputRef}
                value={password} 
                blurOnSubmit={false}
                secureTextEntry={true}
                onChangeText={setPassword}
                underlineColorAndroid="#f000"
                returnKeyType="next" 
          
              />
            </View>

            <NativeBtn 
             onPress={(onFormSubmit)}
             type="submit"><BtnTxt>Log in</BtnTxt></NativeBtn>
             
             <Text 
             title="not a member? registre here!"
             onPress={() => navigation.navigate('Register')}>  not a member? register here! </Text> 
             
    </View>
  );
}


const Text = styled.Text`
color: white;
font-size: 20px; 
margin: 10px;
text-align: center;
`
const Header = styled.Text`
font-size: 36px;
`
const StyledText = styled.Text`
color: white; 
`

const HeaderComponent = styled.View`
text-align: center;
margin: 10px;
`
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#830808',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  

