import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Navigate, Route, Routes } from 'react-router';
import { NativeRouter, useNavigate } from 'react-router-native';
import { NativeWindStyleSheet } from "nativewind";
import { useEffect } from 'react';

import Home from './pages/home';
import Discover from './pages/discover';
import Auth from './pages/auth/auth';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import ProtectedLayout from './layouts/protected_layout';
import { AuthProvider } from './components/auth_provider';
import { AuthLayout } from './layouts/auth_layout';

NativeWindStyleSheet.setOutput({
  default: "native",
});

const Main = () => {
  return (
    <SafeAreaView className='flex-1'>
      <Routes>
        <Route element={<AuthLayout/>}>
          <Route element={<ProtectedLayout/>}>
            <Route path='/' element={<Home/>} />
            <Route path='discover' element={<Discover/>} />
          </Route>
          
          <Route path='auth' element={<Auth/>}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Route>
      </Routes>
    </SafeAreaView>
  )
}

export default function App() {
  return (
    <NativeRouter>
      <Main />
    </NativeRouter>
  );
}