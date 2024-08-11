import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";

const BookMark = () => {
  return (
    <SafeAreaView className="h-full bg-primary">
      <View className="flex items-center justify-center mt-72">
        <Text className="text-white text text-sm">
          Bookmark Page
        </Text>
        <Text className="text-white text text-3xl">
          Coming Soon.. 
        </Text>
        <CustomButton
      title="Video Feed"
      handlePress={()=> router.push('/home')}
      containerStyles="w-60 my-5"
      />
      </View>
    </SafeAreaView>
  );
};
export default BookMark;
