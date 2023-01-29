import { useState, useRef, useEffect } from "react";
import { Animated, Dimensions, Image, Platform, Text, TouchableOpacity, View } from "react-native";
import { Link, useNavigate } from "react-router-native";
import { HeroImage } from "../assets";

export default () => {
  var [actualImageWidth, setActualImageWidth] = useState(0)
  var [actualImageHeight, setActualImageHeight] = useState(0)

  const scaleWidth = async ({ source, desiredHeight } : {source: any, desiredHeight: any}) => {
    let width = 1, 
        height = 1

    if (Platform.OS === "web") {
      const a: any = await new Promise((res,rej) => {
        Image.getSize(source, (width, height) => {
          res({width, height});
      }, rej);
      })

      width = a.width
      height = a.height
    }
    else {
      width = Image.resolveAssetSource(source).width
      height = Image.resolveAssetSource(source).height
    }

    return desiredHeight / height * width
  }

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim2 = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start()
  }, [])

  Animated.loop(
    Animated.sequence([
      Animated.timing(fadeAnim2, {
        toValue: 1.1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim2, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      })
    ])
  ).start()

  const navigate = useNavigate()

  return(
    <View className="flex-1 overflow-hidden">
      {/* First section */}
      <View className='flex-row px-6 mt-8 items-center space-x-2 z-10'>
        <View className='w-16 h-16 bg-black rounded-full items-center justify-center'>
          <Text className='text-sky-400 text-3xl'>Go</Text>
        </View>
        <Text className='text-[#333] text-3xl font-semibold'>Travel</Text>
      </View>

      {/* Second section */}
      <View className="mt-8 px-6 space-y-3 z-10">
        <Text className="text-[#333] text-4xl">Enjoy the trip with</Text>
        <Text className="text-sky-600 text-3xl font-bold">Good Moments</Text>

        <Text className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur 
          adipisicing elit. Similique aspernatur consequatur tenetur.
        </Text>
      </View>

      {/* Circle section */}
      <View className="absolute bottom-36 -right-36 w-96 h-96 bg-teal-400 rounded-full"></View>
      <View className="absolute -bottom-28 -left-36 w-96 h-96 bg-orange-400 rounded-full"></View>

      {/* Image section */}
      <View 
        className="flex-1 items-center justify-end"
        onLayout={async (event) => {
          let {width, height} = event.nativeEvent.layout

          const imageWidth = await scaleWidth({
            source: HeroImage,
            desiredHeight: height
          })

          setActualImageWidth(imageWidth)
          setActualImageHeight(height)
        }}
      >
        <Animated.Image
          source={HeroImage} 
          // className="flex-1 flex-col h-full" 
          style={{width: actualImageWidth, height: actualImageHeight, opacity: fadeAnim}}
        />

        {/* <Link to="/discover" className="absolute bottom-20"> */}
          <TouchableOpacity 
            className="absolute bottom-20 w-24 h-24 border-2 border-t-4 border-b-0 border-sky-400 rounded-full items-center justify-center" 
            onPress={() => navigate('discover')}
          >
            <View>
              <Animated.View 
                className="w-20 h-20 items-center justify-center rounded-full bg-sky-400"
                style={{transform: [{scale: fadeAnim2}]}}
              >
                <Text className="text-3xl text-white font-semibold">Go</Text>
              </Animated.View>
            </View>
          </TouchableOpacity>
        {/* </Link> */}
      </View>
    </View>
  )
}