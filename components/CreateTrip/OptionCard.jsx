import {Text, View } from 'react-native'
import React from 'react'
import { Colors } from './../../constants/Colors'

export default function OptionCard({option, selectedOption}) {
  return (
    <View style={[{
        padding:25,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor: '#D3D3D3',
        borderRadius:15
    },selectedOption?.id==option?.id&&{borderWidth:3} ] }>
      <View>
        <Text style={{
          fontSize:20,
          fontFamily:'outfit-bold'
        }}>{option?.title}</Text>
        <Text style={{
            fontSize:14,
            fontFamily:'outfit-bold',
            color:'#333eee'
        }}>{option.desc}</Text>
       
      </View>
      <Text style={{
        fontSize:35,


      }}>{option.icon}</Text>

    </View>
  )
}

