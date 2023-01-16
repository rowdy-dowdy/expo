import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Route, Routes } from 'react-router';
import { NativeRouter } from 'react-router-native';
import { NativeWindStyleSheet } from "nativewind";

import Home from './pages/home';
import Discover from './pages/discover';

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <NativeRouter>
      <SafeAreaView className='flex-1'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/discover' element={<Discover/>} />
        </Routes>
      </SafeAreaView>
    </NativeRouter>
  );
}