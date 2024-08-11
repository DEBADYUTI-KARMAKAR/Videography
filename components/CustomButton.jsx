import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({containerStyles,title,textStyles,handlePress,isLoading}) => {
  return (
    <TouchableOpacity
    onPress={handlePress}
    activeOpacity={0.7}
      className={` bg-indigo-500 rounded-xl min-h-[62px] justify-center items-center
      ${containerStyles} ${isLoading?'opacity-50':''}
      `}
      disabled={isLoading}
    >
      <Text className={`text-white font-psemibold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
