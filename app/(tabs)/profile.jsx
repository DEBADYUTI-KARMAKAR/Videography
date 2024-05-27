import { View, Text, FlatList, TouchableOpacity,Image } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import SearchInput from "../../components/searchInput";
import EmptyState from "../../components/EmptyState";
import { getUserPosts, searchPosts, signOut } from "../../lib/appwrite";
import useAppwrite from "../../lib/useAppwrite";
import VideoCard from "../../components/VideoCard";
import { router, useLocalSearchParams } from "expo-router";
import { useGlobalContext } from "../../context/GlobalProvider";
import { icons } from "../../constants";
import InfoBox from "../../components/InfoBox";
const Profile = () => {
  const {user,setUser,setIsLoggedIn}=useGlobalContext();
  const { data: posts } = useAppwrite(() => getUserPosts(user.$id));
const logout=async()=>{
  await signOut();
  setUser(null);
  setIsLoggedIn(false);
  router.replace('/sign-in')
}
 
  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        // data={[{id:1},{id:2},{id:3}]}
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <VideoCard video={item} />}
        ListHeaderComponent={() => (
          <View className="w-full justify-center items-center
          mt-6 mb-12 px-4 ">
            <TouchableOpacity
            className="w-full items-end mb-10"
            onPress={logout}
            >
              <Image source={icons.logout}
              resizeMode="contain" className="w-6 h-6"
              />
            </TouchableOpacity>
            <View className="w-28 h-28 border border-secondary rounded-full justify-center
            items-center
            ">
              <Image source={{uri:user?.avatar}}
              className="w-[100%] h-[100%] rounded-full" 
              resizeMode="cover"/>
            </View>
            <InfoBox
            title={(user?.username)}
            containerStyles="mt-5"
            titleStyles="text-lg"
            />
            <View className="mt-5 flex-row">
            <InfoBox
            title={posts.length || 0}
            subtitle="Posts"
            containerStyles="mr-10"
            titleStyles="text-xl"
            />
            <InfoBox
            title="3.5k"
            subtitle="Followers"
            titleStyles="text-xl"
            />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="No videos found for this search query"
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Profile;
