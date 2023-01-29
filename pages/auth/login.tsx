import { Image, Text, TextInput, View } from "react-native";
import { Outlet, useNavigate } from "react-router-native";
import { LoginSvg } from "../../assets"
import ImageAuto from "../../components/image_auto";
import Svg, { Path } from "react-native-svg"

export default () => {

  const navigate = useNavigate()

  return(
    <View className="flex-1 justify-center px-4">
      <View className="items-center mb-8">
        {/* <Image source={LoginSvg} className="w-full" resizeMode="contain" /> */}
        <ImageAuto img={LoginSvg} width={300} style={{transform: [{rotate: '-5deg'}]}} />

      </View>

      <Text className="text-3xl font-semibold text-[#333] mb-8">Login</Text>

      <View className="flex-row border-b border-[#ccc] pb-2 space-x-2">
      <Svg
        width={20}
        height={20}
        viewBox="0 0 24 24"
        fill="#333"
      >
        <Path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10c1.466 0 2.961-.371 4.442-1.104l-.885-1.793C14.353 19.698 13.156 20 12 20c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8v1c0 .692-.313 2-1.5 2-1.396 0-1.494-1.819-1.5-2V8h-2v.025A4.954 4.954 0 0 0 12 7c-2.757 0-5 2.243-5 5s2.243 5 5 5c1.45 0 2.748-.631 3.662-1.621.524.89 1.408 1.621 2.838 1.621 2.273 0 3.5-2.061 3.5-4v-1c0-5.514-4.486-10-10-10zm0 13c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z" />
      </Svg>
        <TextInput className="flex-1" keyboardType="email-address" placeholder="Email" />
      </View>
    </View>
  )
}