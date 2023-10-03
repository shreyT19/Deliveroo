import { useNavigation } from "@react-navigation/core";
import React, { useLayoutEffect } from "react";
import { ScrollView } from "react-native";
import { TextInput } from "react-native";
import { Image, SafeAreaView, Text, View } from "react-native";

import { ChevronDownIcon,UserIcon,AdjustmentsVerticalIcon,MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className='bg-white pt-5 '>
      {/* Header */}
      <View className="flex-row mx-4 space-x-2 items-center pb-3">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 rounded-full"
        />
        <View className='flex-1'>
          <Text className="font-bold text-gray-400 text-xs">Deliver Now !</Text>
          <Text className="font-bold  text-lg">Current Location
            <ChevronDownIcon size={20} color='#00ccbb' />
          </Text>
        </View>
        <UserIcon size={35} color='#00ccbb' />
      </View>

      {/* Search */}
      <View className='flex-row items-center space-x-2 pb-2 mx-4'>
        <View className='flex-row space-x-2 bg-gray-200 flex-1 p-3 rounded-xl'>
          <MagnifyingGlassIcon size={20} color='#00ccbb' />
          <TextInput 
            placeholder="Restaurants and Cuisines..."
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color='#00ccbb' />
      </View>

      {/* Body */}
      <ScrollView className='mx-4'>
        {/* Categories */}
          <Categories/>
        {/* Featured Rows */}
          <FeaturedRow
            title='Featured'
            category='Paid placements from our partners'
            featuredCategory='Featured'
          />
        {/* Featured Rows */}
        <FeaturedRow
            title='Discounts'
            category="Everyone's enjoying these discounts!"
            featuredCategory='discounts'
          />
          {/* Offers Near You */}
          <FeaturedRow
            title='Offers near you!'
            category='Why not support your local restaurants tonight!'
            featuredCategory='offers'
          />

      </ScrollView>
      
    </SafeAreaView>
  );
};

export default HomeScreen;
