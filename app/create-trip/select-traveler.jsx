import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from './../../constants/Colors'
export default function SelectTraveler() {
  const navigation=useNavigation();
  



  useEffect(()=>{
    navigation.setOptions({
      headerShown:true,
      headerTransparent:true,
     headerTitle:'',

    
    })

  },[])
  
  return (
    <View style={{
      padding:25,
      paddingTop:75,
      backgroundColor:Colors.WHITE,
      height:'100%' }} >
    
      <Text style={{
       fontSize:35,
       fontFamily: 'outfit-bold',
       marginTop:20

      }}
       
      > Tatil Planında Kimler Var ? </Text>

      <View style={{
       
       marginTop:20

      }}>
      <Text style={{
         fontSize:23,
         fontFamily: 'outfit-bold',
         
      }}>seç</Text>
      </View>
    </View>
  )
}