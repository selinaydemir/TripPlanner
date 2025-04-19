import { View, Text, FlatList } from 'react-native'
import React, { useContext, useEffect, useState  } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from './../../constants/Colors'
import { SelectTravelesList } from '../../constants/Options'
import OptionCard from '../../components/CreateTrip/OptionCard';
import { TouchableOpacity } from 'react-native'
import { CreateTripContext } from '../../context/CreateTripContext';
import { Link } from 'expo-router';
export default function SelectTraveler() {
  
  
  const navigation=useNavigation(); 
  const [selectedTraveler, setSelectedTraveler] = useState();
  const {tripData,setTripData} = useContext(CreateTripContext);



  useEffect(()=>{
    navigation.setOptions({
      headerShown:true,
      headerTransparent:true,
     headerTitle:'',

    
    })

  },[])

  useEffect(()=>{
    setTripData({...tripData,
      traveler:selectedTraveler
    })
  },[selectedTraveler]);
  
  useEffect(()=>{
    console.log(tripData);
  },[tripData])

  
  return (
    <View style={{
      padding:25,
      paddingTop:35,
      backgroundColor:Colors.WHITE,
      height:'100%' }} >
    
      <Text style={{
       fontSize:35,
       fontFamily: 'outfit-bold',
       marginTop:4

      }}
       
      > Who's Travelling ? </Text>

      <View style={{
       
       marginTop:10

      }}>
      <Text style={{
         fontSize:29,
         fontFamily: 'outfit-bold',
         
      }}>Choose your travellers</Text>

      <FlatList 
          data={SelectTravelesList}
          renderItem={({item,index})=>(
              <TouchableOpacity 
              onPress={()=>setSelectedTraveler(item)}
              style={{
                marginVertical:10
              }}>
                    <OptionCard option={item} selectedOption={selectedTraveler}/>
                  </TouchableOpacity>
          )}/>



      </View>
      
      <TouchableOpacity 
     
      style={{
        padding:10,
        backgroundColor:'#000',
        borderRadius:15,
        marginTop:20
      }}>
        <Link href={'/create-trip/select-dates'}
      style={{
        width:'100%',
        textAlign:'center'
      }}
      >
        <Text style={{
          color:'#fff',
          textAlign:'center',
          fontFamily:'outfit-medium',
          fontSize:18  
        }}>
          Continue
        </Text>
        </Link>
      </TouchableOpacity>
    
    </View>
  )
}