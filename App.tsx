import { StatusBar } from 'expo-status-bar';
import { NativeWindStyleSheet } from "nativewind";

import Home from './pages/home';
import Discover from './pages/discover';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import { AuthProvider, useAuth } from './components/auth_provider';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

NativeWindStyleSheet.setOutput({
  default: "native",
});

const Stack = createNativeStackNavigator()

const Main = () => {

  const { user } = useAuth();

  return (
    // <SafeAreaView className='flex-1'>
    //   <Routes>
    //     <Route element={<AuthLayout/>}>
    //       <Route element={<ProtectedLayout/>}>
    //         <Route path='/' element={<Home/>} />
    //         <Route path='discover' element={<Discover/>} />
    //       </Route>
          
    //       <Route path='auth' element={<Auth/>}>
    //         <Route path="login" element={<Login />} />
    //         <Route path="register" element={<Register />} />
    //       </Route>
    //     </Route>
    //   </Routes>
    // </SafeAreaView>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      { user ? (
        <Stack.Group>
          <Stack.Screen name='home' component={Home} />
          <Stack.Screen name='discover' component={Discover} />
        </Stack.Group>
      ) : (
        <Stack.Group>
          <Stack.Screen name='login' component={Login} />
          <Stack.Screen name='register' component={Register} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Main />
      </AuthProvider>
    </NavigationContainer>
  );
}