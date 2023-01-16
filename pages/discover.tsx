import { useState, useRef, useEffect } from "react";
import { Animated, Dimensions, Image, Platform, Text, TouchableOpacity, View } from "react-native";
import { Link, useNavigate } from "react-router-native";
import { Avatar } from "../assets";

export default () => {
  

  const navigate = useNavigate()

  return(
    <View className="flex-1 overflow-hidden">
      {/* First section */}
      <View className='flex-row px-6 items-center justify-between space-x-2'>
        <View className="flex-1">
          <Text className="text-4xl text-teal-600 font-bold">Discover</Text>
          <Text className="text-3xl text-gray-">the beauty today</Text>
        </View>

        <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center">
          <Image source={Avatar} className="w-full h-full rounded-md" />
        </View>
      </View>
    </View>
  )
}