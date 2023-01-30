import { Image, Platform, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Outlet, useNavigate } from "react-router-native";
import ImageAuto from "../../components/image_auto";
import Svg, { Path } from "react-native-svg"
import { FacebookSvg, GoogleSvg, LoginSvg, TwitterSvg } from "../../assets"
import DateTimePicker, { DateTimePickerAndroid, DateTimePickerEvent,  } from '@react-native-community/datetimepicker';
import { useState } from "react";

export default ({navigation}: any) => {
  const [date, setDate] = useState<Date>(new Date())
  const [is_setdate, setIsSetdate] = useState(false)
  const [show_date_picker, setShow] = useState(false)

  const onChange = (event: DateTimePickerEvent, selectedDate: Date | undefined) => {
    console.log(1)
    if (selectedDate)
      setDate(selectedDate);

    setIsSetdate(true)
  };

  return(
    <SafeAreaView className="flex-1 justify-center">
      <ScrollView className="flex-grow-0 px-4">
        <View className="items-center">
          {/* <Image source={LoginSvg} className="w-full" resizeMode="contain" /> */}
          { (Platform.OS === "web")
            ? <ImageAuto img={LoginSvg} width={300} style={{transform: [{rotate: '-5deg'}], marginBottom: 32}} />
            : <LoginSvg width={300} height={300} />
          }
      
        </View>

        <Text className="text-3xl font-semibold text-[#333] mb-6">Register</Text>

        {/* full name */}
        <View className="flex-row items-center border-b border-[#ccc] space-x-2 mb-4">
          <Svg width="20" height="20" viewBox="0 0 24 24" fill="#333" >
            <Path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z" />
          </Svg>
          <TextInput className="flex-1 py-2" placeholder="Full name" />
        </View>

        {/* email */}
        <View className="flex-row items-center border-b border-[#ccc] space-x-2 mb-4">
          <Svg width="20" height="20" viewBox="0 0 24 24" fill="#333" >
            <Path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10c1.466 0 2.961-.371 4.442-1.104l-.885-1.793C14.353 19.698 13.156 20 12 20c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8v1c0 .692-.313 2-1.5 2-1.396 0-1.494-1.819-1.5-2V8h-2v.025A4.954 4.954 0 0 0 12 7c-2.757 0-5 2.243-5 5s2.243 5 5 5c1.45 0 2.748-.631 3.662-1.621.524.89 1.408 1.621 2.838 1.621 2.273 0 3.5-2.061 3.5-4v-1c0-5.514-4.486-10-10-10zm0 13c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z" />
          </Svg>
          <TextInput className="flex-1 py-2" keyboardType="email-address" placeholder="Email" />
        </View>

        {/* password */}
        <View className="flex-row items-center border-b border-[#ccc] space-x-2 mb-4">
          <Svg width="20" height="20" viewBox="0 0 24 24" fill="#333" >
            <Path d="M12 2C9.243 2 7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zm6 10 .002 8H6v-8h12zm-9-2V7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9z" />
          </Svg>
          <TextInput className="flex-1 py-2" secureTextEntry={true} placeholder="Password" />
        </View>
        
        {/* confirm password */}
        <View className="flex-row items-center border-b border-[#ccc] space-x-2 mb-4">
          <Svg width="20" height="20" viewBox="0 0 24 24" fill="#333" >
            <Path d="M12 2C9.243 2 7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zm6 10 .002 8H6v-8h12zm-9-2V7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9z" />
          </Svg>
          <TextInput className="flex-1 py-2" secureTextEntry={true} placeholder="Confirm Password" />
        </View>

        {/* date */}
        <View className="flex-row items-center border-b border-[#ccc] space-x-2 mb-4">
          <Svg width="20" height="20" viewBox="0 0 24 24" fill="#333" >
            <Path d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z" />
            <Path d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z" />
          </Svg>
          <TouchableOpacity onPress={() => setShow(true)} className="flex-1 py-2">
            <Text>{is_setdate ? date.toLocaleString() : 'Date or Birth'}</Text>
          </TouchableOpacity>
          { show_date_picker && (
            <DateTimePicker
              // testID="dateTimePicker"
              value={date}
              mode="date"
              is24Hour={true}
              onChange={onChange}
            />
          )}
        </View>

        <TouchableOpacity className="px-4 py-4 rounded-lg bg-[#AD40AF] mb-4">
          <Text className="font-bold text-white text-center">Register</Text>
        </TouchableOpacity>

        <Text className="text-center text-[#666] mb-4">Or, login with ...</Text>

        <View className="flex-row justify-between mb-4">
          <TouchableOpacity className="flex-1 items-center py-3 border-2 border-[#ddd] rounded-lg">
            { (Platform.OS === "web")
              ? <ImageAuto img={GoogleSvg} width={24} />
              : <GoogleSvg width={24} height={24} />
            }
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 mx-2 items-center py-3 border-2 border-[#ddd] rounded-lg">
            { (Platform.OS === "web")
              ? <ImageAuto img={TwitterSvg} width={24} />
              : <TwitterSvg width={24} height={24} />
            }
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 items-center py-3 border-2 border-[#ddd] rounded-lg">
            { (Platform.OS === "web")
              ? <ImageAuto img={FacebookSvg} width={24} />
              : <FacebookSvg width={24} height={24} />
            }
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-center">
          <Text>Already registered?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('login')}>
            <Text className="text-[#AD40AF] font-semibold pl-2">Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}