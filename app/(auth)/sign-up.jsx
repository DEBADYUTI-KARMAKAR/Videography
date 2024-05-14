import { View, Text, SafeAreaView, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import {images} from "../../constants"
import FormField from "../../components/FromField"
import CustomButton from '../../components/CustomButton'
import { Link, router } from 'expo-router'
import { createUser } from '../../lib/appwrite'
import { useGlobalContext } from '../../context/GlobalProvider'
const SignUp = () => {
  const {setUser,setIsLoggedIn}=useGlobalContext();
  const [isSubmitting,setSubmitting] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const submit=async()=>{
    if (form.username === "" || form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }

    setSubmitting(true);
    try {
      const result = await createUser(form.email,form.password,form.username);
      setUser(result);
      setIsLoggedIn(true)
      router.replace("/home");
    } catch (error) {
      Alert.alert('Error',error.message)
    }finally{
      setSubmitting(false);
    }
  };
  return (
    <SafeAreaView className="bg-primary h-full ">
      <ScrollView>
        <View className="w-full flex justify-center h-[700px] px-4 my-6 ">
          <Image
          source={images.logo}
          resizeMode="contain"
          className="w-[115px] h-[35px]"
          />

          <Text className="text-3xl  text-white text-semibold mt-10 font-psemibold">
            Sign Up</Text>

            <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e)=>setForm({...form,username:e})}
            otherStyles="mt-7"
            />
            <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e)=>setForm({...form,email:e})}
            otherStyles="mt-7"
            keyboardType="email-address"
            />
            <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e)=>setForm({...form,password:e})}
            otherStyles="mt-7"
            />
            <CustomButton
            title="Sign Up"
            containerStyles="mt-7"
            handlePress={submit}
            isLoading={isSubmitting}
            />
            <View className="justify-center pt-5 flex-row gap-2">
              <Text className="text-lg text-gray-100 font-pregular">
                Already have an acount?
              </Text>
              <Link href="/sign-in"
              className="text-lg text-secondary-100 font-psemibold"
              >
                Login
              </Link>
            </View>
        </View>
      </ScrollView>
     
    </SafeAreaView>
  )
}

export default SignUp