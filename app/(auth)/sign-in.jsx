import { Link } from "expo-router";
import React, { useState } from "react";
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import FormField from "../../components/FromField";
import { icons } from "../../constants";
import { images } from "../../constants";
import { StatusBar } from "expo-status-bar";
import CustomButton from "../../components/CustomButton";
// import { getCurrentUser, signIn } from "../../lib/appwrite";
// import { useGlobalContext } from "../../context/GlobalProvider";
const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView>
        <View className="w-full justify-center h-[700px] px-4 my-6">
          <View className="flex flex-col justify-center items-center">
            <View className="flex flex-row items-center justify-center mb-12">
              <Image
                source={images.logoSmall}
                className="w-[70px] h-[50px]"
                resizeMode="contain"
              />

              <Text className="text-black text-3xl">Company name</Text>
            </View>
            <View className="flex flex-col items-baseline justify-center  ">
              <View className="mb-4">
                <Text className="text-4xl font-bold">Let's sign you in</Text>
                <Text className="text-[20px]  mr-9 text-gray-500 mt-3">
                  Welcome Back,
                </Text>
                <Text className="text-[20px]  mr-9 text-gray-500 ">
                  You have been missed!!
                </Text>
              </View>
              <View className="my-5">
                {/* <Text className="text-base text-gray-100 ">
                Email
              </Text> */}
                <FormField
                  placeholder={"Enter your email id"}
                  title="Email"
                  otherStyles="w-full"
                  keyboardType="email-address"
                />
              </View>
              <View>
                <FormField title="Password"
                placeholder={"Enter your password"}
                otherStyles="w-full" />
              </View>
            </View>
            <View className="w-full items-end mt-4">
              <Text className="text-indigo-500">Forgot Password?</Text>
            </View>
            <CustomButton title="Login" containerStyles="w-full mt-7 " />
          </View>
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 ">Don't have account?</Text>
            <Link href="/sign-up" className="text-lg text-indigo-500 ">
              Sign Up
            </Link>
          </View>
        </View>
        <StatusBar backgroundColor="#ffffff" style="dark" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
