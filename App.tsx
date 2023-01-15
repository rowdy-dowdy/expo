import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Route, Routes } from 'react-router';
import { NativeRouter } from 'react-router-native';
import Home from './pages/home';

import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <NativeRouter>
      <SafeAreaView>
        <View className='flex-1 items-center justify-center bg-blue'>
          <Text className='text-blue-600 bg-red'>Open up App.tsx to start working on your app!</Text>
        </View>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>

      </SafeAreaView>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
