
import React from 'react'
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'

export default function index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-pblack">Videoraphy</Text>
      <StatusBar style='auto' />

      <Link href='/home'>Go to home</Link>
    </View>
  )
}

// const styles = StyleSheet.create({
//     container:{
//         display:'flex',
//         flex:1,
//         justifyContent:'center',
//         alignItems:'center'
//     }
// })