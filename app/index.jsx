import React from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";

import { Link, router, Redirect } from "expo-router";
import { images } from "../constants";
import CustomButton from "./../components/CustomButton";
import { StatusBar } from "expo-status-bar";
import { useGlobalContext } from "../context/GlobalProvider";
export default function index() {
  const { isLoading, isLoggedIn } = useGlobalContext();

  if (!isLoading && isLoggedIn) return <Redirect href="/home" />;
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center h-full px-4">
          
          <View className="flex flex-row items-center justify-center ">
            <Image
            source={images.logoSmall}
            className="w-[70px] h-[50px]"
            resizeMode="contain"
            />
            <Text className="text-white font-psemibold text-2xl">
              Videography
            </Text>
          </View>
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-2xl text-white font-bold text-center">
              Discover Endless Possibilities With{" "}
              <Text className="text-secondary-200">Videography</Text>
            </Text>
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            The world is watching. Show them what you've got.
          </Text>
          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          />
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
