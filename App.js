import React, { useState } from 'react';
import { AppLoading } from 'expo';
import { MainLayout } from './src/MainLayout';
import { bootstrap } from './src/bootstrap';
import { UserState } from './src/context/user/UserState';

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onFinish={() => setIsReady(true)}
        onError={err => console.log(err)}
      />
    );
  }

  return (
    <UserState>
      <MainLayout />
    </UserState>
  );
}
