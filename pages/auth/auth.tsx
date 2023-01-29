import { View } from "react-native";
import { Outlet, useNavigate } from "react-router-native";
export default () => {

  const navigate = useNavigate()

  return(
    <View className="flex-1 overflow-hidden">
      <Outlet/>
    </View>
  )
}