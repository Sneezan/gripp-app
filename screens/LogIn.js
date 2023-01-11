
import React, {useEffect, useState, createRef} from "react";
import { useDispatch, useSelector, batch } from "react-redux"
//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableOpacity, KeyboardAvoidingView, Keyboard, ScrollView} from 'react-native';
import { API_URL } from "../utils/utils.js";
import user from "../reducers/user.js";''
import { LogInput } from "../components/InputStyles.js";
import { ActionBtn, ActionBtnTxt, AlternativeBtn, AlternativeBtnTxt, ButtonWrap } from "../components/ButtonStyles.js";
import { Text, Header, StyledText, HeaderComponent, Requirement } from "../components/TextStyles.js";
import  { Octicons }  from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 

export const LogIn = ({navigation}) => {
  const [hidePassword, setHidePassword] = useState(true)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.accessToken);
  const error = useSelector((store) => store.user.error)

  useEffect(() => {
      if (accessToken) {navigation.navigate('StartPage')}  // Auth Navigation Works!!
  }, [accessToken])
  
  const showPassword = () => {
    setHidePassword(!hidePassword)
  }

  const passwordInputRef = createRef();

  const onFormSubmit =(event) => {
      event.preventDefault();
      const options = {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({email: email, password: password })
      }
      fetch(API_URL('login'), options)
          .then(response => response.json())
          .then(data => {
              if(data.success) {
              //  alert("Logged IN! ");
                  batch(()=> {
                      dispatch(user.actions.setUsername(data.response.username));
                      dispatch(user.actions.setEmail(data.response.email));
                      dispatch(user.actions.setMember(data.response.userCreatedAt));
                      dispatch(user.actions.setUserId(data.response.id))
                      dispatch(user.actions.setAccessToken(data.response.accessToken));
                      dispatch(user.actions.setError(null));
                  });
              } else {
                  alert("error, could not find user - make sure you've registered and that the password is correct ");
                  batch (() => {
                      dispatch(user.actions.setUsername(null));
                      dispatch(user.actions.setEmail(null));
                      dispatch(user.actions.setMember(null));
                      dispatch(user.actions.setUserId(null))
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
         <Header>Ready to get a <StyledText>gripp?</StyledText></Header> 
         <Text> LOG INTO YOUR ACCOUNT </Text> 
      </HeaderComponent>
    <View style={styles.SectionStyle} >
              <LogInput
                placeholder="Enter email" 
                placeholderTextColor="#F4F2F2" 
                autoCapitalize="none"
                value={email} 
                onChangeText={setEmail}
                returnKeyType="next"
                onSubmitEditing={() => passwordInputRef.current &&  passwordInputRef.current.focus()}
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
                keyboardType='email-address'
                keyboardAppearance='dark'
              /> 
              <MaterialIcons name="alternate-email" size={24} style={styles.emailIcon} />
              <View style={{width:100}}>
              <LogInput 
                placeholder="Enter password" 
                placeholderTextColor="#F4F2F2" 
                autoCapitalize='none'
                ref={passwordInputRef}
                secureTextEntry={hidePassword === true ? true : false}
                value={password} 
                blurOnSubmit={false}
                onChangeText={setPassword}
                underlineColorAndroid="#f000"
                returnKeyType="next" 
                keyboardAppearance='dark'
                onPress={Keyboard.dismiss}
              /> 
                </View>
            
               <Feather name="lock" size={24} color="black" style={styles.lockIcon} />
               <TouchableOpacity onPress={showPassword}>
                  <Octicons
                    name={hidePassword === true ? 'eye-closed' : 'eye'}
                    size={20}
                    style={styles.eyeIcon}
                  />
                </TouchableOpacity>
            </View>
            {error && (<Requirement>{error}</Requirement>)} 
            <ButtonWrap>           
            <ActionBtn 
             onPress={(onFormSubmit)}
             type="submit"><ActionBtnTxt>get a gripp</ActionBtnTxt></ActionBtn>
             <AlternativeBtn 
             onPress={() => navigation.navigate('Register')}
             type="submit"><AlternativeBtnTxt>join here</AlternativeBtnTxt></AlternativeBtn>
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
      backgroundColor: '#7b1930',
      alignItems: 'center',
      justifyContent: 'center',
    },
    lockIcon: {
      color: '#F4F2F2',
      zIndex: 1,
      position: 'absolute',
      left: 20,
      bottom: 68,
    },
    emailIcon: {
      color: '#F4F2F2',
      zIndex: 1,
      position: 'absolute',
      left: 20,
      bottom: 125,
    },
    eyeIcon: {
      color: '#F4F2F2',
      zIndex: 1,
      position: 'absolute',
      right: 25,
      bottom: 20,
    },
    SectionStyle: {
      paddingTop: 5 + '%',
      paddingBottom: 50,
    }
  });
  

