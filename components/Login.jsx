import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Login() {
    const router = useRouter();
    return (
        <View>
            <Image source={require('./../assets/images/Loginn.png')}
                style={{
                    width: '100%',
                    height: 620,

                }}
            />
            <View style={styles.container}>
                <Text style={{
                    fontSize: 24,
                    fontFamily: 'outfit-bold',
                    textAlign: 'center',
                    marginTop: 15
                }}> Hayallerindeki tatil planını yaratmaya hazır mısın? </Text>


                <TouchableOpacity style={styles.button}
                    onPress={() => router.push('auth/sign-in')}>
                    <Ionicons name="rocket-outline" size={24} color="white" />
                    <Text style={{
                        color: Colors.WHITE,
                        textAlign: 'center',
                        fontFamily: 'outfit-bold',
                        fontSize: 17

                    }}>   HAYDİ BAŞLAYALIM   </Text>
                    <Ionicons name="rocket-outline" size={24} color="white" />

                </TouchableOpacity>


            </View>

        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        marginTop: -70,
        height: '100%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 27
    },
    button: {
        padding: 19,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 99,
        marginTop: '5%',
        flexDirection: 'row',
        justifyContent: 'center',

    }



})