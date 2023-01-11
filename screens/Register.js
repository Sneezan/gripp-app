
import React, {useEffect, useState, createRef} from "react";
import { useDispatch, useSelector, batch } from "react-redux"
//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import { API_URL } from "../utils/utils.js";
import user from "../reducers/user.js";
import { Feather } from '@expo/vector-icons';
import { Text, Header, HeaderComponent, Requirement } from "../components/TextStyles.js";

import { ActionBtn, ActionBtnTxt, AlternativeBtn, AlternativeBtnTxt, ButtonWrap } from "../components/ButtonStyles.js";
import { MaterialIcons } from '@expo/vector-icons'; 
import  { Octicons }  from '@expo/vector-icons'
import { LogInput } from "../components/InputStyles.js";

export const Register = ({navigation}) => {
  const [hidePassword, setHidePassword] = useState(true)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.accessToken);
  const error = useSelector((store) => store.user.error)
  const showPassword = () => {
    setHidePassword(!hidePassword)
  }

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
          body: JSON.stringify({username: username, email: email, password: password })
      }
      fetch(API_URL('register'), options)
          .then(response => response.json())
          .then(data => {
              if(data.success) {
             //  alert("Registered! ");
                  batch(()=> {
                      dispatch(user.actions.setUsername(data.response.username));
                      dispatch(user.actions.setEmail(data.response.email));
                      dispatch(user.actions.setUserId(data.response.id))
                      dispatch(user.actions.setAccessToken(data.response.accessToken));
                      dispatch(user.actions.setError(null));
                  });
              } else {
                  //alert("error, could not register - the email already exists ");
                  batch (() => {
                      dispatch(user.actions.setUsername(null));
                      dispatch(user.actions.setEmail(null));
                      dispatch(user.actions.setUserId(null));
                      dispatch(user.actions.setAccessToken(null));
                      dispatch(user.actions.setError(data.response));
                  });
              }
          })
  }


  return (
    <KeyboardAvoidingView
    behavior="padding"
    style={styles.container}
  >
    <ScrollView keyboardShouldPersistTaps="handled">
    <View style={styles.container} onPress={(onFormSubmit)}>
      <HeaderComponent>
         <Header>Not part of the club?</Header> 
         <Text> CREATE AN ACCOUNT </Text> 
      </HeaderComponent>
    <View style={styles.SectionStyle} keyboardAppearance='dark'>
    {error && (<Requirement>{error}</Requirement>)}
    <Feather name="user" size={24} style={styles.userIcon} />
               <LogInput 
                placeholder="What shall we call you?" 
                autoCapitalize="none"
                value={username} 
                onChangeText={setUsername}
                placeholderTextColor="#F4F2F2" 
                returnKeyType="next"
                onSubmitEditing={() => passwordInputRef.current &&  passwordInputRef.current.focus()}
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
                /> 
               
               <MaterialIcons name="alternate-email" size={24} style={styles.emailIcon} />
              <LogInput 
                placeholder="Enter email" 
                autoCapitalize="none"
                value={email} 
                onChangeText={setEmail}
                placeholderTextColor="#F4F2F2" 
                returnKeyType="next"
                onSubmitEditing={() => passwordInputRef.current &&  passwordInputRef.current.focus()}
                underlineColorAndroid="#f000"
                blurOnSubmit={false}/> 
    <Feather name="lock" size={24} color="black" style={styles.lockIcon} />
              <LogInput 
                placeholder="Select password" 
                ref={passwordInputRef}
                value={password} 
                blurOnSubmit={false}
                placeholderTextColor="#F4F2F2" 
                secureTextEntry={hidePassword === true ? true : false}
                onChangeText={setPassword}
                underlineColorAndroid="#f000"
                returnKeyType="next"/>          
    </View>
    {password.length > 7 ? (<Requirement>✓</Requirement>) : (<Requirement>password required minimum of 8 characters</Requirement>)}
               <TouchableOpacity onPress={showPassword}>
                  <Octicons
                    name={hidePassword === true ? 'eye-closed' : 'eye'}
                    size={20}
                    style={styles.eyeIcon}
                  />
                </TouchableOpacity>
            <ButtonWrap> 
            <ActionBtn 
             onPress={(onFormSubmit)}
             type="submit"><ActionBtnTxt>join now</ActionBtnTxt></ActionBtn>
             <AlternativeBtn 
             onPress={() => navigation.navigate('Log in')}
             type="submit"><AlternativeBtnTxt>Log in here</AlternativeBtnTxt></AlternativeBtn>
   </ButtonWrap>    

    </View>
    </ScrollView>
     <View style={{ height:60 }} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#BE284C',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    lockIcon: {
      color: 'white',
      zIndex: 1,
      position: 'absolute',
      left: 20,
      bottom: 20,
    },
    emailIcon: {
      color: 'white',
      zIndex: 1,
      position: 'absolute',
      left: 20,
      bottom: 75,
    },
    userIcon: {
      color: 'white',
      zIndex: 1,
      position: 'absolute',
      left: 20,
      bottom: 135,
    },
    eyeIcon: {
      color: 'white',
      zIndex: 1,
      position: 'absolute',
      left: 135,
      bottom: 35,
    },
    doneIcon: {
      color: 'white',
      zIndex: 1,

    },
  });
  
