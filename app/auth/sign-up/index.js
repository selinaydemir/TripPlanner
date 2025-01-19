import { StyleSheet, Text, View, TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from './../../../constants/Colors';
import { useRouter } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { auth } from './../../../configs/FirebaseConfig';

export default function SignUp() {
  const navigation = useNavigation();
  const router = useRouter();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [fullName, setFullName] = useState();


  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })

  }, []);

  const onCreateAccount = () => {
    if (!email && !password && !fullName) {
      ToastAndroid.show('Lütfen tüm alanları doldurunuz', ToastAndroid.LONG);
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        router.replace('/mytrip')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
        // ..
      });

  }
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 50,
        backgroundColor: Colors.WHITE,
        height: '100%'


      }}>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text
        style={{
          fontFamily: 'outfit-bold',
          fontSize: 30,
          marginTop: 30,
        }}
      >Yeni Hesap Oluştur</Text>

      <View style={{
        marginTop: 50
      }}>
        <Text
          style={{
            fontFamily: 'outfit'
          }}
        >Kullanıcı Adı:</Text>
        <TextInput
          style={styles.input}
          placeholder='Kullanıcı adınızı girin'
          onChangeText={(value) => setFullName(value)}
        />

      </View>

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
          onChangeText={(value) => setEmail(value)}
          placeholder='E-mail adresinizi girin ' />

      </View>

      <View style={{
        marginTop: 20
      }}>
        <Text
          style={{
            fontFamily: 'outfit'
          }}
        > Şifre:</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          onChangeText={(value) => setPassword(value)}
          placeholder='Şifrenizi Giriniz' />

      </View>
      <TouchableOpacity onPress={onCreateAccount}
        style={{
          padding: 20,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          marginTop: 50
        }}>
        <Text style={{
          color: Colors.WHITE,
          textAlign: 'center',

        }}>
          Yeni Hesap Oluştur
        </Text>

      </TouchableOpacity>

      <TouchableOpacity
        style={{
          padding: 20,
          backgroundColor: Colors.WHITE,
          borderRadius: 15,
          marginTop: 20,
          borderWidth: 1

        }}>
        <Text style={{
          color: Colors.PRIMARY,
          textAlign: 'center',


        }}>
          Giriş Yap
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