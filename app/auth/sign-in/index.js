import { StyleSheet, View, Text, TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from './../../../constants/Colors';
import { useRouter } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './../../../configs/FirebaseConfig'; 


export default function SignIn() {
  const router=useRouter();
  const navigation = useNavigation();


   const [email, setEmail]=useState();
     const [password, setPassword]=useState();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })

  }, [])
  
  const onSignIn=()=>{

    if(!email && !password){
          ToastAndroid.show('Lütfen tüm alanları doldurunuz', ToastAndroid.LONG);
          return;
         }

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    router.replace('/mytrip')
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage, error.Code)
    if(errorCode=='auth/invalid-credential')
    {
      ToastAndroid.show("Invalid credentials", ToastAndroid.LONG )
    }

  });

  }

  return (
    <View style={{
      padding: 25,
      paddingTop: 40,
      backgroundColor: Colors.WHITE,
      height: '100%'
    }}>
      <TouchableOpacity onPress={()=>router.back()}>
      <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={{
         flexDirection: 'row',
        fontFamily: 'outfit',
        fontSize: 30,
        color: Colors.GRAY,
        marginTop: 70
      }}> Welcome Back     
      
      <Ionicons name="happy-outline" size={30} color="gray" />
       </Text>




      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 30,
        marginTop:60
      }}> SIGN IN </Text>
      
     

      <View style={{
        marginTop: 20
      }}>
        <Text
          style={{
            fontFamily: 'outfit'
          }}
        >E-mail:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value)=>setEmail(value)}
          placeholder='Enter email.' />

      </View>

      <View style={{
        marginTop: 20
      }}>
        <Text
          style={{
            fontFamily: 'outfit'
          }}
        >Şifre:</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          onChangeText={(value)=>setPassword(value)}
          placeholder='******' />

      </View>


      <TouchableOpacity onPress={onSignIn} style={{
        padding: 20,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 15,
        marginTop: 80
      }}>
        <Text style={{
          color: Colors.WHITE,
          textAlign: 'center',

        }}>
          Sign in
        </Text>

      </TouchableOpacity>

      <TouchableOpacity
       onPress={()=>router.replace('auth/sign-up')}
      style={{
        padding: 20,
        backgroundColor: Colors.WHITE,
        borderRadius: 15,
        marginTop: 20,
        borderWidth:1
       
      }}>
        <Text style={{
          color: Colors.PRIMARY,
          textAlign: 'center',
          
        }}>
          Create Account
        </Text>

      </TouchableOpacity>







    </View>
  )
}



const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.GRAY,
    fontFamily: 'outfit'

  }



})
