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
import { icons } from "../../constants";
import { images } from "../../constants";
import DropDownPicker from "react-native-dropdown-picker";
import { StatusBar } from "expo-status-bar";
import CustomButton from "../../components/CustomButton";
import FormField from "../../components/FromField";
import {
  ApplicationProvider,
  Layout,
  Select,
  SelectItem,
} from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { StyleSheet } from "react-native";
const SignUp = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Sample items
  const items = [
    { title: "HR" },
    { title: "Engineering" },
    { title: "Marketing" },
    { title: "Finance" },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      >
        <View className="bg-indigo-500 mt-5 flex-1 justify-center items-center py-16 px-16 flex-row space-x-8 ">
          <Image
            source={images.logoSmall}
            className="w-[70px] h-[70px] mb-4 rounded-full"
            resizeMode="cover" // Ensures the image covers the entire round area
          />

          <Text className="text-white text-2xl font-extrabold">
            Hii,👋🏽{"\n"} Let's Get You Set Up with a New Account.
          </Text>
        </View>

        <View className="w-full px-4 py-6 mt-7">
          <View className="mb-4">
            <FormField
              placeholder={"Enter your name"}
              title="Full Name"
              otherStyles="w-full"
            />
          </View>

          <View className="mb-4">
            <FormField
              placeholder={"Enter your phone number"}
              title="Phone"
              otherStyles="w-full"
              keyboardType="numeric"
            />
          </View>

          <View className="mb-4">
            <FormField
              placeholder={"Enter your email id"}
              title="Email"
              otherStyles="w-full"
              keyboardType="email-address"
            />
          </View>

          <View className="mb-4 space-y-2">
            <Text className="text-base text-gray-600 font-pmedium">
              Department
            </Text>
            <View>
              <ApplicationProvider {...eva} theme={eva.light}>
                <Layout className="w-full">
                  <Select
                    selectedIndex={selectedIndex}
                    onSelect={(index) => setSelectedIndex(index)}
                    value={
                      selectedIndex
                        ? items[selectedIndex.row].title
                        : "Select your department"
                    }
                    className="bg-white w-full h-16"
                    dropdownStyle={styles.dropdown}
                  >
                    {items.map((item, index) => (
                      <SelectItem key={index} title={item.title} />
                    ))}
                  </Select>
                </Layout>
              </ApplicationProvider>
            </View>
          </View>
          <View className="mb-4">
            <FormField
              placeholder={"Enter your employee code"}
              title="Employee Code"
              otherStyles="w-full"
            />
          </View>

          <View className="mb-4">
            <FormField
              title="Password"
              placeholder={"Enter your password"}
              otherStyles="w-full"
            />
          </View>

          <View className="mb-4">
            <FormField
              title="Confirm Password"
              placeholder={"Confirm your password"}
              otherStyles="w-full"
            />
          </View>

          <CustomButton title="Register" containerStyles="w-full mt-7 mb-3 " />

          <View className="flex-row justify-center items-center">
            <Text className="text-lg text-gray-600 mr-2">
              Already have an account?
            </Text>
            <Link href="/sign-in" className="text-lg text-blue-500 ">
              Login
            </Link>
          </View>
        </View>
      <StatusBar backgroundColor="#6366f1" style="dark" />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  
  dropdown: {
    backgroundColor: "#fafafa",
    borderColor: "#dcdcdc",
    borderRadius: 50,
  },
});

export default SignUp;
