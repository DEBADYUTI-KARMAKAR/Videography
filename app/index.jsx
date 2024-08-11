import React from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";

import { Link, router, Redirect } from "expo-router";
import { images } from "../constants";
import CustomButton from "./../components/CustomButton";
import { StatusBar } from "expo-status-bar";
// import { useGlobalContext } from "../context/GlobalProvider";
export default function index() {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center h-full px-4">
          <View className="flex flex-row items-center justify-center ">
            <Image
              source={images.logoSmall}
              className="w-[70px] h-[50px]"
              resizeMode="contain"
            />
            <Text className="text-indigo-500 font-psemibold text-2xl">
              CompanyName
            </Text>
          </View>
          <Image
            source={images.home}
            className="w-full h-[300px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-2xl text-black font-bold text-center">
              Lorem ipsum dolor sit. Lorem, ipsum, with{" "}
              <Text className="text-indigo-500">CompanyName</Text>
            </Text>
          </View>

          <Text className="text-sm font-pregular text-gray-400 mt-7 text-center">
            Lorem ipsum dolor consectetur. Suscipit, repellat?
          </Text>
          <View className="flex-row">
            <CustomButton
              title="Login"
              handlePress={() => router.push("/sign-in")}
              containerStyles="w-[150px] mt-7 mr-4 bg-black"
            />
            <CustomButton
              title="Register"
              handlePress={() => router.push("/sign-up")}
              containerStyles="w-[150px] mt-7 "
            />
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//     container:{
//         display:'flex',
//         flex:1,
//         justifyContent:'center',
//         alignItems:'center'
//     }
// })
