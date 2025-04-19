import { View, Text, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { CreateTripContext } from '../../context/CreateTripContext';
import { AI_PROMPT } from '../../constants/Options';
export default function GenerateTrip() {
    const { tripData, setTripData } = useContext(CreateTripContext);           
    useEffect(()=>{
        tripData&&GenerateAiTrip()
    },[tripData])
    
    const GenerateAiTrip = () => {
        const FINAL_PROMPT = AI_PROMPT
            .replace('{location}', tripData?.locationInfo?.name)
            .replace('{totalDays}', tripData.totalNoOfDays)
            .replace('{totalNight}', tripData.totalNoOfDays - 1)
            .replace('{traveler}', tripData.traveler?.title)
            .replace('{budget}', tripData.budget)
            .replace('{totalDays}', tripData.totalNoOfDays)
            .replace('{totalNight}', tripData.totalNoOfDays - 1)
            console.log(FINAL_PROMPT)


    }
  return (
    <View style={{
        padding:25,
        paddingTop:75,
        backgroundColor:'#fff',
        height:'100%'
    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:30,
        textAlign:'center'
      }}>Please Wait...</Text>
       <Text style={{
        fontFamily:'outfit-medium',
        fontSize:18,
        textAlign:'center',
        marginTop:40
      }}>We are working to generate your dream trip</Text>
       <Image source = {require('./../../assets/images/plane.gif')}
      style={{
        width:"100%",
        objectFit:'contain',
        height:200
      }}/>
       <Text style={{
        fontFamily:'outfit',
        color:'#808080',
        fontSize:18,
        textAlign:'center'
      }}>Do not Go Back</Text>
    </View>
  )
}
